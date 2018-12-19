<template>
  <div class="active row">
    <div class='table-wrapper'>
        <b-tabs nav-wrapper-class='navwrap'>
          <b-tab title="TOP PERFORMING"  :title-link-class="'tab-title-class'" title-item-class='third' active >
            <TopPerforming />
          </b-tab>
          <b-tab title="MONTHLY INSIGHTS" :title-link-class="'tab-title-class'" title-item-class='third'>
            <Monthly />
          </b-tab>
          <b-tab title="SESSIONS BY DEVICE" :title-link-class="'tab-title-class'" title-item-class='third'>
            <Sessions />
          </b-tab>
        </b-tabs>
    </div>
  </div>
</template>

<script>
import TopPerforming from './Row5-tabs/Top-performing.vue'
import Sessions from './Row5-tabs/Sessions.vue'
import Monthly from './Row5-tabs/Monthly-insights.vue'

export default {
  name: 'Row5',
  components: {
      TopPerforming,
      Sessions,
      Monthly
  }
}
</script>
<style lang='scss' scoped>


.nav-item{
  width: 33%;
}
.third {
    width: 95vw !important;
  }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 

 }

 @media (min-width: 767px) and (max-width: 1045px) { 

 }

 // Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
  
 }



// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
  .table-wrapper {
    width: 767px;
  }
  div .w-33 {
    width: 95vw !important;
  }
  .active{
    width:100%;
  }
}

 // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 

 }

</style>




