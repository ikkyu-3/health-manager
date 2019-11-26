import { Workout } from '@/types'

class IndexedDB {
  init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('MuscleTrainingApp')

      request.onupgradeneeded = () => {
        const objectStore = request.result.createObjectStore('workouts', {
          keyPath: 'date'
        })

        objectStore.createIndex('date', 'date', { unique: false })
        objectStore.createIndex('name', 'name', { unique: false })
      }

      request.onsuccess = () => resolve()

      request.onerror = event => reject(event)
    })
  }

  save(workouts: Workout[]) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open('MuscleTrainingApp')

      request.onsuccess = () => {
        const transaction = request.result.transaction(
          ['workouts'],
          'readwrite'
        )

        transaction.oncomplete = () => resolve()

        transaction.onerror = event => reject(event)

        const dateObject = new Date()
        const date = `${dateObject.getFullYear()}-${dateObject.getMonth() +
          1}-${dateObject.getDate()}`
        const objectStore = transaction.objectStore('workouts')

        workouts.forEach((workout, index) => {
          objectStore.add({ date, index, ...workout })
        })
      }

      request.onerror = event => reject(event)
    })
  }
}

export default IndexedDB
