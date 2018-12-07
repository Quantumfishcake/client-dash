
<template>
 <div class="row bg-w">
   <div style='position: relative; width: 100%;'>
    <chart />
    </div>

    </div>
</template>

<script>
  import chart from '../chart2.js'

export default {
  
  name: 'Row3sem',
  props: {
    message: String
  },
  components: {
    chart 
  }
}
</script>