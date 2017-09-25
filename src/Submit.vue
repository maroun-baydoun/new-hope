<template>
<div :class="[containerClass]">
  <button type="submit">Tokenize</button>
</div>
</template>

<script>
export default {
  name: 'submit',
  props: {
    containerClass: {
      type: String
    }
  },
  data: function() {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
button {
    font-family: Helvetica, Arial, sans-serif;
    color: #fff;
    background: #090;
    height: 54px;
    padding: 6px 12px;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 3px;
    border: 0;
    outline: none;
    text-shadow: 0 -1px 1px #666;
    box-shadow: 1px 1px 1px #efefef;
    transition: background 0.3s, box-shadow 0.3s;

    &:hover {
      background: #01a901;
      box-shadow: 1px 1px 1px #ddd;
    }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 760px) {
  button {
    width: 100%;
  }
}

</style>
