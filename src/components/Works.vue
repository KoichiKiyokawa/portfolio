<template lang="pug">
div(data-aos="fade-up" data-aos-delay="500")
  h1.title Works
  carousel(:per-page="1")
    slide
      img.work-img(src="https://user-images.githubusercontent.com/40315079/73530134-3f201000-445b-11ea-91db-eff88d704cc4.gif")
      p.subtitle Dormio
      .body
        p 寮で暮らす人と管理人をつなぐアプリ
        p React Nativeでクロスプラットフォーム開発
        p 詳しくは
          |
          a(href="https://github.com/KoichiKiyokawa/dormio" target="_blank") 
            | こちら
            i.fab.fa-github
    slide Money Manager 工事中
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: { Carousel, Slide }
}
</script>
<style lang="sass">
.work-img
  height: 20em
</style>
