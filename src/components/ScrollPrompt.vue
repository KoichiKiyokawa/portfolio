<template lang="pug">
.arrow-container
  span.arrow
</template>

<style lang="sass">
.arrow-container
  position: relative
  height: 32px
.arrow
  position: absolute
  top: 0
  left: 50%
  width: 24px
  height: 24px
  margin-left: -12px
  border-left: 2px solid #354959
  border-bottom: 2px solid #354959
  transform: rotate(-45deg)
  animation: slidedown 1.5s infinite
  box-sizing: border-box
  @keyframes slidedown
    0%
      transform: rotate(-45deg) translate(0, 0)
      opacity: 0
    50%
      opacity: 1
    100%
      transform: rotate(-45deg) translate(-20px, 20px)
      opacity: 0
</style>
