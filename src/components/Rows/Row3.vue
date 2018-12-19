<template>
<div class="text-center" style="width:100%;">

<button class="chart-button" v-show='toggleButton' @click='toggle = !toggle'> View Chart </button>
<transition name="fade">
  <div v-if='toggle'>showing   
    <div class="row bg-w">
      <div class="chart-wrapper" style='position: relative; width: 100%;'>
        <chart />
      </div>
    </div>  
  </div>
</transition>
</div>
</template>

<script>

  import chart from '../chart.js'

  export default {
    name: 'Row3',
    props: {
      message: String
    },
    data() {
       return {
     toggle: true,
     toggleButton: true,
           windowWidth: 0,
           windowHeight: 0
           
     
   }

    },
      mounted() {
          this.$nextTick(function() {
              window.addEventListener('resize', this.getWindowWidth);
              window.addEventListener('resize', this.getWindowHeight);
              
              //Init
              this.getWindowWidth();
              this.getWindowHeight();

              
          })

      },

      methods: {
          getWindowWidth(event) {
              this.windowWidth = document.documentElement.clientWidth;
              if (this.windowWidth > 500) {
              this.toggle = true;
              this.toggleButton = false;
              }
              console.log( this.windowWidth);

              if (this.windowWidth < 500) {
                  this.toggle = false;
                  this.toggleButton = true;

                  if(this.toggle == true && this.toggleButton == true) {
                    console.log(true);
                  } else {
                    console.log(false)
                  }
              }
          },

          getWindowHeight(event) {
              this.windowHeight = document.documentElement.clientHeight;
          }
      },
      beforeDestroy() {
          window.removeEventListener('resize', this.getWindowWidth);
          window.removeEventListener('resize', this.getWindowHeight);
      },
    components: {
      chart, 
    }
  }
</script>

<style lang='scss' scoped>
.toggle-chart {
  display: none;
}
.chart-wrapper {
  
}

.chart-button {
  color: #66dab5;
   font-weight: 700;
    height: 50px;
    width: 127px;
    position: relative;
    background-color: #fff;
    border:none;
  transition: .5s all;
  -webkit-box-shadow: none;
-moz-box-shadow: none;
box-shadow: none;
    &:after {
    content: "";
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute; 
 background-image: url(https://i.ibb.co/9p6PT48/chart-button.png);
 background-repeat: no-repeat;
    background-size: contain;
    transition: .5s all;

}

  &:hover, &:active, &:focus {
    -webkit-box-shadow: 3px 4px 5px 0px rgba(207,207,207,1);
-moz-box-shadow: 3px 4px 5px 0px rgba(207,207,207,1);
box-shadow: 3px 4px 5px 0px rgba(207,207,207,1);
outline: none !important;
    &:after {
      content: "";
  opacity: 1;
    border: 2px;
    }
  }

}




// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
 
 }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
   .chart-wrapper {
  
  } 
  .toggle-chart {
  display: block;
}
 }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
 
 }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 
  
 }

</style>