<template>
  <v-expansion-panel-header :disable-icon-rotate="state.disabled">
    {{ header }}
    <template v-slot:actions>
      <v-icon small :color="state.color">{{ state.icon }}</v-icon>
    </template>
  </v-expansion-panel-header>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import { WorkoutStatus } from '@/types'

type WorkoutPanelIconProps = {
  name: string
  status: WorkoutStatus
}

export default createComponent<WorkoutPanelIconProps, {}>({
  props: {
    header: String,
    status: String
  },
  setup(props) {
    const state = reactive({
      disabled: computed(() => props.status !== 'pending'),
      color: computed(() => {
        switch (props.status) {
          case 'pending':
            return ''
          case 'ready':
            return 'teal'
          case 'running':
            return 'red'
          case 'exited':
            return 'gray'
        }
      }),
      icon: computed(() => {
        switch (props.status) {
          case 'pending':
            return ''
          case 'ready':
            return 'fa-play'
          case 'running':
            return 'fa-stop'
          case 'exited':
            return 'fa-check'
        }
      })
    })

    return { state }
  }
})
</script>
