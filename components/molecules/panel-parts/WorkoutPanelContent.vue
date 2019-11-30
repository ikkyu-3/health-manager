<template>
  <component
    :is="state.componentName"
    :workout="workout"
    :index="index"
    :save="save"
  />
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import LegPressPanelContent from './workout-contents/LegPressPanelContent.vue'
import { WorkoutPanelContentProps } from '@/types'

export default createComponent<WorkoutPanelContentProps, {}>({
  components: { LegPressPanelContent },
  props: {
    index: Number,
    workout: Object,
    save: Function
  },
  setup(props) {
    const state = reactive({
      componentName: `${props.workout.name.replace(/\s+/g, '')}PanelContent`
    })

    return { state }
  }
})
</script>

<style lang="scss" scoped>
.v-expansion-panel-content {
  background-color: #fafafa;
}
</style>
