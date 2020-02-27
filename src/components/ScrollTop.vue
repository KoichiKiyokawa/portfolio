<template lang="pug">
transition(name="fade")
  .float-button.clickable(v-scroll-to="'.wrapper'" v-show="scrollY > THRESHOLD")
    i.fas.fa-arrow-up
</template>

<script>
// スクロールpxがこの値以上であればボタンを表示する
const THRESHOLD = 50

export default {
  data: () => ({
    scrollY: 0,
    THRESHOLD
  }),
  mounted() {
    window.addEventListener('scroll', this.setScrollY)
  },
  beforeDestroyed() {
    window.removeEventListener('scroll', this.setScrollY)
  },
  methods: {
    setScrollY() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

<style lang="sass">
$side-length: 48px
.float-button
  z-index: 2
  position: fixed
  bottom: 8px
  right: 8px
  background-color: $main-color
  font-size: $side-length / 2
  color: white
  width: $side-length
  height: $side-length
  border-radius: 50%
  cursor: pointer
  i
    line-height: $side-length

.fade-enter-active, .fade-leave-active
  transition: opacity .5s

.fade-enter, .fade-leave-to
  opacity: 0
</style>
