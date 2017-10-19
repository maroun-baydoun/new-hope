<template>
<div class="app">
  <header>
    <img src="img/logo.svg" alt="new-hope logo" class="logo"/>
    <h1><a href="http://www.maroun-baydoun.com/projects/new-hope/">new-hope</a></h1>
    <h4>Esperanto Tokenizer</h4>
    <div class="npm-badge">
      <a href="https://badge.fury.io/js/new-hope">
        <img src="https://badge.fury.io/js/new-hope.svg" alt="npm version" height="18">
      </a>
    </div>
    <div class="github-badge">
      <a class="github-button" href="https://github.com/maroun-baydoun/new-hope" data-show-count="true" aria-label="Star maroun-baydoun/new-hope on GitHub"></a>
    </div>
  </header>
  <main>
    <div class="learn-more-container" v-if="!learnMore">
      <a href="#learn-more" class="learn-more" title="Learn more" aria-title="Learn more"
         v-on:click.prevent="toggleLearnMore">?</a>
    </div>
    <learn-more v-if="learnMore" :onClose="toggleLearnMore"></learn-more>
    <form v-if="!learnMore" v-on:submit.prevent="onSubmit">
      <section class="input">
        <text-box v-model="input" placeholder="Enter an Esperanto sentence" container-class="container"></text-box>
        <submit container-class="container submit-container"></submit>
      </section>
    </form>
    <section v-if="!learnMore" class="output">
      <ul class="token-list">
        <token v-for="token in tokens" :key="token.value" :token="token"></token>
      </ul>
    </section>
  </main>
  <footer>
    <div>
      Created by <a href="http://www.maroun-baydoun.com" rel="author me home">Maroun Baydoun</a>
    </div>
    <div>
      See other <a href="http://www.maroun-baydoun.com/projects/" rel="author me" title="Open source projects by Maroun Baydoun">projects</a>,
      learn more about <a href="https://en.wikipedia.org/wiki/Esperanto" rel="external noopener noreferrer" target="_blank" title="Esperanto on Wikipedia">Esperanto</a>
      and check the great course on <a href="https://www.duolingo.com/course/eo/en/Learn-Esperanto-Online" rel="external noopener noreferrer" target="_blank" title="Esperanto course on Duolingo">Duolingo</a>
    </div>
  </footer>
</div>
</template>

<script>
import LearnMore from './LearnMore.vue';
import Submit from './Submit.vue';
import TextBox from './TextBox.vue';
import Token from './Token.vue';
import {split, tokenize} from 'new-hope';

export default {
  name: 'app',
  data: function() {
    return {
      input: "",
      tokens: [],
      learnMore: false
    }
  },
  components: {
    [TextBox.name]: TextBox,
    [Submit.name]: Submit,
    [Token.name]: Token,
    [LearnMore.name]: LearnMore
  },
  methods: {
    onSubmit() {
      this.tokens = tokenize(split(this.input));
      const element = this.$el;
      const input = element.querySelector("input[type='text']");
      const tokenList = element.querySelector(".token-list");
      if (input) {
        input.blur();
      }
      if (tokenList) {
        this.$scrollTo(tokenList, 500, {offset: -10 , cancelable: false});
      }
    },
    toggleLearnMore() {
      this.learnMore = !this.learnMore;
    }
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
.app {
    font-family: "Open Sans", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    a {
      color: #090;
      outline: none;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #01a901;
        text-decoration: underline;
      }

      &:focus {
        outline: 1px dashed #aaa;
      }
    }

    h1, h4, h5, h6 {
        font-family: "Roboto", Arial, sans-serif;
    }

    header {
      position: relative;
      padding: 10px 30px;
      height: 50px;
      line-height: 50px;
      background-color: #090;
      border-bottom: 1px solid #efefef;

      .logo {
        width: 50px;
        position: absolute;
        top: 10px;
        left: 30px;
      }

      .npm-badge, .github-badge {
        position: absolute;
        top: 15px;
      }

      .npm-badge {
        right: 90px;
      }

      .github-badge {
        right: 30px;
      }

      h1, h4 {
        font-weight: normal;
        display: inline-block;
        margin: 0;
      }

      h1 {
        margin-left: 60px;
        a {
          color: #fff;

          &:hover {
            color: darken(#fff, 10);
            text-decoration: none;
          }
        }
      }

      h4 {
        margin-left: 10px;
        color: #000;
      }
    }

    main {
      margin: 20px 0 80px 0;

      .learn-more-container {
        display: flex;
        justify-content: flex-end;
        padding: 0 30px;

        .learn-more {
          border: 1px solid;
          border-radius: 50%;
          text-align: center;
          font-size: 14px;
          line-height: 15px;
          font-weight: bold;
          display: inline-block;
          width: 15px;
          height: 15px;
          padding: 5px;

          &:hover {
            text-decoration: none;
            background-color: #090;
            color: #fff;
          }
        }
      }

      .input {
        display: flex;
        justify-content: center;
        flex-direction: row;
        max-width: 800px;
        margin: 0 auto;

        .container {
          margin-top: 20px;
          display: inline-block;
        }

        .submit-container {
          margin-left: 10px;
        }
      }

      .output {
        max-width: 800px;
        margin: 50px auto 0 auto;

        .token-list {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-start;
          padding: 0;
          margin-bottom: 100px;
        }
      }
    }

    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 30px;
      padding: 10px 0px;
      background-color: #fff;
      border-top: 1px solid #efefef;
      line-height: 30px;
      font-size: 13px;
      z-index: 100;

      > div {
        padding: 0 30px;
      }
    }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 760px) {
  .app {
    header {
      padding: 10px 3%;
      line-height: normal;

      .logo {
        width: 40px;
        left: 3%;
      }

      h1, h4 {
        display: block;
        margin-left: 45px;
      }

      h1 {
        font-size: 28px;
      }

      h4 {
        font-size: 13px;
      }

      .npm-badge, .github-badge {
        right: 3%;
      }

      .npm-badge {
        top: 10px;
      }

      .github-badge {
        top: 40px;
      }

    }

    main {
      width: 94%;
      padding: 0 3%;
      margin: 30px auto;

      .learn-more-container {
        padding: 0;
      }

      .input {
        flex-direction: column;

        .submit-container {
          margin: 15px auto 0 auto;
          width: 70%;
        }
      }

      .output {
        margin-top: 20px;

        .token-list {
          flex-direction: column;
        }
      }
    }

    footer {
      height: auto;
      flex-direction: column;
      line-height: 16px;
      box-shadow: 0 0 5px #efefef;
      font-size: 12px;
      > div {
        padding: 5px 3%;
      }
    }
  }
}


</style>
