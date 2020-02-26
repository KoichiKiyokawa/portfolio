<template lang="pug">
div#skills(data-aos="fade-up")
  h1.title Skills
  h2.subtitle 言語, フレームワーク, etc... 
    br
    | (経歴が長い順に並んでいます)
  .body.grid
    .each-skill(v-for="(skill, i) in skills" :key="i")
      img(:src="skill.imgSrc" :alt="skill.imgAlt || skill.name")
      p {{skill.name}}{{skill.since ? `: ${skill.since}~` : ''}}
      p.text-left(v-for="(desc, i) in skill.description.split('|')" :key="i" v-html="desc")
</template>

<script>
export default {
  data: () => ({
    /**
     * @type skill {
     *   name: string
     *   since?: string
     *   imgSrc: string
     *   imgAlt?: string
     *   description: string
     * }
     * To break line in description, you should put `|`.
     */

    // @type skill[]
    skills: [
      {
        name: 'Rails',
        since: '2018/4',
        imgSrc: 'https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png',
        description:
          'ER図通りにMigrationファイルやModelファイルを書くことができます。Rspecでテストケースを書いたりも。テンプレートエンジンはhamlとslimを扱ったとこがあります。最近はapiサーバーとしてしか使っていないので、helperとか忘れ気味...'
      },
      {
        name: 'GitHub',
        imgSrc: 'https://classmethod.jp/wp-content/uploads/2017/03/partner-logo-githubenterprise.png',
        description:
          'Gitの操作、GitHub Flowでの開発ができます。機能ごとにブランチを切って、プルリクを作ったり、レビューをしたり。|こまめにコミットしておいてから、git rebase -iでコミットをまとめる派。'
      },
      {
        name: 'Vue',
        since: '2018/11',
        imgSrc: 'https://jp.vuejs.org/images/logo.png',
        description:
          'Vuex, Vue routerも。色々よしなにやってくれるNuxtが好き。このサイトもNuxtで作っています。|TypeScript + クラススタイルの書き方が好きですが、VuexとTypeScriptの組み合わせはまだ勉強中...'
      },
      {
        name: 'React',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        description:
          'Hooksを使った書き方のほうが経験が長いです|TypeScript, Next, Redux, StyledComponent, React Nativeも体験しました'
      },
      {
        name: 'Java',
        imgSrc: 'https://josys-navi.hiblead.co.jp/wp-content/uploads/2019/03/Logo_Java.jpg',
        description: '大学の卒業研究でJavaを書いていました|他にもJavaFXでデスクトップアプリを作ったり'
      },
      {
        name: 'Docker',
        imgSrc:
          'https://qiita-user-contents.imgix.net/https%3A%2F%2Fwww.creationline.com%2Fwp-content%2Fuploads%2F2018%2F06%2FMoby2018.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=98741ddc33689c0fba6dc2e4c6838d9e',
        description:
          'Dockerfile,docker-compose.ymlが書けます。|とりあえずalpineをベースイメージにしておけば、イメージサイズが小さくできて何かと便利だと思っている。|ECSやEKSに挑戦したい'
      },
      {
        name: 'Go',
        since: '2018/12',
        imgSrc: 'https://cdn-ak.f.st-hatena.com/images/fotolife/t/tikasan0804/20170719/20170719172956.png',
        description:
          'EchoでかんたんなAPIサーバーを作ったことがあります|まだまだ勉強途中...|Clean Architectureも勉強して、Go + Clean Architectureでサーバーサイドを書いてみたい'
      },
      {
        name: 'Firebase',
        imgSrc:
          'https://teratail-v2.storage.googleapis.com/uploads/contributed_images/98878d582fec33e5c3dfe95931b8d8f1.png',
        description: 'Authentification, FireStoreが使えます。ML Kitとかも使ってみたい。'
      },
      {
        name: 'Vim(技術なのか...?)',
        imgSrc: 'https://cdn.dribbble.com/users/2008/screenshots/1442436/mark-dribbble.png',
        imgAlt: 'Vim',
        description:
          'Vimを普段遣いしています。SSHでサーバーに繋いでいるときに音速でファイル編集ができます|こだわりの設定は<a href="https://github.com/KoichiKiyokawa/dotfiles/blob/master/nvim/init.vim" target="_blank">こちらに<i class="fab fa-github" /></a>'
      },
      {
        name: 'AWS',
        imgSrc: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
        description: 'EC2, Lambda, Neptuneを扱ったことがあります。Terraformでインフラ as Codeに挑戦したい。'
      },
      {
        name: 'グラフDB',
        imgSrc: 'https://secure.meetupstatic.com/photos/member/4/6/1/member_278161121.jpeg',
        description:
          'Neo4j + CypherクエリでSQLの集計処理を書き換えたことがあります。厳密な計測ではないのですが、そのときは最大で300倍ほど早くなりました。SQLよりも直感的にクエリを書ける印象です。ただ、RDBからデータを移行するのが大変。'
      }
    ]
  })
}
</script>

<sytle lang="sass">
.each-skill
  border: solid 1px rgba(0,0,0,.4)
  border-radius: 10px
  box-shadow: 0 0 2px
  padding: 10px
  .skill-image
    position: relative
    .skill-name
      background-color: $main-color
      width: min-content
      position: absolute
      top: 0
</sytle>
