<template>
  <v-btn :value="value">
    <span>{{ text }}</span>
    <v-icon>{{ icon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'

@Component
export default class NavigationButton extends Vue {
  @Prop(String) readonly value!: string
  @Prop(String) readonly text!: string
  @Prop(String) readonly icon!: string
}
</script>
