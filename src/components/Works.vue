<template lang="pug">
div(data-aos="fade-up")
  h1.title Works
  carousel(:per-page="1" :navigate-to="page" pagination-color="#00d1b2")
    slide
      video.work-img(src="dormio_summary.mp4" autoplay controls loop)
      carousel-navigator(@prev-page="turnPrevPage" @next-page="turnNextPage")
      p.subtitle Dormio
      .body
        p 寮で暮らす人と管理人をつなぐアプリ
        p React Nativeでクロスプラットフォーム開発
        p 詳しくは
          a(href="https://github.com/KoichiKiyokawa/dormio" target="_blank") こちら
            i.fab.fa-github
    slide
      img.work-img(src="https://user-images.githubusercontent.com/40315079/73604795-dca14e00-45d9-11ea-8240-efaa58e6ba2e.gif")
      carousel-navigator(@prev-page="turnPrevPage" @next-page="turnNextPage")
      p.subtitle Money Manager
      .body
        p Java製のGUI家計簿アプリ
        p マルチプラットフォームに対応
        p 詳しくは
          a(href="https://github.com/KoichiKiyokawa/money_manager" target="_blank") こちら
            i.fab.fa-github
    slide
      img.work-img(src="visually-digger.gif")
      carousel-navigator(@prev-page="turnPrevPage" @next-page="turnNextPage")
      p.subtitle visually-digger
      .body
        p JavaScript用ライブラリ
        p 配列が混ざった複雑なオブジェクトから値を直感的に取り出せるようにする
        p npmで公開
        p 詳しくは
          a(href="https://github.com/KoichiKiyokawa/visually-digger" target="_blank") こちら
            i.fab.fa-github
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import CarouselNavigator from '~/components/CarouselNavigator'

const CAROUSEL_MAX_PAGE = 2 // page: 0, 1

export default {
  components: { Carousel, Slide, CarouselNavigator },
  data: () => ({ page: 0 }),
  methods: {
    turnPrevPage() {
      if (this.page === 0) {
        this.page = CAROUSEL_MAX_PAGE
      } else {
        this.page--
      }
    },
    turnNextPage() {
      if (this.page === CAROUSEL_MAX_PAGE) {
        this.page = 0
      } else {
        this.page++
      }
    }
  }
}
</script>
<style lang="sass">
.work-img
  height: 20em
  max-width: 90vw
</style>
