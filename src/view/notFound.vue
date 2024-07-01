<template>
    <div> notFound </div>
    <div>about发送过来的值</div>
    <div>{{ msg}}</div>
    <Loading></Loading>
    <End> click me！</End>
    <span>异步组件操作</span>
    <section>
        <button @click="handleClick">Load click</button>
        <AsyncComp v-if="isShow"></AsyncComp>
    </section>
</template>
<script setup>
    import Loading from './loading.vue'
    import End from './end.vue'
    import mitt from 'mitt'
    import { defineAsyncComponent, ref } from 'vue'
    const isShow = ref(false)
    function handleClick(){
        isShow.value = true
    }
    const mitter = mitt()
    const msg = ''
    mitter.on('sendAbout', msg)
const AsyncComp = defineAsyncComponent({
  // 加载函数
  loader: () => import('./chid.vue'),
  loadingComponent: Loading,
  errorComponent: End
})
</script>
<script>export default {
        name: 'notFound',
        data() {
            return {
                isShow: false
            }
        },
        methods: {
            handleClick() {
               this.isShow == true
            }
        }
    }
    </script>
<style>
    section{
        padding: 1em;
        background: rgb(255, 106, 0)
    }
</style>