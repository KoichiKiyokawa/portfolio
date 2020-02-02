import { mount } from '@vue/test-utils'
import CarouselNavigator from '~/components/CarouselNavigator'

describe('CarouselNavigator', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CarouselNavigator)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
