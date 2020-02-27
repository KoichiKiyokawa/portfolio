import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
  delay: 500,
  duration: 500,
  easing: [0, 0, 0.1, 1],
  offset: -100
})
