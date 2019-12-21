import { Workout, WorkoutObjectStore } from '@/types'

const DATABASE_NAME = 'MuscleTrainingApp'
const WORKOUT_OBJECT_STORE = 'workouts'

class IndexedDB {
  init() {
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

  save(workouts: Workout[]) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DATABASE_NAME)

      request.onsuccess = () => {
        const transaction = request.result.transaction(
          [WORKOUT_OBJECT_STORE],
          'readwrite'
        )

        transaction.oncomplete = () => resolve()

        transaction.onerror = event => reject(event)

        const dateObject = new Date()
        const date = `${dateObject.getFullYear()}-${dateObject.getMonth() +
          1}-${dateObject.getDate()}`
        const objectStore = transaction.objectStore(WORKOUT_OBJECT_STORE)

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
}

export default IndexedDB
