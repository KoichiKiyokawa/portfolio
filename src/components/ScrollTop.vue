<template lang="pug">
button.float-button(v-scroll-to="'.wrapper'" v-show="scrollY > THRESHOLD")
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
.float-button
  z-index: 2
  background-color: $main-color
  font-size: 24px
  color: white
  width: 48px
  height: 48px
  border-radius: 50%
  position: fixed
  bottom: 8px
  right: 8px
  outline: none
</style>
