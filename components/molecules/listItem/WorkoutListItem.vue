<template>
  <v-list-item :class="{ disabled: state.disabled }" @click="click">
    <v-list-item-icon>
      <select-icon :text="index" />
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'
import SelectIcon from '@/components/molecules/icon/SelectIcon.vue'

export default createComponent({
  components: { SelectIcon },
  props: {
    disabled: { type: Boolean, default: false },
    name: { type: String, required: true, default: '' },
    index: { type: String, required: true, default: '' }
  },
  setup(props, { emit }) {
    const state = reactive({ disabled: props.disabled })

    function click(e: MouseEvent) {
      if (state.disabled) {
        return
      }

      emit('click', e)
    }

    return { state, click }
  }
})
</script>

<style lang="scss" scoped>
.disabled {
  opacity: 0.3;
  pointer-events: none;
}
</style>
