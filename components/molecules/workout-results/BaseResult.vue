<template>
  <v-card
    v-touch="{
      left: () => showButton(),
      right: () => hideButton()
    }"
  >
    <slot />
    <div :class="state.deleteButtonAreaClass">
      <delete-button @click="deleteResult" />
    </div>
  </v-card>
</template>

<script lang="ts">
import { createComponent, reactive, computed } from '@vue/composition-api'
import DeleteButton from '@/components/molecules/buttons/DeleteButton.vue'

export default createComponent({
  components: { DeleteButton },
  props: {
    deleteResult: Function
  },
  setup() {
    const state: {
      isOpen: boolean
      deleteButtonAreaClass: Array<any>
    } = reactive({
      isOpen: false,
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
</style>
