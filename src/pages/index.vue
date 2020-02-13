<template lang="pug">
.wrapper
  img.logo.shrink(src="icon.png" alt="logo").intersect
  h1.title K.Kiyokawa
  h2.subtitle My portfolio
  .sticky-header
    .clickable.menu-item(v-scroll-to="'#about-me'" :class="{selected: showingMenu === 'about-me'}") About Me
    .clickable.menu-item(v-scroll-to="'#skills'" :class="{selected: showingMenu === 'skills'}") Skills
    .clickable.menu-item(v-scroll-to="'#works'" :class="{selected: showingMenu === 'works'}") Works
    a.clickable.menu-item(href="https://github.com/KoichiKiyokawa" target="_blank")
      i.fab.fa-github.mr-small
      | GitHub

  .mt-large

  AboutMe#about-me.shrink.intersect

  .mt-middle

  Skills#skills.shrink.intersect

  .mt-middle

  Works#works.shrink.intersect
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
  },
  data: () => ({
    showingMenu: ''
  }),
  mounted() {
    document
      .querySelectorAll('.intersect')
      .forEach(elem => new IntersectionObserver(this.onIntersect, { threshold: [0.1] }).observe(elem))
  },
  beforeDestroyed() {
    document.querySelectorAll('.intersect').forEach(elem => new IntersectionObserver().unobserve(elem))
  },
  methods: {
    onIntersect(entries) {
      const showedElem = entries[0]
      if (showedElem.isIntersecting) this.showingMenu = showedElem.target.id
    }
  }
}
</script>

<style lang="sass">
.logo
  max-width: 50vw
</style>
