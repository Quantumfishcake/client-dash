<template>
<div style="width:100%;">

  <div v-show='toggle'>showing
    <button @click='toggle = !toggle'> click here </button>
    <div class="row bg-w">
      <div class="chart-wrapper" style='position: relative; width: 100%;'>
        <chart />
        </div>
      </div>  
    </div>
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
              if (this.windowWidth < 500) {
                  this.toggle = false;
                  console.log(this.windowWidth);
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
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
 
 }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
   .chart-wrapper {
    display: none;
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