<template lang="pug">
.carousel-navigator
  span(@click="$emit('prev-page')")
    i.fas.fa-caret-left
  span(@click="$emit('next-page')")
    i.fas.fa-caret-right
</template>

<style lang="sass">
.carousel-navigator
  display: flex
  justify-content: space-between
  span
    border-radius: 1em
    font-size: 2em
    width: auto
    height: auto
    cursor: pointer
</style>
