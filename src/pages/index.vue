<template lang="pug">
.wrapper
  Intersect(@enter="showingMenu = null" :threshold="[0]")
    img.shrink(src="icon.png" alt="logo")
  h1.title K.Kiyokawa
  h2.subtitle My portfolio
  .sticky-header
    .clickable.menu-item(v-scroll-to="'#about-me'" @click="showingMenu = 'about-me'" :class="{selected: showingMenu === 'about-me'}") About Me
    .clickable.menu-item(v-scroll-to="'#skills'" @click="showingMenu = 'skills'" :class="{selected: showingMenu === 'skills'}") Skills
    .clickable.menu-item(v-scroll-to="'#works'" @click="showingMenu = 'works'" :class="{selected: showingMenu === 'works'}") Works
    a.clickable.menu-item(href="https://github.com/KoichiKiyokawa" target="_blank")
      i.fab.fa-github.mr-small
      | GitHub

  .mt-large

  Intersect(@enter="showingMenu = 'about-me'" :threshold="[0]")
    AboutMe#about-me.shrink

  .mt-middle

  Intersect(@enter="showingMenu = 'skills'" :threshold="[0]")
    Skills#skills.shrink

  .mt-middle

  Intersect(@enter="showingMenu = 'works'" :threshold="[0]")
    Works#works.shrink
  ScrollTop
</template>

<script>
import Intersect from 'vue-intersect'
import ScrollTop from '~/components/ScrollTop'
import AboutMe from '~/components/AboutMe'
import Skills from '~/components/Skills'
import Works from '~/components/Works'

export default {
  components: {
    Intersect,
    ScrollTop,
    AboutMe,
    Skills,
    Works
  },
  data: () => ({
    showingMenu: ''
  })
}
</script>
