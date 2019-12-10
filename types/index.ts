export type URL = '/' | '/schedule' | '/workouts-data' | '/health-planet'

export type Title = 'Workouts' | 'Schedule' | 'Workouts Data' | 'Health Planet'

export type BottomNavigation = {
  to: URL
  value: string
  text: Title
  icon: string
}

export type WeightMachineTrainingResult = {
  weight: number
  times: number
  set: number
  boost?: boolean
}

export type WeightTrainingResult = {
  times: number
  set: number
}

export type WorkoutResult = WeightMachineTrainingResult | WeightTrainingResult

export type Workout = {
  name: string
  results: WorkoutResult[]
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

export type WorkoutStatus = 'pending' | 'ready' | 'running' | 'exited'

export type WorkoutPanelContentProps = {
  index: number
  workout: Workout
  save: (
    index: number,
    results: WeightMachineTrainingResult[],
    memo: string
  ) => void
}
