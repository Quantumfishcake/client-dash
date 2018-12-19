<template>
    <div class="row toprow h-100 equal ">
        <div class='col-12 col-md-3 align-items-center img-header-col my-auto py-3'>
            <img src='../../assets/images/download.svg' />
        </div>
        <div class='col-4 col-md-3 align-items-center col-item m-0' >
            <div class='toprow-grey text-center no-border-sm'>{{seosem ?  'ACTIVE SEO KEYWORDS' : 'ACTIVE SEM KEYWORDS'}}</div>
            <div class='toprow-blk text-center no-border-sm'>{{seosem ?  data.data.SEO['active seo keywords'] : data.data.SEM['active seo keywords']}}</div>
        </div>
        <div class='col-4 col-md-3 align-items-center col-item m-0 mid-box'>
          <div class='border-wrapper'>
            <div class='toprow-grey text-center'># OF PRODUCTS</div>
            <div class='toprow-blk text-center'>{{seosem ?  data.data.SEO['number of products'] : data.data.SEM['number of products']}}</div>
          </div>
        </div>
        <div class='col-4 col-md-3 align-items-center col-item m-0'>
            <div class='toprow-grey text-center'>LAUNCH DATE</div>
            <div class='toprow-blk text-center'>{{seosem ?  data.data.SEO['launch date'] : data.data.SEM['launch date']}}</div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Row1',
  computed: {
    data() {
      return this.$store.state.allData
    },
    seosem () {
      return this.$store.state.seosem
    }
  },
}

</script>

<style lang='scss' scoped>
  .toprow {
    padding: 0;
    .col-item {
      margin-top: 20px;
      margin-bottom: 20px;
      padding-top: 20px;
      padding-bottom:20px;
    }
    .border-wrapper{
      width: 100%;
      border-left: 1px solid #e7e7e7;
      border-right: 1px solid #e7e7e7;
      padding-left: 15px;
      padding-right: 15px
    }
    
    .toprow-grey{
      min-height: 40px;
    }
  }
  @media (max-width: 991px) {
    .img-header-col {
      text-align: center;
    }    
   }
  @media (max-width: 767px) {
    .no-border-sm {
      border: none!important;
    }
    .mid-box {
      padding-left: 0;
      padding-right: 0;
    }
    .border-wrapper{
      width: 100%;
      border-left: 1px solid #e7e7e7;
      border-right: 1px solid #e7e7e7;
      padding-left: 15px;
      padding-right: 15px
    }
  }
   @media (max-width: 600px) {
    .toprow-blk {
      font-size: 4vw;
    }
  }


</style>


