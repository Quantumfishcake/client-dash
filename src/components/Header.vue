<template>
    <div class='header'>
        <div class='row' style='margin-top: 0;'>
            <div class='col-sm-6 col-md-4'>
                <div class='row' style='margin: 0; padding: 0; height: 100%'>
                    <div class='col-sm-8 lux-logo'>
                        <img src='https://i.ibb.co/F75LtMC/Longtail-logo2016.jpg'  style='max-width: 200px;'/>
                    </div>
                    <!-- <div class='col-4' style='margin: auto;'>
                        <span class='insights'>INSIGHTS</span>
                    </div> -->
                </div>
            </div>
            <div class='col-sm-6 col-md-3 order-md-3 m-auto'>
                <div class='row m-0 text-center logout-wrapper' style='height: 83px;'>
                    <!-- <div class='col-4 bg-w seo-sem notifications'  style='margin: auto; border-left: 1px solid #efeeea; border-right: 1px solid #efeeea; height: 83px; line-height:75px; border-radius: 0;'>
                        <span class='helper'><img src='../assets/images/9-bell.png' style='vertical-align: middle; '/></span>
                    </div> -->
                    <div class='col-12 seo-sem logout' style='margin: auto'><img src='../assets/images/2-exit.png' class='pr-2'/><span><a @click="logout" href='/'>LOGOUT</a></span></div>
                </div>
            </div>
            <div class='col-sm-12 col-md-4  order-md-2' style='margin: auto;'>
                <div class='header-rectangle'>
                    <label class="switch seo-sem">
                        <input id='checkbox' type="checkbox"  v-on:change='changechecked'>
                        <span class="slider"></span>
                        <span v-bind:class="{'active': checked}" style='position: relative; left: 205px;  top: 12px;'>SEM</span>
                        <span v-bind:class="{'active': !checked}" style='position: relative; left: 33px; top: 12px;'>SEO</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Header',
    computed: {
        seosem() {
        return this.$store.state.seosem
        }
    },
    data() {
        return {
            name: 'tom',
            number: 5,
            info: null,
            code: null,
            checked: false
        }
    },
    methods: {
        changename: function() {
            this.name === 'tom' ? this.name = 'steve' : this.name = 'tom'
        },
        logout: function() {
            firebase.auth().signOut().then(() =>{
            this.$router.replace('login')
            })
        },
        changechecked: function() {
            this.checked = !this.checked
            this.$store.state.seosem = !this.$store.state.seosem
        }
    },
    
}
</script>

<style lang='scss' scoped>
.row {
    margin: 0;
}
.header {
    .lux-logo { 
        margin: auto;
       img {
            width: 100%;
       }
    }
    .notifications, .logout {
        margin-right: 0 !important;
    }
}
.col-sm-6 {
    max-width: 50%!important;
}
@media (max-width: 767.98px) { 
    .logout, .lux-logo{
    margin: 0!important;
    margin-top: 15px!important;
    margin-bottom: 15px!important;
    }
    .logout-wrapper{
        height: 50px!important;
    }

 }
</style>