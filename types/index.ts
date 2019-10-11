export type URL = '/' | '/schedule' | '/workouts-data' | '/health-planet'

export type Title = 'Workouts' | 'Schedule' | 'Workouts Data' | 'Health Planet'

export type BottomNavigation = {
  to: URL
  value: string
  text: Title
  icon: string
}

export type WeightMachineWorkout = {
  name: string
  target: string
  description: string
  options: {
    weight: boolean
    default: number
    step: number
  }
}

export type WeightMachineResult = {
  weight: number
  time: number
  set: number
}

export type WorkoutResult = {
  index: string
  workout: string
  results: WeightMachineResult[]
  memo: string
  startTime: string
  endTime: string
}
