<template>
    <section> end <slot></slot></section>
    <span>Fallthrough attribute: {{ $attrs }}</span>
    <p v-bind="$attrs"></p>
    <p></p>
</template>
<script>export default {
  name: 'end',

    created() {
    console.log('这是attrs', this.$attrs)
  }
}</script>