<template>
  <v-expansion-panel-header :disable-icon-rotate="state.disabled">
    {{ name }}
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
    name: String,
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

<style lang="scss" scoped>
.v-expansion-panel-header--active {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>
