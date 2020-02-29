<template lang="pug">
div
  .loading(:class="isLoadComplete && 'load-complete'")
  nuxt
</template>

<script>
export default {
  data: () => ({ isLoadComplete: false }),
  mounted() {
    if (window.performance.navigation.type === 1) {
      // 再読込されたら、ローディングをすぐに解除
      this.isLoadComplete = true
    } else {
      setTimeout(() => {
        this.isLoadComplete = true
      }, 3000)
    }
  }
}
</script>

<style lang="sass">
.loading
  position: fixed
  width: 100vw
  height: 100vh
  z-index: 10
  background: url('~assets/Wedges-3s-200px.gif') no-repeat center white
.load-complete
  animation: fadeout 2s linear 0s forwards

@keyframes fadeout
  0%
    opacity: 1
  80%
    opacity: .5
  100%
    opacity: 0
</style>
