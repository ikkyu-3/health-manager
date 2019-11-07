import { storiesOf } from '@storybook/vue'
import ResultInput from '@/components/molecules/inputs/ResultInput.vue'

storiesOf('molecules.inputs', module).add('ResultInput', () => ({
  components: { ResultInput },
  template: `
    <article>
      <h1>ResultInput</h1>
      <section>
        <h2>Weight</h2>
        <result-input weight :value="weight" :reduce="reduceWeight" :add="addWeight"/>
      </section>
      <section>
        <h2>Times</h2>
        <result-input times :value="times" :reduce="reduceTimes" :add="addTimes"/>
      </section>
      <section>
        <h2>Set</h2>
        <result-input set :value="set" :reduce="reduceSet" :add="addSet"/>
      </section>
    </article>
  `,
  data() {
    return { weight: 0, times: 0, set: 0 }
  },
  methods: {
    reduceWeight(this: { weight: number }) {
      if (this.weight <= 0) {
        return false
      }
      this.weight -= 5
    },
    addWeight(this: { weight: number }) {
      if (this.weight >= 120) {
        return false
      }
      this.weight += 5
    },
    reduceTimes(this: { times: number }) {
      if (this.times <= 0) {
        return false
      }
      this.times -= 1
    },
    addTimes(this: { times: number }) {
      if (this.times >= 200) {
        return false
      }
      this.times += 1
    },
    reduceSet(this: { set: number }) {
      if (this.set <= 0) {
        return false
      }
      this.set -= 1
    },
    addSet(this: { set: number }) {
      if (this.set >= 10) {
        return false
      }
      this.set += 1
    }
  }
}))
