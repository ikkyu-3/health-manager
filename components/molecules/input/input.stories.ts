import { storiesOf } from '@storybook/vue'
import WeightInput from '@/components/molecules/input/WeightInput.vue'

storiesOf('Molecules.input', module).add('WeightInput', () => ({
  components: { WeightInput },
  template: '<weight-input :weight="weight" :remove="remove" :add="add"/>',
  data() {
    return { weight: 0 }
  },
  methods: {
    remove(this: { weight: number }) {
      if (this.weight <= 0) {
        return false
      }
      this.weight -= 5
    },
    add(this: { weight: number }) {
      if (this.weight >= 120) {
        return false
      }
      this.weight += 5
    }
  }
}))
