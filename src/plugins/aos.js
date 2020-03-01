import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

/* eslint new-cap: 0 */
export default ({ app }) => {
  app.AOS = new AOS.init({
    duration: 1000,
    delay: 500
  })
}

// pathが変わったあとに、アニメーションをリセット
Vue.mixin({
  watch: {
    '$route.path': () => {
      setTimeout(() => {
        AOS.refresh()
      }, 500)
    }
  }
})
