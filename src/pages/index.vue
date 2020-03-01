<template lang="pug">
.wrapper
  .bg-image-container
    .bg-image(:class="scrollRate < 50 ? 'image1' : 'image2'")

  .top
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

  .white-bg
    ScrollPrompt
    AboutMe#about-me.shrink.intersect

  .parallax

  .white-bg
    Skills#skills.shrink.intersect

  .parallax

  .white-bg
    Works#works.shrink.intersect

  ScrollTop
</template>

<script>
import ScrollPrompt from '~/components/ScrollPrompt'
import ScrollTop from '~/components/ScrollTop'
import AboutMe from '~/components/AboutMe'
import Skills from '~/components/Skills'
import Works from '~/components/Works'

export default {
  components: {
    ScrollPrompt,
    ScrollTop,
    AboutMe,
    Skills,
    Works
  },
  data: () => ({
    showingMenu: '',
    scrollRate: 0
  }),
  mounted() {
    // set up intersection observe api
    document.querySelectorAll('.intersect').forEach(elem => new IntersectionObserver(this.onIntersect).observe(elem))

    // calc window scroll rate
    window.onscroll = () => {
      this.scrollRate = (100 * window.pageYOffset) / document.body.clientHeight
    }
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
.top
  padding-top: 5rem
  background-color: rgba(white, .7)
.white-bg
  background-color: white
.bg-image-container
  position: relative
  .bg-image
    position: fixed
    width: 100vw
    height: 100vh
    top: 0
    left: 0
    z-index: -1
    background-size: auto 100%
    background-repeat: no-repeat
    background-position: center
    &.image1
      background-image: url('~assets/campas.jpg')
    &.image2
      background-image: url('https://user-images.githubusercontent.com/40315079/73604430-e7f17b00-45d3-11ea-9441-a1461f561844.png')

#about-me, #skills, #works
  padding: 9rem 0
.parallax
  height: 320px
.logo
  max-width: 50vw
</style>
