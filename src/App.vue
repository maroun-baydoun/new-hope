<template>
<div id="app">
  <header>
    <h1><a href="https://github.com/maroun-baydoun/new-hope">new-hope</a></h1>
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
    <section class="input">
      <text-box v-model="input" placeholder="Enter an Esperanto sentence" container-class="container"></text-box>
      <submit :onClick="onSubmit" container-class="container submit-container"></submit>
    </section>
    <section class="output">
      <ul class="token-list">
        <token v-for="token in tokens" :key="token.value" :token="token"></token>
      </ul>
    </section>
  </main>
  <footer>
    Created by <a href="http://www.maroun-baydoun.com" rel="external">Maroun Baydoun</a>
  </footer>
</div>
</template>

<script>
import Submit from './Submit.vue';
import TextBox from './TextBox.vue';
import Token from './Token.vue';
import {split, tokenize} from 'new-hope';

export default {
  name: 'app',
  data: function() {
    return {
      input: "",
      tokens: []
    }
  },
  components: {
    'text-box': TextBox,
    'submit': Submit,
    'token': Token
  },
  methods: {
    onSubmit() {
      this.tokens = tokenize(split(this.input));
    }
  }
}
</script>

<style lang="scss">
html, body {
  padding: 0;
  margin: 0;
}
#app {
    font-family: Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;

    a {
      color: #090;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #01a901;
        text-decoration: underline;
      }
    }

    header {
      position: relative;
      padding: 10px 30px;
      height: 50px;
      border-bottom: 1px solid #efefef;

      .npm-badge, .github-badge {
        position: absolute;
        top: 15px;
      }

      .npm-badge {
        right: 30px;
      }

      .github-badge {
        right: 155px;
      }

      h1, h4 {
        font-weight: normal;
        display: inline-block;
        margin: 0;
      }

      h1 {

        a{
          color: inherit;
          text-decoration: none;
        }

        &:hover {
          text-decoration: underline;
        }
      }

      h4 {
        margin-left: 10px;
      }
    }

    main {
      max-width: 800px;
      margin: 80px auto;

      .input {
        display: flex;
        justify-content: center;
        flex-direction: row;

        .container {
          margin-top: 20px;
          display: inline-block;
        }

        .submit-container {
          margin-left: 10px;
        }
      }

      .output {
        margin-top: 50px;

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
      width: 100%;
      height: 30px;
      padding: 10px 30px;
      background-color: #fff;
      border-top: 1px solid #efefef;
      line-height: 30px;
      font-size: 13px;
      z-index: 100;
    }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 760px) {
  #app {
    header {
      padding: 10px 3%;

      h1, h4 {
        display: block;
      }

      h1 {
        font-size: 28px;
      }

      h4 {
        margin: 0;
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
      padding: 10px 3%;
    }
  }
}


</style>
