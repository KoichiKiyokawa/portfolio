(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{178:function(t,e,r){var content=r(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("6a39e13a",content,!0,{sourceMap:!1})},179:function(t,e,r){var content=r(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("9f9d342c",content,!0,{sourceMap:!1})},180:function(t,e,r){var content=r(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("1cfe2bc0",content,!0,{sourceMap:!1})},181:function(t,e,r){var content=r(192);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("6c4dc96c",content,!0,{sourceMap:!1})},182:function(t,e,r){var content=r(194);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("249926aa",content,!0,{sourceMap:!1})},183:function(t,e,r){var content=r(196);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(41).default)("7b160c46",content,!0,{sourceMap:!1})},184:function(t,e,r){"use strict";var o=r(178);r.n(o).a},185:function(t,e,r){(e=r(40)(!1)).push([t.i,".arrow-container{position:relative;height:32px}.arrow{position:absolute;top:0;left:50%;width:24px;height:24px;margin-left:-12px;border-left:2px solid #354959;border-bottom:2px solid #354959;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:slidedown 1.5s infinite;animation:slidedown 1.5s infinite;box-sizing:border-box}@-webkit-keyframes slidedown{0%{-webkit-transform:rotate(-45deg) translate(0);transform:rotate(-45deg) translate(0);opacity:0}50%{opacity:1}to{-webkit-transform:rotate(-45deg) translate(-20px,20px);transform:rotate(-45deg) translate(-20px,20px);opacity:0}}@keyframes slidedown{0%{-webkit-transform:rotate(-45deg) translate(0);transform:rotate(-45deg) translate(0);opacity:0}50%{opacity:1}to{-webkit-transform:rotate(-45deg) translate(-20px,20px);transform:rotate(-45deg) translate(-20px,20px);opacity:0}}",""]),t.exports=e},186:function(t,e,r){"use strict";var o=r(179);r.n(o).a},187:function(t,e,r){(e=r(40)(!1)).push([t.i,".float-button{z-index:2;position:fixed;bottom:8px;right:8px;background-color:#00d1b2;font-size:24px;color:#fff;width:48px;height:48px;border-radius:50%;cursor:pointer}.float-button i{line-height:48px}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .5s;transition:opacity .5s}.fade-enter,.fade-leave-to{opacity:0}",""]),t.exports=e},188:function(t,e,r){"use strict";var o=r(180),n=r.n(o);e.default=n.a},189:function(t,e,r){(e=r(40)(!1)).push([t.i,".each-skill{border:1px solid rgba(0,0,0,.4);border-radius:10px;box-shadow:inset 0 0 2px;padding:10px}.each-skill .skill-name{box-shadow:0 0 2px 0;margin-top:10px;margin-bottom:1rem;font-weight:700}.each-skill .description{text-align:left;font-size:1rem}",""]),t.exports=e},191:function(t,e,r){"use strict";var o=r(181);r.n(o).a},192:function(t,e,r){(e=r(40)(!1)).push([t.i,".carousel-navigator{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.carousel-navigator span{border-radius:1em;font-size:2em;width:auto;height:auto;cursor:pointer}",""]),t.exports=e},193:function(t,e,r){"use strict";var o=r(182);r.n(o).a},194:function(t,e,r){(e=r(40)(!1)).push([t.i,".work-img{height:20em;max-width:90vw}",""]),t.exports=e},195:function(t,e,r){"use strict";var o=r(183);r.n(o).a},196:function(t,e,r){var o=r(40),n=r(197),l=r(198);e=o(!1);var c=n(l);e.push([t.i,".space{height:9rem}.bg-image1,.bg-image2{margin:5rem 0;background-attachment:fixed;background-size:cover;background-position:50%;min-height:50vh}.bg-image1.bg-image1,.bg-image2.bg-image1{background-image:url("+c+")}.bg-image1.bg-image2,.bg-image2.bg-image2{background-image:url(https://user-images.githubusercontent.com/40315079/73604430-e7f17b00-45d3-11ea-9441-a1461f561844.png)}.logo{max-width:50vw}",""]),t.exports=e},198:function(t,e,r){t.exports=r.p+"img/39e29a8.jpg"},200:function(t,e,r){"use strict";r.r(e);r(184);var o=r(19),n=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"arrow-container"},[e("span",{staticClass:"arrow"})])}],!1,null,null,null).exports,l={data:function(){return{scrollY:0,THRESHOLD:50}},mounted:function(){window.addEventListener("scroll",this.setScrollY)},beforeDestroyed:function(){window.removeEventListener("scroll",this.setScrollY)},methods:{setScrollY:function(){this.scrollY=window.scrollY}}},c=(r(186),Object(o.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".wrapper",expression:"'.wrapper'"},{name:"show",rawName:"v-show",value:this.scrollY>this.THRESHOLD,expression:"scrollY > THRESHOLD"}],staticClass:"float-button clickable"},[e("i",{staticClass:"fas fa-arrow-up"})])])}),[],!1,null,null,null).exports),m=Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{"data-aos":"fade-up"}},[r("h1",{staticClass:"title"},[t._v("About Me")]),r("div",{staticClass:"body"},[r("p",[t._v("1998年生まれ。")]),r("p",[t._v("Webエンジニアに憧れる学生。")]),r("p",[t._v("高校生1年生のとき、先輩に誘われて入った数学部でプログラミングと出会う。")]),r("p",[t._v("2018年6月から渋谷のベンチャー企業でエンジニアインターンを開始。")]),r("p",[t._v("そこでRails, Vueを中心にフロント・バックエンド両方に携わらせて頂いている。")]),r("p",[t._v("まだまだ勉強中")]),r("br"),r("p",[t._v("映画・漫画・アニメが好き。")])])])}],!1,null,null,null).exports,d={data:function(){return{skills:[{name:"Rails",imgSrc:"https://y-hilite.com/wp-content/uploads/2018/02/rails_logo.png",description:"ER図通りにMigrationファイルやModelファイルを書くことができます。Rspecでテストケースを書いたりも。テンプレートエンジンはhamlとslimを扱ったとこがあります。最近はapiサーバーとしてしか使っていないので、helperとか忘れ気味..."},{name:"GitHub",imgSrc:"https://classmethod.jp/wp-content/uploads/2017/03/partner-logo-githubenterprise.png",description:"Gitの操作、GitHub Flowでの開発ができます。機能ごとにブランチを切って、プルリクを作ったり、レビューをしたり。|こまめにコミットしておいてから、git rebase -iでコミットをまとめる派。"},{name:"Vue",imgSrc:"https://jp.vuejs.org/images/logo.png",description:"Vuex, Vue routerも。色々よしなにやってくれるNuxtが好き。このサイトもNuxtで作っています。|TypeScript + クラススタイルの書き方が好きですが、VuexとTypeScriptの組み合わせはまだ勉強中..."},{name:"React",imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",description:"Hooksを使った書き方のほうが経験が長いです。|TypeScript, Next, Redux, StyledComponent, React Nativeも体験しました。"},{name:"Java",imgSrc:"https://josys-navi.hiblead.co.jp/wp-content/uploads/2019/03/Logo_Java.jpg",description:"大学の卒業研究でJavaを書いていました。|他にもJavaFXでデスクトップアプリを作ったり。"},{name:"Docker",imgSrc:"https://qiita-user-contents.imgix.net/https%3A%2F%2Fwww.creationline.com%2Fwp-content%2Fuploads%2F2018%2F06%2FMoby2018.png?ixlib=rb-1.2.2&auto=format&gif-q=60&q=75&s=98741ddc33689c0fba6dc2e4c6838d9e",description:"Dockerfile,docker-compose.ymlが書けます。|とりあえずalpineをベースイメージにしておけば、イメージサイズが小さくできて何かと便利だと思っています。|ECSやEKSを使ってみたい。"},{name:"Go",imgSrc:"https://cdn-ak.f.st-hatena.com/images/fotolife/t/tikasan0804/20170719/20170719172956.png",description:"EchoでかんたんなAPIサーバーを作ったことがあります。|まだまだ勉強途中...。|Clean Architectureも勉強して、Go + Clean Architectureでサーバーサイドを書いてみたい。"},{name:"Firebase",imgSrc:"https://teratail-v2.storage.googleapis.com/uploads/contributed_images/98878d582fec33e5c3dfe95931b8d8f1.png",description:"Authentification, FireStoreが使えます。ML Kitとかも使ってみたい。"},{name:"Vim",imgSrc:"https://cdn.dribbble.com/users/2008/screenshots/1442436/mark-dribbble.png",imgAlt:"Vim",description:'(技術なのか...?)Vimを普段遣いしています。SSHでサーバーに繋いでいるときに音速でファイル編集ができます。|こだわりの設定は<a href="https://github.com/KoichiKiyokawa/dotfiles/blob/master/nvim/init.vim" target="_blank">こちらに<i class="fab fa-github" /></a>'},{name:"AWS",imgSrc:"https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png",description:"EC2, Lambda, Neptuneを扱ったことがあります。Terraformでインフラ as Codeに挑戦したい。"},{name:"グラフDB",imgSrc:"https://secure.meetupstatic.com/photos/member/4/6/1/member_278161121.jpeg",description:"Neo4j + CypherクエリでSQLの集計処理を書き換えたことがあります。厳密な計測ではないのですが、そのときは最大で300倍ほど早くなりました。SQLよりも直感的にクエリを書ける印象です。ただ、RDBからデータを移行するのが大変。"}]}}},f=r(188),h=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"skills","data-aos":"fade-up"}},[r("h1",{staticClass:"title"},[t._v("Skills")]),r("h2",{staticClass:"subtitle"},[t._v("言語, フレームワーク, etc... ")]),r("div",{staticClass:"body grid"},t._l(t.skills,(function(e,i){return r("div",{key:i,staticClass:"each-skill"},[r("img",{attrs:{src:e.imgSrc,alt:e.imgAlt||e.name}}),r("p",{staticClass:"skill-name"},[t._v(t._s(e.name))]),r("div",{staticClass:"description"},t._l(e.description.split("|"),(function(desc,i){return r("p",{key:i,domProps:{innerHTML:t._s(desc)}})})),0)])})),0)])}),[],!1,null,null,null);"function"==typeof f.default&&Object(f.default)(h);var v=h.exports,k=r(190),w=(r(191),Object(o.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"carousel-navigator"},[r("span",{on:{click:function(e){return t.$emit("prev-page")}}},[r("i",{staticClass:"fas fa-caret-left"})]),r("span",{on:{click:function(e){return t.$emit("next-page")}}},[r("i",{staticClass:"fas fa-caret-right"})])])}),[],!1,null,null,null).exports),x={components:{Carousel:k.Carousel,Slide:k.Slide,CarouselNavigator:w},data:function(){return{page:0}},methods:{turnPrevPage:function(){0===this.page?this.page=2:this.page--},turnNextPage:function(){2===this.page?this.page=0:this.page++}}},_=(r(193),{components:{ScrollPrompt:n,ScrollTop:c,AboutMe:m,Skills:v,Works:Object(o.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{"data-aos":"fade-up"}},[r("h1",{staticClass:"title"},[t._v("Works")]),r("carousel",{attrs:{"per-page":1,"navigate-to":t.page,"pagination-color":"#00d1b2"}},[r("slide",[r("video",{staticClass:"work-img",attrs:{src:"dormio_summary.mp4",autoplay:"",controls:"",loop:""}}),r("carousel-navigator",{on:{"prev-page":t.turnPrevPage,"next-page":t.turnNextPage}}),r("p",{staticClass:"subtitle"},[t._v("Dormio")]),r("div",{staticClass:"body"},[r("p",[t._v("寮で暮らす人と管理人をつなぐアプリ")]),r("p",[t._v("React Nativeでクロスプラットフォーム開発")]),r("p",[t._v("詳しくは"),r("a",{attrs:{href:"https://github.com/KoichiKiyokawa/dormio",target:"_blank"}},[t._v("こちら"),r("i",{staticClass:"fab fa-github"})])])])],1),r("slide",[r("img",{staticClass:"work-img",attrs:{src:"https://user-images.githubusercontent.com/40315079/73604795-dca14e00-45d9-11ea-8240-efaa58e6ba2e.gif"}}),r("carousel-navigator",{on:{"prev-page":t.turnPrevPage,"next-page":t.turnNextPage}}),r("p",{staticClass:"subtitle"},[t._v("Money Manager")]),r("div",{staticClass:"body"},[r("p",[t._v("Java製のGUI家計簿アプリ")]),r("p",[t._v("マルチプラットフォームに対応")]),r("p",[t._v("詳しくは"),r("a",{attrs:{href:"https://github.com/KoichiKiyokawa/money_manager",target:"_blank"}},[t._v("こちら"),r("i",{staticClass:"fab fa-github"})])])])],1),r("slide",[r("img",{staticClass:"work-img",attrs:{src:"visually-digger.gif"}}),r("carousel-navigator",{on:{"prev-page":t.turnPrevPage,"next-page":t.turnNextPage}}),r("p",{staticClass:"subtitle"},[t._v("visually-digger")]),r("div",{staticClass:"body"},[r("p",[t._v("JavaScript用ライブラリ")]),r("p",[t._v("配列が混ざった複雑なオブジェクトから値を直感的に取り出せるようにする")]),r("p",[t._v("npmで公開")]),r("p",[t._v("詳しくは"),r("a",{attrs:{href:"https://github.com/KoichiKiyokawa/visually-digger",target:"_blank"}},[t._v("こちら"),r("i",{staticClass:"fab fa-github"})])])])],1)],1)],1)}),[],!1,null,null,null).exports},data:function(){return{showingMenu:""}},mounted:function(){var t=this;document.querySelectorAll(".intersect").forEach((function(e){return new IntersectionObserver(t.onIntersect,{threshold:[.1]}).observe(e)}))},beforeDestroyed:function(){document.querySelectorAll(".intersect").forEach((function(t){return(new IntersectionObserver).unobserve(t)}))},methods:{onIntersect:function(t){var e=t[0];e.isIntersecting&&(this.showingMenu=e.target.id)}}}),y=(r(195),Object(o.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("img",{staticClass:"logo shrink intersect",attrs:{src:"icon.png",alt:"logo"}}),r("h1",{staticClass:"title"},[t._v("K.Kiyokawa")]),r("h2",{staticClass:"subtitle"},[t._v("My portfolio")]),r("div",{staticClass:"sticky-header"},[r("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about-me",expression:"'#about-me'"}],staticClass:"clickable menu-item",class:{selected:"about-me"===t.showingMenu}},[t._v("About Me")]),r("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],staticClass:"clickable menu-item",class:{selected:"skills"===t.showingMenu}},[t._v("Skills")]),r("div",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#works",expression:"'#works'"}],staticClass:"clickable menu-item",class:{selected:"works"===t.showingMenu}},[t._v("Works")]),t._m(0),t._m(1)]),r("ScrollPrompt"),r("div",{staticClass:"space"}),r("AboutMe",{staticClass:"shrink intersect",attrs:{id:"about-me"}}),r("div",{staticClass:"bg-image1"}),r("Skills",{staticClass:"shrink intersect",attrs:{id:"skills"}}),r("div",{staticClass:"bg-image2"}),r("Works",{staticClass:"shrink intersect",attrs:{id:"works"}}),r("ScrollTop")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"clickable menu-item icon",attrs:{href:"https://github.com/KoichiKiyokawa",target:"_blank"}},[e("i",{staticClass:"fab fa-github"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"clickable menu-item icon",attrs:{href:"https://twitter.com/kiyoshiro944",target:"_blank"}},[e("i",{staticClass:"fab fa-twitter"})])}],!1,null,null,null));e.default=y.exports}}]);