<template>
    <div class="container sign-up">
        <div class="row">
            <div class="col-6">
                <img src="https://i.ibb.co/F75LtMC/Longtail-logo2016.jpg"> 
            </div>
            <div class="col-6">
                <span class="login-header">Create New Account</span>
                <input class="input100" type="text" v-model="email" placeholder="Email">
                <input class="input100" type="password" v-model="password" placeholder="Password">
                <button class="login100-form-btn" @click="signUp">Sign Up</button>
                <p class="change-location"><router-link to ="/login">Login into your Account</router-link></p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                 (user) => {
                    this.$router.replace('home')
                },
                (err) => {
                    console.log(err.message)
                }
            )
        }
    }
}
</script>

<style scoped>
input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}
button {
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>

<style lang='scss'>
@import '@/assets/css/login.scss';
@import url('https://fonts.googleapis.com/css?family=Dosis:400,500,700');
</style>