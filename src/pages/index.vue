<template lang="pug">
.wrapper
  logo
  h1.title portfolio
  h2.subtitle My portfolio
  .sticky-header
    a.menu About Me
    a.menu(href="https://github.com/KoichiKiyokawa" target="_blank")
      span.icon
        i.fab.fa-github
        | GitHub
  AboutMe
  Skills
</template>

<script>
import Logo from '~/components/Logo.vue'
import AboutMe from '~/components/AboutMe'
import Skills from '~/components/Skills'

export default {
  components: {
    Logo,
    AboutMe,
    Skills
  }
}
</script>

<style>
.wrapper {
  margin: 5em auto;
  min-height: 100vh;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.body {
  font-weight: 250;
  font-size: 24px;
  color: #526488;
  word-spacing: 3px;
}

.sticky-header {
  position: sticky;
  top: 0;
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00d1b2;
}

.menu {
  color: white;
  height: 88px;
  line-height: 88px;
  font-size: 2em;
}

.menu + .menu {
  margin-left: 5em;
}
</style>
