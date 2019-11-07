import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import EndWorkoutsButton from '@/components/molecules/buttons/EndWorkoutsButton.vue'

const options = {
  localVue: createLocalVue(),
  vuetify: new Vuetify()
}

describe('molecules/buttons/EndWorkoutsButton.vue', () => {
  it('clickした場合、@clickに渡した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(EndWorkoutsButton, { ...options })

    wrapper.vm.$on('click', click)
    wrapper.trigger('click')

    expect(click.mock.calls).toHaveLength(1)
  })
})
