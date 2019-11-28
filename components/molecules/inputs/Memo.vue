<template>
  <div>
    <label class="memo-header">Memo</label>
    <v-textarea v-model="state.memo" solo />
  </div>
</template>

<script lang="ts">
import { createComponent, reactive } from '@vue/composition-api'

export type MemoProps = {
  value: string
}

export default createComponent<MemoProps, {}>({
  props: {
    value: String
  },
  setup({ value }) {
    const state = reactive({ memo: value })
    return { state }
  }
})
</script>

<style lang="scss" scoped>
.memo-header {
  display: block;
}
</style>
