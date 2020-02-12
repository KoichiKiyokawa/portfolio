<template lang="pug">
.wrapper
  img.shrink(src="icon.png" alt="logo")
  h1.title K.Kiyokawa
  h2.subtitle My portfolio
  .sticky-header
    .clickable.menu-item(v-scroll-to="'#about-me'") About Me
    .clickable.menu-item(v-scroll-to="'#skills'") Skills
    .clickable.menu-item(v-scroll-to="'#works'") Works
    .clickable.menu-item(href="https://github.com/KoichiKiyokawa" target="_blank")
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
