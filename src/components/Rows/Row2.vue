<template>
    <div class="row  row2">
        <div class="col-md-8 bg-w">
            <div class='row m-0 mt-2'>
                <div class="col-md-6">
                    <div class='rect-8' style='clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0 100%, 0 0);} border-top-right-radius: 6px; border-bottom-right-radius: 6px'><span class='SEO'>SEO summary</span></div>
                </div>
                <div class="col-md-6">
                    <vue-monthly-picker v-model="date" v-bind:monthLabels='months' v-bind:dateFormat='dateFormat' v-on:selected="timeChange(date)">
                    </vue-monthly-picker >
                    <span></span>
                </div>
            </div>
            <div class='row no-border seo-summary'>
                <div class="col">
                    <div class='focal-text'>{{getMonthData('monthlyRev')}}</div>
                    <div class='Leads-gene m-auto w-75 pt-3'><span>Revenue / leads Generated this month</span></div>
                </div>
                <div class="col inside-border ">
                    <div class='focal-text'>120,218</div>
                    <div class='Leads-gene m-auto w-75 pt-3'><span>Revenue / Leads Generated To Date</span></div>  
                </div>
                <div class="col">
                    <div class='focal-text'>86%</div>
                    <div class='Leads-gene m-auto w-75 pt-3'><span>% of Forecast Achieved</span></div>
                </div>
            </div>
        </div>
        <div class="col-md-4 p-0" style='border-left: 40px solid ##FAF9F5;'>
            <div class='row row-small px-0 py-4 bg-w ml-md-5  my-sm-1 my-md-0 m-0' style='border-top-left-radius: 10px; border-top-right-radius: 10px;'> 
                <div class='col-md-6 m-auto'>
                    <div class='mid-txt'>Sessions</div>
                    <div class='convert-txt' :style="getColor('sessions')"><img :src="getArrow('sessions')" class="align-baseline pr-1"/>{{getLastMonthChange('sessions')[0]}}%</div>
                </div>  
                <div class='col-md-6 right pr-4'>
                    <span class='lg-num-blk'>{{getMonthData('sessions')}}</span>
                </div>
            </div>
            <div class='row row-small px-0 py-4 bg-w ml-5 my-1 mr-0'> 
                <div class='col-md-6 m-auto'>
                    <div class='mid-txt'>Conversions</div>
                    <div class='convert-txt' :style="getColor('conversions')"><img :src="getArrow('conversions')" class="align-baseline pr-1" />{{getLastMonthChange('conversions')[0]}}%</div>
                </div>  
                <div class='col-md-6 right pr-4'>
                    <span class='lg-num-blk'>{{getMonthData('conversions')}}</span>
                </div>
            </div>
            <div class='row row-small px-0 py-4 bg-w ml-5 my-1 mr-0' style='border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;'> 
                <div class='col-md-6 m-auto'>
                    <div class='mid-txt'>Conversion Rate</div>
                    <div class='convert-txt negative'><img src='../../assets/images/fill-37_2.png' class="align-baseline pr-1"/>-8.4%</div>
                </div> 
                <div class='col-md-6 right pr-4'>
                    <span class='lg-num-blk'>{{conversionRate}}%</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueMonthlyPicker from 'vue-monthly-picker'
//var x = new Date('2018-02-28T13:00:00.000Z')
//x.getUTCMonth()  returns value starting from 0

export default {
    name: 'Row2',
    data() {
        return  {
            year: null,
            month: null,
            date: null,
            selectedMonth: null,
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            dateFormat: 'MMMM YYYY',
            selectedMonth: 1
        }
    },
    created () {
        this.year = new Date().getFullYear(),
        this.month = new Date().getMonth(),
        this.date = `${this.year}/${this.month}`
        this.selectedMonth = this.month
    },
    methods: {
            timeChange: function (date){
                var x = new Date(date) 
                var finalDate = `${x.getMonth() }/${x.getFullYear()}`
                this.selectedMonth = x.getMonth()
                return finalDate
            },
            getMonthData (dataType) {
                const currMonth = this.months[this.selectedMonth]
                return this.$store.state.allData.data.SEO.monthlyData[currMonth][dataType]
            },
            getLastMonthChange (dataType) {
                const lastMonthval = (this.selectedMonth == 0 ? this.months[11] : this.months[this.selectedMonth - 1])
                const lastMonth = this.$store.state.allData.data.SEO.monthlyData[lastMonthval][dataType]
                const thisMonth = this.$store.state.allData.data.SEO.monthlyData[this.months[this.selectedMonth]][dataType]
                return thisMonth >= lastMonth ? [Math.round(((thisMonth - lastMonth) / lastMonth * 100) * 100) / 100, true] : [Math.round(((lastMonth - thisMonth) / lastMonth * 100) * 100) / 100, false]
            },
            getColor (dataType) {
                var newcolor = this.getLastMonthChange(dataType)[1] ? '#66dab5' : 'red'
                return {color: newcolor}
            },
            getArrow(dataType) {
                var newImg = this.getLastMonthChange(dataType)[1] ? '37.png' : '37_2.png'
                return require(`../../assets/images/fill-${newImg}`)
            }
    },
    computed: {
        storeData() {
        return this.$store.state.allData;
        },
        conversionRate() {
            var data = this.$store.state.allData
            return Math.round((this.getMonthData('conversions')/this.getMonthData('sessions') * 100) * 100) / 100
        },
    },
    components: {
            VueMonthlyPicker
        }
}
</script>


<style lang='scss' scoped>
 .focal-text {
  font-family: Dosis;
  font-size: 54px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffc001;
}
.vue-monthly-picker {
    width: 40%;
    position: absolute;
    bottom: 10px;
    right: 50px;
}



// Large devices (desktops, less than 1200px)
@media (max-width: 1199.98px) { 
  .seo-summary {
      margin-left:0;
      margin-right: 0;
  }
 }

 // Medium devices (tablets, less than 992px)
@media (max-width: 991.98px) { 
 .focal-text {
  font-size: 44px;
}
 }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { 
    .row-small {
        margin-left: 0;
    }
 }

 // Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { 
  .focal-text {
  font-size: 27px;
}

 }

</style>