<template>
  <component
    :is="state.componentName"
    :workout="workout"
    :index="index"
    :finish="finish"
  />
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import TreadmillPanelContent from './workout-contents/machine-trainings/TreadmillPanelContent.vue'
import BenchPressPanelContent from './workout-contents/weight-machine-trainings/BenchPressPanelContent.vue'
import ChestPressPanelContent from './workout-contents/weight-machine-trainings/ChestPressPanelContent.vue'
import LatPulldownPanelContent from './workout-contents/weight-machine-trainings/LatPulldownPanelContent.vue'
import LegCurlPanelContent from './workout-contents/weight-machine-trainings/LegCurlPanelContent.vue'
import LegExtensionPanelContent from './workout-contents/weight-machine-trainings/LegExtensionPanelContent.vue'
import LegPressPanelContent from './workout-contents/weight-machine-trainings/LegPressPanelContent.vue'
import AbRollerPanelContent from './workout-contents/weight-trainings/AbRollerPanelContent.vue'
import BackExtensionPanelContent from './workout-contents/weight-trainings/BackExtensionPanelContent.vue'
import CrunchPanelContent from './workout-contents/weight-trainings/CrunchPanelContent.vue'
import LegRaisePanelContent from './workout-contents/weight-trainings/LegRaisePanelContent.vue'
import PlankPanelContent from './workout-contents/weight-trainings/PlankPanelContent.vue'
import PushUpPanelContent from './workout-contents/weight-trainings/PushUpPanelContent.vue'
import SitUpPanelContent from './workout-contents/weight-trainings/SitUpPanelContent.vue'
import { WorkoutPanelContentProps } from '@/types'

export default createComponent<WorkoutPanelContentProps, {}>({
  components: {
    TreadmillPanelContent,
    BenchPressPanelContent,
    ChestPressPanelContent,
    LatPulldownPanelContent,
    LegCurlPanelContent,
    LegExtensionPanelContent,
    LegPressPanelContent,
    AbRollerPanelContent,
    BackExtensionPanelContent,
    CrunchPanelContent,
    LegRaisePanelContent,
    PlankPanelContent,
    PushUpPanelContent,
    SitUpPanelContent
  },
  props: {
    index: Number,
    workout: Object,
    finish: Function
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
  background-color: #fff;
}
</style>
