<template>
  <v-list-item>
    <v-list-item-action>
      <select-icon :text="index" />
    </v-list-item-action>

    <v-list-item-content>
      <v-list-item-title>{{ name }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import SelectIcon from '@/components/molecules/icon/SelectIcon.vue'

export default createComponent({
  components: { SelectIcon },
  props: {
    name: {
      type: String,
      required: true,
      default: ''
    },
    index: {
      type: String,
      required: true,
      default: ''
    }
  }
})
</script>
