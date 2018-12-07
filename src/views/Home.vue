<template>
  <div class="home">
    <Header />
    <MainBody/>
    <!-- <button @click="logout">Logout</button> -->
  </div>
</template>


<script>
import firebase from 'firebase'
// @ is an alias to /src
import MainBody from '../components/MainBody.vue'
import Row1 from '../components/Rows/Row1.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
    MainBody,
    Row1
  },
  methods: {
    logout: function() {
      firebase.auth().signOut().then(() =>{
        this.$router.replace('login')
      })
    }
  }
}


</script>
