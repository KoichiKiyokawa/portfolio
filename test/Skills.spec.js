import { mount } from '@vue/test-utils'
import Skills from '~/components/Skills'

describe('Skills', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Skills)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
