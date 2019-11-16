import { Workout, WeightMachineResult } from '@/types'

// state
export type WorkoutsState = { workouts: Workout[] }

// mutation
export type AddWorkoutMutationPayload = { name: string }

export type RemoveWorkoutMutationPayload = { index: number }

export type UpdateWorkoutMutationResults = {
  index: number
  results: WeightMachineResult[]
  memo: string
}

// action
export type AddWorkoutActionPayload = { name: string }

export type RemoveWorkoutActionPayload = { index: number }

export type UpdateWorkoutResultsActionPayload = {
  index: number
  results: WeightMachineResult[]
  memo: string
}
