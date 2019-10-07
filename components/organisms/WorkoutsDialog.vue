<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card>
      <dialog-toolbar :arrow-button-click="back" :clear-button-click="clear" />
      <v-list three-line subheader>
        <v-subheader>Training Menu</v-subheader>
      </v-list>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import DialogToolbar from '@/components/organisms/DialogToolbar.vue'
import WorkoutListItem from '@/components/molecules/listItem/WorkoutListItem.vue'

export default createComponent({
  props: {
    dialog: {
      type: Boolean,
      require: true
    },
    back: {
      type: Function,
      require: true
    },
    clear: {
      type: Function,
      require: true
    }
  },
  components: { DialogToolbar, WorkoutListItem }
})
</script>
