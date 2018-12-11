<template>
<<<<<<< HEAD
    <div class="container">
        <div ref='SEOcontainer' v-if="seosem">
            <MainSEO v-if="everythingIsReady1" />
        </div>
        <div ref='SEMcontainer' v-if="!seosem">
          <MainSEM v-if="everythingIsReady1"/>
        </div>
=======

  <div class="container-fluid main-body-container">
    <div ref='SEOcontainer' v-if="seosem[0].seo">
    <MainSEO v-if="everythingIsReady1" />
>>>>>>> 5db4a484f95c3f61bebe6f1f982c354d7544fab3
    </div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import MainSEM from './MainSEM.vue'
import MainSEO from './MainSEO.vue'

export default {
  name: 'MainBody',
  computed: {
    seosem() {   
      return this.$store.state.seosem
    }
  },
  data () {
    return {
      allData: null,
      everythingIsReady1: false,
    }
  },
  created () {
    axios
      .get('https://api.myjson.com/bins/q7pt0')
      .then(response => (
          this.Data = response,
          this.$store.state.allData = response,
          this.everythingIsReady1 = true
      ))
  },
 components: {
    MainSEM,
    MainSEO
  }
}
</script>


