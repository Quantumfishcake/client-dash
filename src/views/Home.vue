<template>
  <div class="home">
    <Header />
    <MainBody/>
  </div>
</template>


<script>
import firebase from 'firebase'
import MainBody from '../components/MainBody.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    Header,
    MainBody,
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
