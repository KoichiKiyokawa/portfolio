<template lang="pug">
.carousel-navigator
  button(@click="$emit('prev-page')")
    i.fas.fa-arrow-left
  button(@click="$emit('next-page')")
    i.fas.fa-arrow-right
</template>

<style lang="sass">
.carousel-navigator
  display: flex
  justify-content: space-between
  button
    border-radius: 50%
    font-size: 2em
    background-color: #f2f2f2
</style>
