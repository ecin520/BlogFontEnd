<template>
  <Card id="tips" class="animated bounce fadeInDown">
    <div v-highlight class="markdown-body" v-html="tips_html"></div>
  </Card>
</template>

<script>
  import marked from 'marked';
  import 'github-markdown-css';
  import 'highlight.js/styles/monokai-sublime.css';

  export default {
    data(){
      return{
        tips_html: ''
      }
    },
    created() {
      // this.$axios({
      //   url: '/api/getTips',
      //   method: 'get',
      // }).then(response=>{
      //   marked.setOptions({
      //     renderer: this.tips_html,
      //     gfm: true,
      //     tables: true,
      //     breaks: false,
      //     pedantic: false,
      //     sanitize: false,
      //     smartLists: true,
      //     smartypants: false
      //   });
      //   this.tips_html = marked(response.data.content,{sanitize: true});
      // }).catch(error=>{
      //   this.$Message.error(error)
      // })
      let md = '[![Vue logo](https://camo.githubusercontent.com/728ce9f78c3139e76fa69925ad7cc502e32795d2/68747470733a2f2f7675656a732e6f72672f696d616765732f6c6f676f2e706e67)](https://vuejs.org/)\n' +
        '\n' +
        '[![Build Status](https://camo.githubusercontent.com/6b628d8cad9da9b7f10cd14587ad85500261da35/68747470733a2f2f696d672e736869656c64732e696f2f636972636c6563692f70726f6a6563742f6769746875622f7675656a732f7675652f6465762e737667)](https://circleci.com/gh/vuejs/vue/tree/dev) [![Coverage Status](https://camo.githubusercontent.com/1de7ede76a3d36e928ed4b5d9d12598849620210/68747470733a2f2f696d672e736869656c64732e696f2f636f6465636f762f632f6769746875622f7675656a732f7675652f6465762e737667)](https://codecov.io/github/vuejs/vue?branch=dev) [![Downloads](https://camo.githubusercontent.com/514abce7f4f4e57ca8e353bccf57968572abe342/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f646d2f7675652e737667)](https://npmcharts.com/compare/vue?minimal=true) [![Version](https://camo.githubusercontent.com/f1e43ea61f962932d2fd7e05c558eb460191f41e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652e737667)](https://www.npmjs.com/package/vue) [![License](https://camo.githubusercontent.com/9a140a4c68e7c178bc660bee7675f4f25ff7ade3/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7675652e737667)](https://www.npmjs.com/package/vue) [![Chat](https://camo.githubusercontent.com/b12a95e20b7ca35f918c0ab5103fe56b6f44c067/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f636861742d6f6e253230646973636f72642d3732383964612e737667)](https://chat.vuejs.org/) \n' +
        '[![Build Status](https://camo.githubusercontent.com/6f9e918bbcf4786433465035f6b0ce58231f842f/68747470733a2f2f6170702e73617563656c6162732e636f6d2f6275696c647374617475732f7675656a73)](https://app.saucelabs.com/builds/50f8372d79f743a3b25fb6ca4851ca4c)\n' +
        '\n' +
        '## Supporting Vue.js\n' +
        '\n' +
        'Vue.js is an MIT-licensed open source project with its ongoing development made possible entirely by the support of these awesome [backers](https://github.com/vuejs/vue/blob/dev/BACKERS.md). If you\'d like to join them, please consider:\n' +
        '\n' +
        '- [Become a backer or sponsor on Patreon](https://www.patreon.com/evanyou).\n' +
        '- [Become a backer or sponsor on Open Collective](https://opencollective.com/vuejs).\n' +
        '- [One-time donation via PayPal or crypto-currencies.](https://vuejs.org/support-vuejs/#One-time-Donations)\n' +
        '\n' +
        '#### What\'s the difference between Patreon and OpenCollective?\n' +
        '\n' +
        'Funds donated via Patreon go directly to support Evan You\'s full-time work on Vue.js. Funds donated via OpenCollective are managed with transparent expenses and will be used for compensating work and expenses for core team members or sponsoring community events. Your name/logo will receive proper recognition and exposure by donating on either platform.\n' +
        '\n' +
        '### Special Sponsors\n' +
        '\n' +
        '[![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/stdlib.png)](https://stdlib.com/)\n' +
        '\n' +
        '### Platinum Sponsors\n' +
        '\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/bit.png)](https://bit.dev/?utm_source=vue&utm_medium=vue&utm_campaign=vue&utm_term=vue&utm_content=vue) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/vueschool.png)](https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored Banner&utm_content=V1) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/vehikl.png)](https://vehikl.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/nativescript.png)](https://www.nativescript.org/vue?utm_source=vue-js-org&utm_medium=website&utm_campaign=nativescript-awareness) |\n' +
        '| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |\n' +
        '|                                                              |                                                              |                                                              |                                                              |\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/retool.png)](https://retool.com/?utm_source=sponsor&utm_campaign=vue) |                                                              |                                                              |                                                              |\n' +
        '|                                                              |                                                              |                                                              |                                                              |\n' +
        '\n' +
        '### Platinum Sponsors (China)\n' +
        '\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/dcloud.gif)](http://www.dcloud.io/?hmsr=vuejsorg&hmpl=&hmcu=&hmkw=&hmci=) |\n' +
        '| ------------------------------------------------------------ |\n' +
        '|                                                              |\n' +
        '\n' +
        '### Gold Sponsors\n' +
        '\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/vuemastery.png)](https://www.vuemastery.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/laravel.png)](https://laravel.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/chaitin.png)](https://chaitin.cn/en/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/html_burger.png)](https://htmlburger.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/frontendlove.png)](https://www.frontenddeveloperlove.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/onsen_ui.png)](https://onsen.io/vue/) |\n' +
        '| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |\n' +
        '|                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/neds.png)](https://neds.com.au/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/icons_8.png)](https://icons8.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/vuejobs.png)](https://vuejobs.com/?ref=vuejs) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/tidelift.png)](https://tidelift.com/subscription/npm/vue) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/opteo.png)](https://opteo.com/vue) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/devsquad.png)](https://devsquad.com/) |\n' +
        '|                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/firestick_tricks.png)](https://www.firesticktricks.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/intygrate.png)](https://intygrate.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/passionate_people.png)](https://passionatepeople.io/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/shopware_ag.png)](http://en.shopware.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/vpnranks.png)](https://www.vpnranks.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/energy_comparison.png)](https://www.simplyswitch.com/) |\n' +
        '|                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/bacancy_technology.png)](https://www.bacancytechnology.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/bestvpn_co.png)](https://www.bestvpn.co/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/blokt_cryptocurrency_news.png)](https://blokt.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/y8.png)](https://www.y8.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/devexpress.png)](https://js.devexpress.com/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/fastcoding_inc.svg)](https://fastcoding.jp/javascript/) |\n' +
        '|                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |\n' +
        '| [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/usave.png)](https://usave.co.uk/utilities/broadband) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/daily.png)](https://www.dailynow.co/) | [![img](https://raw.githubusercontent.com/vuejs/vuejs.org/master/themes/vue/source/images/storekit.png)](https://storekit.com/) |                                                              |                                                              |                                                              |\n' +
        '|                                                              |                                                              |                                                              |                                                              |                                                              |                                                              |\n' +
        '\n' +
        '### Sponsors via [Open Collective](https://opencollective.com/vuejs)\n' +
        '\n' +
        '#### Platinum\n' +
        '\n' +
        '[![img](https://camo.githubusercontent.com/b84c5f308ebdad0ac9ec3dd312ec4532cf50ade8/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f706c6174696e756d2d73706f6e736f72732f302f6176617461722e737667)](https://opencollective.com/vuejs/tiers/platinum-sponsors/0/website) [![img](https://camo.githubusercontent.com/3af497ddb2decc2c273404fe445d7b695326161c/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f706c6174696e756d2d73706f6e736f72732f312f6176617461722e737667)](https://opencollective.com/vuejs/tiers/platinum-sponsors/1/website)\n' +
        '\n' +
        '#### Gold\n' +
        '\n' +
        '[![img](https://camo.githubusercontent.com/4b589bacce337ed84d7c85aaf28b0ffb75eb5ca1/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f676f6c642d73706f6e736f72732f302f6176617461722e737667)](https://opencollective.com/vuejs/tiers/gold-sponsors/0/website) [![img](https://camo.githubusercontent.com/13948c765a673f6371d793ee87f5fea2fafd001a/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f676f6c642d73706f6e736f72732f312f6176617461722e737667)](https://opencollective.com/vuejs/tiers/gold-sponsors/1/website) [![img](https://camo.githubusercontent.com/5b2c79df8dfa0631d7cf2b6328f06d58c8eafac1/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f676f6c642d73706f6e736f72732f322f6176617461722e737667)](https://opencollective.com/vuejs/tiers/gold-sponsors/2/website) [![img](https://camo.githubusercontent.com/138d977e265da9f56742da968198ac6e88da49dc/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f676f6c642d73706f6e736f72732f332f6176617461722e737667)](https://opencollective.com/vuejs/tiers/gold-sponsors/3/website) [![img](https://camo.githubusercontent.com/559b630cc2106bc95987ff32838fbab735750a5f/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f74696572732f676f6c642d73706f6e736f72732f342f6176617461722e737667)](https://opencollective.com/vuejs/tiers/gold-sponsors/4/website)\n' +
        '\n' +
        '------\n' +
        '\n' +
        '## Introduction\n' +
        '\n' +
        'Vue (pronounced `/vjuː/`, like view) is a **progressive framework** for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a framework depending on different use cases. It consists of an approachable core library that focuses on the view layer only, and an ecosystem of supporting libraries that helps you tackle complexity in large Single-Page Applications.\n' +
        '\n' +
        '#### Browser Compatibility\n' +
        '\n' +
        'Vue.js supports all browsers that are [ES5-compliant](http://kangax.github.io/compat-table/es5/) (IE8 and below are not supported).\n' +
        '\n' +
        '## Ecosystem\n' +
        '\n' +
        '| Project                                                      | Status                                                       | Description                                             |\n' +
        '| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------- |\n' +
        '| [vue-router](https://github.com/vuejs/vue-router)            | [![vue-router-status](https://camo.githubusercontent.com/bf3b9571f5108ad6d030b046ac564a67098ef69e/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652d726f757465722e737667)](https://npmjs.com/package/vue-router) | Single-page application routing                         |\n' +
        '| [vuex](https://github.com/vuejs/vuex)                        | [![vuex-status](https://camo.githubusercontent.com/2c4a59536fde75e3050b7ef5085f1fed88799b1c/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f767565782e737667)](https://npmjs.com/package/vuex) | Large-scale state management                            |\n' +
        '| [vue-cli](https://github.com/vuejs/vue-cli)                  | [![vue-cli-status](https://camo.githubusercontent.com/4b4c751ed3b16351423e5cc4add8d033f88bf1fb/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f407675652f636c692e737667)](https://npmjs.com/package/@vue/cli) | Project scaffolding                                     |\n' +
        '| [vue-loader](https://github.com/vuejs/vue-loader)            | [![vue-loader-status](https://camo.githubusercontent.com/4feee574330b0f6c628f86e3dcbcf37c811130c0/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652d6c6f616465722e737667)](https://npmjs.com/package/vue-loader) | Single File Component (`*.vue` file) loader for webpack |\n' +
        '| [vue-server-renderer](https://github.com/vuejs/vue/tree/dev/packages/vue-server-renderer) | [![vue-server-renderer-status](https://camo.githubusercontent.com/e69cba6006e09562732bf1c1489c94fe2ceda30b/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652d7365727665722d72656e64657265722e737667)](https://npmjs.com/package/vue-server-renderer) | Server-side rendering support                           |\n' +
        '| [vue-class-component](https://github.com/vuejs/vue-class-component) | [![vue-class-component-status](https://camo.githubusercontent.com/16b899420280f29243faeb160272206d1b46babe/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652d636c6173732d636f6d706f6e656e742e737667)](https://npmjs.com/package/vue-class-component) | TypeScript decorator for a class-based API              |\n' +
        '| [vue-rx](https://github.com/vuejs/vue-rx)                    | [![vue-rx-status](https://camo.githubusercontent.com/b609e465a3f568341ebd3dbbfbc7d8ac3dc84913/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f762f7675652d72782e737667)](https://npmjs.com/package/vue-rx) | RxJS integration                                        |\n' +
        '| [vue-devtools](https://github.com/vuejs/vue-devtools)        | [![vue-devtools-status](https://camo.githubusercontent.com/59fef463b94c382bf6f0091af223fd4a2dc7f68d/68747470733a2f2f696d672e736869656c64732e696f2f6368726f6d652d7765622d73746f72652f762f6e68646f676a6d656a69676c69706363706e6e6e616e68626c6564616a6270642e737667)](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd) | Browser DevTools extension                              |\n' +
        '\n' +
        '## Documentation\n' +
        '\n' +
        'To check out [live examples](https://vuejs.org/v2/examples/) and docs, visit [vuejs.org](https://vuejs.org/).\n' +
        '\n' +
        '## Questions\n' +
        '\n' +
        'For questions and support please use [the official forum](http://forum.vuejs.org/) or [community chat](https://chat.vuejs.org/). The issue list of this repo is **exclusively** for bug reports and feature requests.\n' +
        '\n' +
        '## Issues\n' +
        '\n' +
        'Please make sure to read the [Issue Reporting Checklist](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.\n' +
        '\n' +
        '## Changelog\n' +
        '\n' +
        'Detailed changes for each release are documented in the [release notes](https://github.com/vuejs/vue/releases).\n' +
        '\n' +
        '## Stay In Touch\n' +
        '\n' +
        '- [Twitter](https://twitter.com/vuejs)\n' +
        '- [Blog](https://medium.com/the-vue-point)\n' +
        '- [Job Board](https://vuejobs.com/?ref=vuejs)\n' +
        '\n' +
        '## Contribution\n' +
        '\n' +
        'Please make sure to read the [Contributing Guide](https://github.com/vuejs/vue/blob/dev/.github/CONTRIBUTING.md) before making a pull request. If you have a Vue-related project/component/tool, add it with a pull request to [this curated list](https://github.com/vuejs/awesome-vue)!\n' +
        '\n' +
        'Thank you to all the people who already contributed to Vue!\n' +
        '\n' +
        '[![img](https://camo.githubusercontent.com/8cb55d62d5a693172c8edfc9d099c8ebefa64b67/68747470733a2f2f6f70656e636f6c6c6563746976652e636f6d2f7675656a732f636f6e7472696275746f72732e7376673f77696474683d383930)](https://github.com/vuejs/vue/graphs/contributors)\n' +
        '\n' +
        '## License\n' +
        '\n' +
        '[MIT](http://opensource.org/licenses/MIT)\n' +
        '\n' +
        'Copyright (c) 2013-present, Yuxi (Evan) You';

        marked.setOptions({
          renderer: this.tips_html,
          gfm: true,
          tables: true,
          breaks: false,
          pedantic: false,
          sanitize: false,
          smartLists: true,
          smartypants: false
        });
        this.tips_html = marked(md,{sanitize: true});

    }
  }
</script>

<style scoped>
  #tips{
    text-align: center;
    margin: 21px;
    border-radius: 13px;
    box-shadow: 1px 1px 6px #adadad;
  }
</style>
