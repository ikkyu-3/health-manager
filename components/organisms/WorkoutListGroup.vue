<template>
  <v-list-item-group>
    <v-subheader>{{ subHeader }}</v-subheader>
    <template v-for="(item, index) in items">
      <workout-list-item
        :key="index"
        :disabled="item.disabled"
        :index="item.index"
        :name="item.name"
        @click="itemClick(item.index, item.name)"
      />
    </template>
  </v-list-item-group>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import WorkoutListItem from '@/components/molecules/list-items/WorkoutListItem.vue'

export default createComponent({
  components: { WorkoutListItem },
  props: {
    subHeader: { type: String, require: true },
    items: { type: Array, require: true },
    itemClick: { type: Function, require: true }
  }
})
</script>
