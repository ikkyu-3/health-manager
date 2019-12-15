export type URL = '/' | '/schedule' | '/workouts-data' | '/health-planet'

export type Title = 'Workouts' | 'Schedule' | 'Workouts Data' | 'Health Planet'

export type BottomNavigation = {
  to: URL
  value: string
  text: Title
  icon: string
  disabled: boolean
}

export type WeightMachineTrainingResult = {
  weight: number
  times: number
  set: number
  boost?: boolean
}

export type WeightTrainingResult =
  | {
      times: number
      set: number
    }
  | {
      hasWeight: boolean
      weight: number
      times: number
      set: number
    }

export type WorkoutResult = WeightMachineTrainingResult | WeightTrainingResult

export type WeightMachineTraining = {
  name: string
  results: WeightMachineTrainingResult[]
  memo: string
  startTime: string | null
  endTime: string | null
}

export type WeightTraining = {
  name: string
  results: WeightTrainingResult[]
  memo: string
  startTime: string | null
  endTime: string | null
}

export type Workout = WeightMachineTraining | WeightTraining

export type WorkoutContext = {
  index: string
  name: string
  isExited: boolean
}

export type WorkoutContexts = WorkoutContext[]

export type WorkoutStatus = 'pending' | 'ready' | 'running' | 'exited'

export type WeightMachineWorkoutPanelContentProps = {
  index: number
  workout: WeightMachineTraining
  save: (
    index: number,
    results: WeightMachineTrainingResult[],
    memo: string
  ) => void
}

export type WeightWorkoutPanelContentProps = {
  index: number
  workout: WeightTraining
  save: (index: number, results: WeightTrainingResult[], memo: string) => void
}

export type WorkoutPanelContentProps =
  | WeightMachineWorkoutPanelContentProps
  | WeightWorkoutPanelContentProps
