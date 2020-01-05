export type URL = '/' | '/schedule' | '/workouts-data' | '/health-planet'

export type Title = 'Workouts' | 'Schedule' | 'Workouts Data' | 'Health Planet'

export type BottomNavigation = {
  to: URL
  value: string
  text: Title
  icon: string
  disabled: boolean
}

// Workout Result
export type BaseWorkoutResult = {
  set: number
}

export type WorkoutResultByWeightMachine = {
  weight: number
  times: number
} & BaseWorkoutResult

export type WorkoutResultByNumberOfTime = {
  times: number
} & BaseWorkoutResult

export type WorkoutResultByNumberOfTimeWithWeights = {
  hasWeight: boolean
  weight: number
} & WorkoutResultByNumberOfTime

export type WorkoutResultBySeconds = {
  seconds: number
} & BaseWorkoutResult

export type WorkoutResultBySecondsWithWeights = {
  hasWeight: boolean
  weight: number
} & WorkoutResultBySeconds

export type WorkoutResult =
  | WorkoutResultByWeightMachine
  | WorkoutResultByNumberOfTime
  | WorkoutResultByNumberOfTimeWithWeights
  | WorkoutResultBySeconds
  | WorkoutResultBySecondsWithWeights

// Workout
export type BaseWorkout = {
  name: string
  memo: string
  startTime: string | null
  endTime: string | null
}

export type Workout = BaseWorkout & {
  results: (
    | WorkoutResultByWeightMachine
    | WorkoutResultByNumberOfTime
    | WorkoutResultByNumberOfTimeWithWeights
    | WorkoutResultBySeconds
    | WorkoutResultBySecondsWithWeights
  )[]
}

// Panel Content Props
export type WorkoutByWeightMachinePanelContentProps = {
  index: number
  workout: BaseWorkout & { results: WorkoutResultByWeightMachine[] }
  finish: (
    index: number,
    results: WorkoutResultByWeightMachine[],
    memo: string
  ) => void
}

export type WorkoutByNumberOfTimePanelContentProps = {
  index: number
  workout: BaseWorkout & { results: WorkoutResultByNumberOfTime[] }
  finish: (
    index: number,
    results: WorkoutResultByNumberOfTime[],
    memo: string
  ) => void
}

export type WorkoutByNumberOfTimeWithWeightsPanelContentProps = {
  index: number
  workout: BaseWorkout & { results: WorkoutResultByNumberOfTimeWithWeights[] }
  finish: (
    index: number,
    results: WorkoutResultByNumberOfTimeWithWeights[],
    memo: string
  ) => void
}

export type WorkoutBySecondsPanelContentProps = {
  index: number
  workout: BaseWorkout & { results: WorkoutResultBySeconds[] }
  finish: (
    index: number,
    results: WorkoutResultBySeconds[],
    memo: string
  ) => void
}

export type WorkoutBySecondsWithWeightsPanelContentProps = {
  index: number
  workout: BaseWorkout & { results: WorkoutResultBySecondsWithWeights[] }
  finish: (
    index: number,
    results: WorkoutResultBySecondsWithWeights[],
    memo: string
  ) => void
}

export type WorkoutPanelContentProps =
  | WorkoutByWeightMachinePanelContentProps
  | WorkoutByNumberOfTimePanelContentProps
  | WorkoutByNumberOfTimeWithWeightsPanelContentProps
  | WorkoutBySecondsPanelContentProps
  | WorkoutBySecondsWithWeightsPanelContentProps

export type WorkoutContext = {
  index: string
  name: string
  isExited: boolean
}

export type WorkoutContexts = WorkoutContext[]

export type WorkoutStatus = 'pending' | 'ready' | 'running' | 'exited'

export type WorkoutObjectStore = {
  id: string
  date: string
} & Workout
