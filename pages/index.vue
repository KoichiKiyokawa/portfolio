<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        portfolio
      </h1>
      <h2 class="subtitle">
        My portfolio
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">
          About Me
        </a>
        <a
          href="https://github.com/KoichiKiyokawa"
          target="_blank"
          class="button--grey"
        >
          <span class="icon">
            <i class="fab fa-github"></i>
          </span>
          GitHub
        </a>
      </div>
    </div>
    <AboutMe />
  </div>
</template>

<script>
import AOS from 'aos'
import Logo from '~/components/Logo.vue'
import AboutMe from '~/components/AboutMe'

export default {
  components: {
    Logo,
    AboutMe
  },
  created() {
    AOS.init()
  }
}
</script>

<style>
.container {
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

.links {
  padding-top: 15px;
}
</style>
