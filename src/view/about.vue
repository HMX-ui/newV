<template>
    <div> About </div>
    <button @click="sendAbout">点击我传到notFound</button>
</template>

<script setup>
    import mitt from 'mitt'
    const emitter = mitt()
    emitter.emit('sevAbout', '我是从about传过来的参数')
</script>
<script>export default {
  name:'about'
}</script>