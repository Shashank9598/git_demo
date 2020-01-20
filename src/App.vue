<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" height="30px" width="30px">
    <HelloWorld/>
    <WorkingList/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import WorkingList from './components/WorkingList.vue'
export default {
  name: 'app',
  components: {
    HelloWorld,
    WorkingList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
