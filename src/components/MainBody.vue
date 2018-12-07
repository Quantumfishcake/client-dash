<template>

  <div class="container">
    <div ref='SEOcontainer' v-if="seosem[0].seo">
    <Row1 v-if="everythingIsReady" v-bind:data='row1data'/>
    <Row2 />
    <Row3 message='hello'/>
    <Row4 />
    <Row5 />
    </div>
    <div ref='SEMcontainer' v-if="seosem[1].sem">
      <MainSEM />
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
      info: null,
      row1data: [''],
      everythingIsReady: false
    }
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


