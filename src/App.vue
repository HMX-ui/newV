<template>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg=" 欢迎来到Vue.js App"/>-->
    <router-link to="/">主页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/notFound">空白</router-link>
    <router-view></router-view>

</template>

<script>
    import Home from '../src/view/home.vue'
    import About from '../src/view/about.vue'
    import NotFound from '../src/view/notFound.vue'
/*    const routes = {
        '/': Home,
        '/about': About,
        '/notFound': NotFound
    }*/
    export default {
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
