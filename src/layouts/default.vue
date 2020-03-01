<template lang="pug">
div
  transition
    .loading(v-if="isLoading")
  nuxt
</template>

<script>
export default {
  data: () => ({ isLoading: true }),
  mounted() {
    if (window.performance.navigation.type === 1) {
      // 再読込されたら、ローディングをすぐに解除
      this.isLoading = false
    } else {
      setTimeout(() => {
        this.isLoading = false
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
.v-leave-active
  transition: 2s ease-out
.v-leave-to
  opacity: 0
</style>
