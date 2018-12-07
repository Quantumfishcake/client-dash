<template>
    <div>
    <Row1 v-if="everythingIsReady" v-bind:data='row1data'/>
    <Row2sem />
    <Row3sem message='hello'/>
    <Row4 />
    <Row5 />
    
</div>
</template>

<script>
import axios from 'axios'
import VueAxios from 'vue-axios'
import Row1 from './Rows/Row1.vue'
import Row2sem from './Rows/Row2sem.vue'
import Row3sem from './Rows/Row3sem.vue'
import Row4 from './Rows/Row4.vue'
import Row5 from './Rows/Row5.vue'


export default {
   name: 'MainSEM',
  computed: {
   
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
   mounted () {
    axios
      .get('https://api.myjson.com/bins/divqe')
      .then(response => (
          this.info = response,
          this.row1data = response,
          this.everythingIsReady = true,
          this.$store.state.data = response,
          console.log(this.$store.state.data)
      ))
  },

  
 components: {
    Row1,
    Row2sem,
    Row3sem,
    Row4,
    Row5
  }
}
</script>


