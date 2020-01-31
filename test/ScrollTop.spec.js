import { mount } from '@vue/test-utils'
import ScrollTop from '~/components/ScrollTop'

describe('ScrollTop', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(ScrollTop)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
