<template lang="pug">
div#skills(data-aos="fade-up" data-aos-delay="500")
  h1.title Skills
  h2.subtitle 言語, フレームワーク, etc... (経歴が長い順に並んでいます)
  .body.grid
    .each-skill
      img(src="https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png" alt="Rails")
      p Rails: 2018/4~
      p ER図通りにMigrationファイルやモデルファイルを書くことができます。たぶん。
      p Rspecでテストケースを書いたりも。
      p テンプレートエンジンはhamlとslimを扱ったとこがあります。
      p 最近はapiサーバーとしてしか使っていないので、helperとか忘れ気味...
    .each-skill
      img(src="https://jp.vuejs.org/images/logo.png" alt="Vue")
      p Vue: 2018/11~
      p TypeScript
    .each-skill
      img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React")
      p React
      p Hooksを使った書き方のほうが経験が長いです
      p TypeScript, Next, Redux, StyledComponent, React Nativeも体験しました
    .each-skill
      img(src="https://josys-navi.hiblead.co.jp/wp-content/uploads/2019/03/Logo_Java.jpg" alt ="Java")
      p Java
      p 大学の卒業研究でJavaを書いていました
      p 他にもJavaFXでデスクトップアプリを作ったり
    .each-skill
      img(src="https://cdn-ak.f.st-hatena.com/images/fotolife/t/tikasan0804/20170719/20170719172956.png" alt="Golang")
      p Go: 2018/12~
      p EchoでかんたんなAPIサーバーを作ったことがあります
      p まだまだ勉強途中...
      p Clean Architectureも勉強して、
      p Go + Clean Architectureでサーバーサイドを書いてみたい
</template>

<style lang="sass" scoped>
@media screen and (max-width: 768px)
  #skills
    width: 80%
    padding: 0 30px
    margin: auto
.grid
  display: grid
  gap: 10px
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr))

  img
    height: 20vh
</style>
