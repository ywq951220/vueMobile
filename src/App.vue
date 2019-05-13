<template>
  <!-- 项目共有的内容放在此 vue 文件中 -->
  <div id="app">
    <router-view></router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
  import Tabbar from '@/components/tabbar'

  export default {
    name: 'App',
    components: {//配置组件
      Tabbar
    },
    beforeCreate() {
      this.$router.push('/')
    }
  }
</script>

<style>
  /*
    *表示通配符选择器
  */
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
