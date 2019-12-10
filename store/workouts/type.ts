import { Workout, WorkoutResult } from '@/types'

// state
export type WorkoutsState = { workouts: Workout[] }

// mutation
export type AddWorkoutMutationPayload = { name: string }

export type RemoveWorkoutMutationPayload = { index: number }

export type UpdateResultsMutationPayload = {
  index: number
  results: WorkoutResult[]
  memo: string
}

export type UpdateTimeMutationPayload = { index: number; time: string }

// action
export type AddWorkoutActionPayload = { name: string }

export type RemoveWorkoutActionPayload = { index: number }

export type UpdateResultsActionPayload = {
  index: number
  results: WorkoutResult[]
  memo: string
}

export type UpdateTimeActionPayload = { index: number; time: string }
