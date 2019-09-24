import colors from 'vuetify/es5/util/colors'

type BottomNavigation = {
  to: string
  value: string
  text: string
  icon: string
}

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
    to: '/data',
    value: 'data',
    text: 'Data',
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

export const mainTextColor = colors.grey.lighten5
