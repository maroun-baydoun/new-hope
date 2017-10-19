<template>
  <article>
    <div class="close-container">
      <a href="#close" class="close" title="Close" v-on:click.prevent="onClose">x</a>
    </div>
    <h5>What is Esperanto?</h5>
    <section>
      Esperanto is the most widely spoken constructed language.
      It was created by the Polish ophthalmologist L.L. Zamenhof who published his book <i>Unua Libro</i> in 1887 under the pseudonym Doktoro Esperanto (Doctor Hopeful).
      Zamenhof was dreamt of a world without war and believed that this could happen with the help of a new international auxiliary language.
    </section>
    <h5>Why an Esperanto tokenizer?</h5>
    <section>
      Being a constructed language, Esperanto has very concrete rules and no exceptions. Compared to other languages, it is easy to tokenize words. For example, present verbs end in <i>-as</i>, adjectives in <i>-a</i>, nouns in <i>-o</i> etc.
    </section>
    <h5>How to use new-hope?</h5>
    <section class="padded">
      <h6>1. Install from npm:</h6>
      <pre>npm install new-hope --save-dev </pre>
      <h6>2. Use it in your project:</h6>
      <pre>
// ES6/TypeScript style import
import {split, tokenize} from "new-hope";
const words = split("Mi parolas Esperanton.");
const tokens = tokenize(words);

//Node.js style import
const newHope = require("new-hope");
const words = newHope.split("Mi parolas Esperanton.");
const tokens = newHope.tokenize(words);

//AMD style import
require(["new-hope"], (newHope) => {
  const words = newHope.split("Mi parolas Esperanton.");
  const tokens = newHope.tokenize(words);
});
      </pre>
    </section>
    <h5>Privacy</h5>
    <section>None of the text you input on this website is sent to or stored in any server. All the processing happens in your browser.</section>
  </article>
</template>

<script>
export default {
  name: 'learn-more',
  props: {
    onClose: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

  article {
    padding: 0 30px;

    .close-container {
      display: flex;
      justify-content: flex-end;

      .close {
        border: 1px solid;
        border-radius: 50%;
        text-align: center;
        font-size: 14px;
        line-height: 14px;
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

    h5 {
      margin: 0 0 5px 0;
    }

    h6 {
      margin: 10px 0;
      font-size: 12px;
    }

    section {
      font-size: 14px;
      text-align: justify;
      line-height: 28px;
      margin-bottom: 15px;

      &.padded {
        padding-left: 10px;
      }

      pre {
        background-color: #efefef;
        border: 1px solid #ddd;
        padding: 15px;
        width: 50%;
      }
    }
  }

  @media only screen and (min-device-width : 320px) and (max-device-width : 760px) {
    article {
      padding: 0 0 80px 0;

      section {
        &.padded {
          padding-left: 0px;
        }

        pre{
          width: auto;
          overflow-y: scroll;
        }
      }
    }
  }

</style>
