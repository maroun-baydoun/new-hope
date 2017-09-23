<template>
<li :class="[containerClass]" class="token">
  <div class="token-value">{{token.value}}</div>
  <ul class="attribute-list">
    <li class="attribute"><div class="attribute-label">Part of speech:</div> <div class="attribute-value">{{token.partOfSpeech}}</div></li>
    <li class="attribute" v-if="token.tense"><div class="attribute-label">Tense:</div> <div class="attribute-value">{{token.tense}}</div></li>
    <li class="attribute" v-if="token.case"><div class="attribute-label">Case:</div> <div class="attribute-value">{{token.case}}</div></li>
    <li class="attribute" v-if="token.number"><div class="attribute-label">Number:</div> <div class="attribute-value">{{token.number}}</div></li>
    <li class="attribute" v-if="token.stem"><div class="attribute-label">Stem:</div> <div class="attribute-value">{{token.stem}}</div></li>
  </ul>
</li>
</template>

<script>
export default {
  name: 'token',
  props: ['token', 'containerClass'],
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .token {
    list-style: none;
    margin: 10px 10px 0;
    background-color: #efefef;
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 1px #efefef;

    .token-value {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .attribute-list {
      padding: 0;
      list-style: none;
      font-size: 14px;

      .attribute {
        margin-bottom: 5px;

        .attribute-label, .attribute-value {
          display: inline-block;
        }

        .attribute-label {
          font-weight: 100;
        }

        .attribute-value {
          font-style: italic;
        }
      }
    }
  }
</style>
