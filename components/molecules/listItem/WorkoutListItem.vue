<template>
  <v-list-item>
    <v-list-item-action>
      <select-button :is-active="isActive" :text="index" @click="click" />
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>{{ name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { createComponent, computed } from '@vue/composition-api'
import SelectButton from '@/components/molecules/button/SelectButton.vue'

export default createComponent({
  components: { SelectButton },
  props: {
    name: String,
    index: String,
    click: Function
  },
  setup(props) {
    const isActive = computed(() => !!props.index)
    return { isActive }
  }
})
</script>
