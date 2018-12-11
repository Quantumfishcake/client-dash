<template>
 <div class="row toprow">
    <div class='col-md-4 pl-5'>
      <img src='../../assets/images/download.svg' />
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7' >
      <div class='toprow-grey'>{{seosem ?  'ACTIVE SEO KEYWORDS' : 'ACTIVE SEM KEYWORDS'}}</div>
      <div class='toprow-blk'>{{seosem ?  data.data.SEO['active seo keywords'] : data.data.SEM['active seo keywords']}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'>ACTIVE PPC KEYWORDS</div>
      <div class='toprow-blk'>{{seosem ?  data.data.SEO['active ppc keywords'] : data.data.SEM['active ppc keywords']}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'># OF PRODUCTS</div>
      <div class='toprow-blk'>{{seosem ?  data.data.SEO['number of products'] : data.data.SEM['number of products']}}</div>
    </div>
    <div class='col-md-2 p-2 pl-4' style=' border-left: 1px solid #e7e7e7'>
<div class='toprow-grey'>LAUNCH DATE</div>
      <div class='toprow-blk'>{{seosem ?  data.data.SEO['launch date'] : data.data.SEM['launch date']}}</div>
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