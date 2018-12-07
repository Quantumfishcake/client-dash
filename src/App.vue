<template>
  <div id="app">
    
    <router-view></router-view>
   
    
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueCharts from 'vue-chartjs'
import VueAxios from 'vue-axios'
import Header from './components/Header.vue'






import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

 
Vue.use(VueAxios, axios)

Vue.use(VueCharts);
Vue.use(BootstrapVue);




export default {
  name: 'app',
  components: {
    Header
  }
}
</script>

<style lang='scss'>
@import '../src/assets/css/master.scss';
@import url('https://fonts.googleapis.com/css?family=Dosis:400,500,700');

</style>
