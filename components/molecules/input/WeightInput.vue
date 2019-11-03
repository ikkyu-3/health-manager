<template>
  <div class="input-container">
    <remove-button x-small @click="remove" />
    <div class="input-value">{{ weight }}<span class="unit">kg</span></div>
    <add-button x-small @click="add" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import AddButton from '@/components/molecules/button/AddButton.vue'
import RemoveButton from '@/components/molecules/button/RemoveButton.vue'

export default createComponent({
  components: { AddButton, RemoveButton },
  props: {
    weight: Number,
    remove: Function,
    add: Function
  }
})
</script>

<style lang="scss" scoped>
@import url('./workout-result-input-style.scss');
</style>
