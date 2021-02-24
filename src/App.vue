<template>
  <v-app>
    <v-container>
      <v-layout justify-center mt-10>
        <div id="app">
          <router-view></router-view>
        </div>
      </v-layout>
    </v-container>  
  </v-app>
</template>


<script>
/*
import Top from './components/Top.vue';

export default {
  name: 'App',
  components: {
    Top
  },
  data() {
    return {
      userName: 'unknown'
    }
  }
}*/
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
