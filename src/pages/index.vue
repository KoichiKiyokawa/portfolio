<template lang="pug">
.wrapper
  logo
  h1.title portfolio
  h2.subtitle My portfolio
  .sticky-header
    a.menu About Me
    a.menu Skills
    a.menu Works
    a.menu(href="https://github.com/KoichiKiyokawa" target="_blank")
      i.fab.fa-github.mr-small
      | GitHub
  .mt-large
  AboutMe
  .mt-middle
  Skills
  .mt-middle
  Works
</template>

<script>
import Logo from '~/components/Logo.vue'
import AboutMe from '~/components/AboutMe'
import Skills from '~/components/Skills'
import Works from '~/components/Works'

export default {
  components: {
    Logo,
    AboutMe,
    Skills,
    Works
  }
}
</script>

<style lang="sass">
.wrapper
  margin: 5em auto
  min-height: 100vh
  text-align: center

.title
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px

.body
  font-weight: 250
  font-size: 24px
  color: #526488
  word-spacing: 3px

$header-height: 80px

.sticky-header
  position: sticky
  top: 0
  height: $header-height
  display: flex
  align-items: center
  justify-content: center
  background-color: #00d1b2

.menu
  margin: 0 1.5em
  color: white
  height: $header-height
  line-height: $header-height
  font-size: 2em

.mt-large
  margin-top: 50vh

.mt-middle
  margin-top: 30vh

.mr-small
  margin-right: 0.3em
</style>
