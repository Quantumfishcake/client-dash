<template>
<div class="container login"> 
    <div class="row">
        <div class="col-6">
           <img src="../assets/Longtail_logo2016.jpg"> 
        </div>
        <div class="col-6">
            <span class="login-header">Member Login</span>
            <input class="input100" type="text" v-model="email" placeholder="Email">
            <input class="input100" type="password" v-model="password" placeholder="Password">
            <button class="login100-form-btn" @click="login">connection</button>
            <p class="change-location"><router-link to ="/sign-up">Create your Account</router-link></p>
        </div>
    </div>
</div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('home')
                },
                (err) => {
                    console.log(err.message)
                }
            );
        }
    }
}
</script>

<style scoped>


.login {
    margin-top: 40px;
}
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}
p {
    margin-top: 40px;
    font-size: 13px;
}
p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>


<style lang='scss'>
@import '@/assets/css/login.scss';
@import url('https://fonts.googleapis.com/css?family=Dosis:400,500,700');

</style>