import colors from 'vuetify/es5/util/colors'
import { BottomNavigation } from '@/types'

export const bottomNavigation: BottomNavigation[] = [
  {
    to: '/',
    value: 'workouts',
    text: 'Workouts',
    icon: 'fa-dumbbell',
    disabled: false
  },
  {
    to: '/schedule',
    value: 'schedule',
    text: 'Schedule',
    icon: 'fa-calendar-alt',
    disabled: true
  },
  {
    to: '/workouts-data',
    value: 'workouts-data',
    text: 'Workouts Data',
    icon: 'fa-list-alt',
    disabled: true
  },
  {
    to: '/health-planet',
    value: 'health-planet',
    text: 'Health Planet',
    icon: 'fa-globe',
    disabled: true
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
    target: 'Back',
    workouts: ['Lat Pulldown', 'Back Extension']
  },
  {
    target: 'Pectoral',
    workouts: ['Bench Press', 'Chest Press']
  },
  {
    target: 'Abdominal',
    workouts: ['Crunch', 'Leg Raise', 'Sit Up']
  }
]
