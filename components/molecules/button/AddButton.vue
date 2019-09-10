<template>
  <v-btn fab dark :color="color" @click="click">
    <v-icon>fa-plus</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

type Props = {
  color?: string
}

export default createComponent({
  props: {
    color: {
      type: String,
      default: 'teal'
    }
  },
  setup(_, ctx) {
    function click(e: MouseEvent) {
      ctx.emit('click', e)
    }
    return { click }
  }
})

// import { Vue, Component, Prop } from 'nuxt-property-decorator'

// @Component
// export default class AddButton extends Vue {
//   @Prop({ default: 'teal' }) readonly color!: string

//   click(e: MouseEvent): void {
//     this.$emit('click', e)
//   }
// }
</script>
