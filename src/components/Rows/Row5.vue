<template>
  <div style="width:100%; overflow-x:auto;">
    <div class='row table-wrapper'>
        <b-tabs>
          <b-tab title="TOP PERFORMING LANDING PAGES"  :title-link-class="'tab-title-class'" active >
            <TopPerforming />
          </b-tab>
          <b-tab title="MONTHLY INSIGHTS" :title-link-class="'tab-title-class'">
            <Monthly />
          </b-tab>
          <b-tab title="SESSIONS BY DEVICE" :title-link-class="'tab-title-class'">
            <Sessions />
          </b-tab>
        </b-tabs>
    </div>
    </div>
</template>

<script>

import Vue from 'vue';
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

.table-wrapper {
width: 767px;
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

  
 }

 // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 

 }

</style>




