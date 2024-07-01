<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg=" 欢迎来到Vue.js App"/>-->
    <router-link to="/home">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/notFound">空白</router-link>
    <router-view></router-view>
    <div>----------------------分界限-----------------------</div>
    <p>1.父组件传到子组件的值</p>
    <Home message="这是从父组件传来的值" @child-click="zCf"></Home>
    <p>从子组件传过来的值</p>
    <h3>{{ x }}</h3>
</template>
<script setup>
    import About from '../src/view/about.vue'
    import NotFound from '../src/view/notFound.vue'
    import Home from '../src/view/home.vue'
    import { ref } from 'vue'
    // 简单用法
/*    const HelloWorld = defineAsyncComponent(() => {
        import('../src/view/home.vue')
    })*/ 
const x = ref('')
const zCf = (value) => {
    x.value = value;
    console.log(x.value)
}
</script>
<script>
    export default {
        data() {
            return {
                parentMessage: '这是从父组件传来的值'
            }
        }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
