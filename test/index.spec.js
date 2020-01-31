import { mount } from '@vue/test-utils'
import index from '~/pages/index'
import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

describe('index', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
