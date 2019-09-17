<template>
  <div class="icon" :class="classObject">
    <span v-if="isActive">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'

export default createComponent({
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    }
  },
  setup(props) {
    const isActive = computed(() => props.text.length !== 0)
    const classObject = computed(() => ({ active: isActive.value }))

    return { isActive, classObject }
  }
})
</script>

<style scoped>
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;
  border-radius: 50%;
  background-color: #bdbdbd;
  color: #ffffff;
  font-weight: bold;
}

.active {
  background-color: #ef9a9a !important;
}
</style>
