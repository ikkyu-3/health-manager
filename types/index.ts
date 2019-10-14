export type URL = '/' | '/schedule' | '/workouts-data' | '/health-planet'

export type Title = 'Workouts' | 'Schedule' | 'Workouts Data' | 'Health Planet'

export type BottomNavigation = {
  to: URL
  value: string
  text: Title
  icon: string
}

export type WeightMachineResult = {
  weight: number
  times: number
  set: number
  boost: boolean
}

export type Workout = {
  name: string
  results: WeightMachineResult[]
  memo: string
  startTime: string | null
  endTime: string | null
}

export type WorkoutContext = {
  index: string
  name: string
  isExited: boolean
}

export type WorkoutContexts = WorkoutContext[]
