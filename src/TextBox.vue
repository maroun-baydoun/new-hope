<template>
<div :class="[containerClass]">
  <input type="text" :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)" />
</div>
</template>

<script>
export default {
  name: 'text-box',
  props: ['value', 'containerClass', 'placeholder'],
  data: function() {
    return {}
  },
  methods: {
    updateValue: function(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
input {
    width: 500px;
    height: 50px;
    font-size: 18px;
    text-indent: 5px;
    outline: none;
    border-radius: 3px;
    border: 1px solid #ddd;
    box-shadow: 1px 1px 1px #efefef;
    transition: box-shadow 0.3s, border 0.3s;

    &:focus {
      border-color: #090;
      box-shadow: 1px 1px 1px #ddd;
    }
}

@media only screen and (min-device-width : 320px) and (max-device-width : 760px) {
  input {
    width: 100%;
  }
}
</style>
