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
    .each-skil
      img(src="https://classmethod.jp/wp-content/uploads/2017/03/partner-logo-githubenterprise.png", alt="GitHub")
      p GitHub
      p Gitの操作、GitHub Flowでの開発ができます。機能ごとにブランチを切って、プルリクを作ったり、レビューをしたり。こまめにコミットしておいてから、git rebase -iでコミットをまとめる派。
    .each-skill
      img(src="https://jp.vuejs.org/images/logo.png" alt="Vue")
      p Vue: 2018/11~
      p Vuex, Vue routerも。色々よしなにやってくれるNuxtが好き。このサイトもNuxtで作っています(適当に設定していたらPWAに対応してた...)。
      p TypeScript + クラススタイルの書き方が好きですが、VuexとTypeScriptの組み合わせはまだ勉強中...
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
      img(src="https://qiita-user-contents.imgix.net/https%3A%2F%2Fwww.creationline.com%2Fwp-content%2Fuploads%2F2018%2F06%2FMoby2018.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=98741ddc33689c0fba6dc2e4c6838d9e" alt="Docker")
      p Docker
      p Dockerfile, docker-compose.ymlが書けます。
      p とりあえずalpineをベースイメージにしておけば、イメージサイズが小さくできて何かと便利だと思っている。
    .each-skill
      img(src="https://cdn-ak.f.st-hatena.com/images/fotolife/t/tikasan0804/20170719/20170719172956.png" alt="Golang")
      p Go: 2018/12~
      p EchoでかんたんなAPIサーバーを作ったことがあります
      p まだまだ勉強途中...
      p Clean Architectureも勉強して、
      p Go + Clean Architectureでサーバーサイドを書いてみたい
    .each-skill
      img(src="https://teratail-v2.storage.googleapis.com/uploads/contributed_images/98878d582fec33e5c3dfe95931b8d8f1.png", alt="Firebase")
      p Firebase
      p Authentification, FireStoreが使えます。ML Kitとかも使ってみたい。
    // TODO: AWS EC2, Lambda, Neptune
    .each-skil
      img()
</template>

<style lang="sass" scoped>
#skills
  width: 90%
  margin: auto
.grid
  display: grid
  gap: 2em
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))

  img
    height: 20vh
</style>
