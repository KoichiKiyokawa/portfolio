import { mount } from '@vue/test-utils'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import IndexPage from '~/pages/index'

Vue.use(VueScrollTo)

// mock
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}

  observe() {
    return null
  }

  unobserve() {
    return null
  }
}

describe('index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(IndexPage)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
