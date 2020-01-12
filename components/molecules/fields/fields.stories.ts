import { storiesOf } from '@storybook/vue'
import ResultField from '@/components/molecules/fields/ResultField.vue'
import MemoField from '@/components/molecules/fields/MemoField.vue'

storiesOf('molecules.fields', module).add('ResultField', () => ({
  components: { ResultField },
  template: `
    <article>
      <h1>ResultField</h1>
      <section>
        <h2>Weight</h2>
        <result-field weight :value="weight" :remove="reduceWeight" :add="addWeight"/>
      </section>
      <section>
        <h2>Times</h2>
        <result-field times :value="times" :remove="reduceTimes" :add="addTimes"/>
      </section>
      <section>
        <h2>Minutes</h2>
        <result-field minutes :value="minutes" :remove="reduceMinutes" :add="addMinutes"/>
      </section>
      <section>
        <h2>Seconds</h2>
        <result-field seconds :value="seconds" :remove="reduceSeconds" :add="addSeconds"/>
      </section>
      <section>
        <h2>Set</h2>
        <result-field set :value="set" :remove="reduceSet" :add="addSet"/>
      </section>
    </article>
  `,
  data() {
    return { weight: 0, times: 0, minutes: 0, seconds: 0, set: 0 }
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
    reduceMinutes(this: { minutes: number }) {
      if (this.minutes <= 0) {
        return false
      }
      this.minutes -= 1
    },
    addMinutes(this: { minutes: number }) {
      if (this.minutes >= 200) {
        return false
      }
      this.minutes += 1
    },
    reduceSeconds(this: { seconds: number }) {
      if (this.seconds <= 0) {
        return false
      }
      this.seconds -= 1
    },
    addSeconds(this: { seconds: number }) {
      if (this.seconds >= 200) {
        return false
      }
      this.seconds += 1
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

storiesOf('molecules.fields', module).add('MemoField', () => ({
  components: { MemoField },
  template: `<memo-field :value="value" />`,
  data() {
    return { value: 'memo' }
  }
}))
