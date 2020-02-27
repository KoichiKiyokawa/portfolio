<template lang="pug">
.wrapper
  img.logo.shrink(src="icon.png" alt="logo").intersect
  h1.title K.Kiyokawa
  h2.subtitle My portfolio
  .sticky-header
    .clickable.menu-item(v-scroll-to="'#about-me'" :class="{selected: showingMenu === 'about-me'}") About Me
    .clickable.menu-item(v-scroll-to="'#skills'" :class="{selected: showingMenu === 'skills'}") Skills
    .clickable.menu-item(v-scroll-to="'#works'" :class="{selected: showingMenu === 'works'}") Works
    a.clickable.menu-item.icon(href="https://github.com/KoichiKiyokawa" target="_blank")
      i.fab.fa-github
    a.clickable.menu-item.icon(href="https://twitter.com/kiyoshiro944" target="_blank")
      i.fab.fa-twitter

  .space
  AboutMe#about-me.shrink.intersect

  .bg-image1

  Skills#skills.shrink.intersect

  .bg-image2

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
.space
  height: 3rem
.bg-image1, .bg-image2
  margin: 5rem 0
  background-attachment: fixed
  background-size: cover
  background-position: center
  min-height: 50vh
  &.bg-image1
    background-image: url('/campas.jpg')
  &.bg-image2
    background-image: url('https://user-images.githubusercontent.com/40315079/73604430-e7f17b00-45d3-11ea-9441-a1461f561844.png')
.logo
  max-width: 50vw
</style>
