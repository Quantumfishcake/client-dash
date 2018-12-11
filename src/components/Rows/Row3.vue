
<template>
    <div class="row bg-w">
      <div style='position: relative; width: 100%;'>
        <chart />
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
    components: {
      chart, 
    }
  }
</script>

<style lang='scss' scoped>

// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
 
 }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
   .bg-w {
    display: none;
  } 
 }

// Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
 
 }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 
  
 }

</style>
