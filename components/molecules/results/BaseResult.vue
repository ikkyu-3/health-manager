<template>
  <v-card
    v-touch="{
      left: () => showButton(),
      right: () => hideButton()
    }"
  >
    <div :class="state.slotClass"><slot /></div>
    <div :class="state.deleteButtonAreaClass">
      <v-btn
        block
        dark
        depressed
        height="100%"
        class="delete-button"
        color="red"
        @click="deleteResult"
      >
        <v-icon>fa-times</v-icon>
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    deleteResult: Function
  },
  setup() {
    const state: {
      isOpen: boolean
      slotClass: any
      deleteButtonAreaClass: any
    } = reactive({
      isOpen: false,
      slotClass: computed(() => {
        return ['slot-area', { 'slot-area--shift': state.isOpen }]
      }),
      deleteButtonAreaClass: computed(() => {
        return [
          'delete-button-area',
          { 'delete-button-area--active': state.isOpen }
        ]
      })
    })

    const showButton = () => {
      state.isOpen = true
    }

    const hideButton = () => {
      state.isOpen = false
    }

    return { state, showButton, hideButton }
  }
})
</script>

<style lang="scss" scoped>
.v-card {
  overflow: hidden;
}

.slot-area {
  position: relative;
  left: 0px;
  transition: left 0.3s;
}

.slot-area--shift {
  left: -60px;
}

.delete-button-area {
  position: absolute;
  top: 0;
  left: 100%;
  width: 60px;
  height: 100%;
  transition: left 0.3s;
}

.delete-button-area--active {
  left: calc(100% - 60px);
}

.delete-button {
  border-radius: 0px;
}
</style>
