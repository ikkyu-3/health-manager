import { Workout, WorkoutObjectStore } from '@/types'

const DATABASE_NAME = 'MuscleTrainingApp'
const WORKOUT_OBJECT_STORE = 'workouts'

class IndexedDB {
  public init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DATABASE_NAME)

      request.onupgradeneeded = () => {
        const objectStore = request.result.createObjectStore(
          WORKOUT_OBJECT_STORE,
          { keyPath: 'id' }
        )

        objectStore.createIndex('date', 'date', { unique: false })
        objectStore.createIndex('name', 'name', { unique: false })
      }

      request.onsuccess = () => resolve()

      request.onerror = event => reject(event)
    })
  }

  public save(workouts: Workout[]) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DATABASE_NAME)

      request.onsuccess = () => {
        const transaction = request.result.transaction(
          [WORKOUT_OBJECT_STORE],
          'readwrite'
        )

        transaction.oncomplete = () => resolve()

        transaction.onerror = event => reject(event)

        const objectStore = transaction.objectStore(WORKOUT_OBJECT_STORE)
        const date = this.getDate()

        workouts.forEach(workout => {
          const saveData: WorkoutObjectStore = {
            id: `${date}_${workout.name}`,
            date,
            ...workout
          }
          objectStore.add(saveData)
        })
      }

      request.onerror = event => reject(event)
    })
  }

  public read() {
    return new Promise<Workout[]>((resolve, reject) => {
      const request = indexedDB.open(DATABASE_NAME)

      request.onsuccess = () => {
        const transaction = request.result.transaction(
          [WORKOUT_OBJECT_STORE],
          'readonly'
        )

        transaction.onerror = event => reject(event)

        const index = transaction
          .objectStore(WORKOUT_OBJECT_STORE)
          .index('date')
        const singleKeyRange = IDBKeyRange.only(this.getDate())
        const workouts: Workout[] = []

        index.openCursor(singleKeyRange).onsuccess = event => {
          const cursor = (event.target as IDBRequest<IDBCursorWithValue>)
            .result as IDBCursorWithValue | null

          if (cursor) {
            const workout: Workout = {
              name: cursor.value.name,
              results: cursor.value.results,
              memo: cursor.value.memo,
              startTime: cursor.value.startTime,
              endTime: cursor.value.endTime
            }

            workouts.push(workout)
            cursor.continue()
          } else {
            resolve(workouts)
          }
        }
      }

      request.onerror = event => reject(event)
    })
  }

  public getDate() {
    const date = new Date()
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }
}

export default IndexedDB
