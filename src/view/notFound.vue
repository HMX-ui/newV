<template>
    <div> notFound </div>
    <div>about发送过来的值</div>
    <div>{{ msg}}</div>
</template>
<script setup>
    import mitt from 'mitt'
    const mitter = mitt()
    const msg = ''
    mitter.on('sendAbout', msg)
</script>
<script>export default {
  name: 'notFound'
}</script>