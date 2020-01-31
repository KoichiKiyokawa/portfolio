<template lang="pug">
.wrapper
  logo
  h1.title portfolio
  h2.subtitle My portfolio
  .sticky-header
    a.menu(v-scroll-to="'#about-me'") About Me
    a.menu(v-scroll-to="'#skills'") Skills
    a.menu(v-scroll-to="'#works'") Works
    a.menu(href="https://github.com/KoichiKiyokawa" target="_blank")
      i.fab.fa-github.mr-small
      | GitHub
  .mt-large
  AboutMe#about-me
  .mt-middle
  Skills#skills
  .mt-middle
  Works#works
  button.float-button(v-scroll-to="'.wrapper'")
    i.fas.fa-arrow-up
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
  width: 100vw
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
  width: 100%
  align-items: center
  justify-content: center
  background-color: #00d1b2

.menu
  color: white
  height: $header-height
  line-height: $header-height
  margin: 0 0.8rem
  font-size: 1rem
@media screen and (min-width: 480px)
  .menu
    margin: 0 1rem
    font-size: 1.5rem
@media screen and (min-width: 768px)
  .menu
    margin: 0 1rem
    font-size: 1.5rem
@media screen and (min-width: 1024px)
  .menu
    margin: 0 1.5rem
    font-size: 2rem

.float-button
  background-color: #00d1b2
  font-size: 24px
  color: white
  width: 48px
  height: 48px
  border-radius: 50%
  position: fixed
  bottom: 8px
  right: 8px
  outline: none

.mt-large
  margin-top: 50vh

.mt-middle
  margin-top: 30vh

.mr-small
  margin-right: 0.3em
</style>
