import { mount } from '@vue/test-utils'
import Works from '~/components/Works'

describe('Works', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Works)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
