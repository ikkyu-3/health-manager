import Vuetify from 'vuetify'
import { mount, createLocalVue } from '@vue/test-utils'
import DeleteButton from '@/components/molecules/buttons/DeleteButton.vue'

const options = {
  localVue: createLocalVue(),
  vutify: new Vuetify()
}

describe('molecutles/buttons/DeleteButton.vue', () => {
  it('clickした場合、@clickで指定した関数が実行される', () => {
    const click = jest.fn()
    const wrapper = mount(DeleteButton, { ...options })

    wrapper.vm.$on('click', click)
    wrapper.trigger('click')

    expect(click.mock.calls).toHaveLength(1)
  })
})
