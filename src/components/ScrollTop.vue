<template lang="pug">
 button.float-button(v-scroll-to="'.wrapper'")
   i.fas.fa-arrow-up
</template>

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
