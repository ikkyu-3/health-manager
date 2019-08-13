<template>
  <v-btn fab dark :color="color" @click="click">
    <v-icon>fas fa-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class AddButton extends Vue {
  @Prop({ default: 'teal' }) readonly color!: string

  click(e: MouseEvent): void {
    this.$emit('click', e)
  }
}
</script>
