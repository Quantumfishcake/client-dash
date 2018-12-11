<template>

  <div class="container-fluid main-body-container">
    <div ref='SEOcontainer' v-if="seosem[0].seo">
    <MainSEO v-if="everythingIsReady1" />
    </div>
    <div ref='SEMcontainer' v-if="seosem[1].sem">
      <MainSEM v-if="everythingIsReady1"/>
      </div>
</div>

</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Row1 from './Rows/Row1.vue'
import Row2 from './Rows/Row2.vue'
import Row3 from './Rows/Row3.vue'
import Row4 from './Rows/Row4.vue'
import Row5 from './Rows/Row5.vue'
import MainSEM from './MainSEM.vue'
import MainSEO from './MainSEO.vue'
import store from '@/store';



export default {
  name: 'MainBody',
  computed: {
    users() {
      return this.$store.state.users
      
    },
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

    // get chart 1
    axios
      .get('https://api.myjson.com/bins/ndvtq')
      .then(response => (
          this.Data = response,
          this.$store.state.allData = response,
          this.everythingIsReady1 = true
      ))
  },
 components: {
    Row1,
    Row2,
    Row3,
    Row4,
    Row5,
    MainSEM,
    MainSEO
  }
}
</script>


