<template>
 <div class="row  rounded" >
   <div class='col-sm-6 col-md-3 p-0 rounded-col-wrapper'>
       <div class='row mx-0 bg-w my-0  rounded-left rounded-col'>
           <div class='col-sm-3 col-md-6 my-auto pl-4'>
               <div class='mid-txt'>bounce rate</div>
               <div class='convert-txt'> 13.2% </div>
            </div>
           <div class='col-sm-3 col-md-6 my-auto lg-num-blk-wrapper'><span class='lg-num-blk'>39.29%</span></div>
           

       </div>
      
   </div>
   <div class='col-sm-6 col-md-3 p-0 m-auto rounded-col-wrapper'>

     <div class='row mx-1 bg-w my-0 rounded-col' >
           <div class='col-sm-3 col-md-6 pr-0 my-auto'>
               <div class='mid-txt'>Average Keword Positions</div>
            </div>
           <div class='col-sm-3 col-md-3 my-auto p-1 mobile-center' style=''><span><img src='../../assets/images/fill-37.png' class='align-baseline pr-1'/></span><span class='lrg-colored'>13</span></div>
           
           <!-- <div class='col-md-3 my-auto p-1 mobile-center' style=''><span><img src='../../assets/images/fill-37_3.png' class='align-baseline pr-1'/></span><span class='lrg-colored negative'>8</span></div> -->

       </div>

   </div>
   <div class='col-md-6 p-0 m-auto rounded-col-wrapper'>
       <div class='row mx-0 bg-w my-0  rounded-right rounded-col'>
           <div class='col-md-3 my-auto serp-changes-wrapper'>
               <span class='mid-txt'>Serp Changes</span></div>
           <div class='col-4 col-sm-4 col-md-3 m-auto position-relative serp-col'>
               <div class=' border p-1 rounded' >
               <span class='med-grey-txt align-text-top'>#11-50</span>
               <span class="position-absolute med-blk-txt">25<sup>-3</sup></span>
               </div>
           </div>
           <div class='col-4 col-sm-4 col-md-3 m-auto serp-col'>
               <div class=' border p-1 rounded'>
               <span class='med-grey-txt align-text-top'>#4-10</span>
               <span class="position-absolute med-blk-txt">0<sup>-1</sup></span>
               </div>
           </div>

           <div class='col-4 col-sm-4 col-md-3 m-auto serp-col'>
               <div class=' border p-1 rounded'>
               <span class='med-grey-txt align-text-top'>#1-3</span>
               <span class="position-absolute med-blk-txt">0</span>
               </div>
           </div>
       </div>
   </div>
  </div>
</template>

<script>

export default {
  name: 'Row4'
}
</script>


<style lang='scss' scoped>

.rounded {
    .rounded-col-wrapper {
        .rounded-col {
        min-height: 100px;
        background: #fff;
    }
    }
}
.position-absolute {
bottom: 3px;
right: 22px
}

// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 
  .serp-col {
        padding: 0 2px;
    }
 }

 @media (min-width: 767px) and (max-width: 1045px) { 
    .med-grey-txt {
        padding-bottom: 5px;
        display: block;
        text-align: center;
    }
    .med-blk-txt {
        display: block;
    }
    .position-absolute {
position: inherit !important;
display: block;
text-align: center;

}
 }

 // Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
  
 }



// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
  .mid-txt, .mobile-center,.convert-txt,.lg-num-blk-wrapper,.serp-changes-wrapper {
      text-align: center;
  }
  .serp-col {

    }
  
 }

 // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
   .med-grey-txt {
        padding-bottom: 5px;
        display: block;
        text-align: center;
    }
    .med-blk-txt {
        display: block;
    }
    .position-absolute {
position: inherit !important;
display: block;
text-align: center;

}
 }

</style>