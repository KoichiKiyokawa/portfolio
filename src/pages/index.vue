<template lang="pug">
.wrapper
  img(src="icon.png" alt="logo")
  h1.title K.Kiyokawa
  h2.subtitle My portfolio
  .sticky-header
    a.menu-item(v-scroll-to="'#about-me'") About Me
    a.menu-item(v-scroll-to="'#skills'") Skills
    a.menu-item(v-scroll-to="'#works'") Works
    a.menu-item(href="https://github.com/KoichiKiyokawa" target="_blank")
      i.fab.fa-github.mr-small
      | GitHub
  .mt-large
  AboutMe#about-me.shrink
  .mt-middle
  Skills#skills.shrink
  .mt-middle
  Works#works.shrink
  ScrollTop
</template>

<script>
import ScrollTop from '~/components/ScrollTop'
import AboutMe from '~/components/AboutMe'
import Skills from '~/components/Skills'
import Works from '~/components/Works'

export default {
  components: {
    ScrollTop,
    AboutMe,
    Skills,
    Works
  }
}
</script>
