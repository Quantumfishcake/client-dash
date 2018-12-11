import firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'

Vue.config.productionTip = false

let app = '';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBS1FpBGs3Q0bUd2GFiHaFmKlF8sdQQSdk",
    authDomain: "login-7f1b3.firebaseapp.com",
    databaseURL: "https://login-7f1b3.firebaseio.com",
    projectId: "login-7f1b3",
    storageBucket: "login-7f1b3.appspot.com",
    messagingSenderId: "239180207657"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
})

