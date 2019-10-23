import colors from 'vuetify/es5/util/colors'
import { BottomNavigation } from '@/types'

export const bottomNavigation: BottomNavigation[] = [
  {
    to: '/',
    value: 'workouts',
    text: 'Workouts',
    icon: 'fa-dumbbell'
  },
  {
    to: '/schedule',
    value: 'schedule',
    text: 'Schedule',
    icon: 'fa-calendar-alt'
  },
  {
    to: '/workouts-data',
    value: 'workouts-data',
    text: 'Workouts Data',
    icon: 'fa-list-alt'
  },
  {
    to: '/health-planet',
    value: 'health-planet',
    text: 'Health Planet',
    icon: 'fa-globe'
  }
]

export const mainColor = colors.blue.darken2
export const subColor = colors.teal.base

export const mainTextColor = colors.grey.lighten5

export const workoutMenu = [
  {
    target: 'Leg',
    workouts: ['Leg Press', 'Leg Extension', 'Leg Curl']
  },
  {
    target: 'Pectoral',
    workouts: ['Bench Press', 'Chest Press', 'Pectoral Fly']
  },
  {
    target: 'Triceps',
    workouts: []
  },
  {
    target: 'Back',
    workouts: []
  },
  {
    target: 'Biceps',
    workouts: []
  }
]
