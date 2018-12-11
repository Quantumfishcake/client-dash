<template>
    <div>
        <div>
          <Row1 />
          <Row2 />
          <Row3 />
          <Row4 />
          <Row5 />
        </div>
    </div>
</template>

<script>
import Row1 from './Rows/Row1.vue'
import Row2 from './Rows/Row2.vue'
import Row3 from './Rows/Row3.vue'
import Row4 from './Rows/Row4.vue'
import Row5 from './Rows/Row5.vue'

export default {
  name: 'MainBody',
  components: {
    Row1,
    Row2,
    Row3,
    Row4,
    Row5
  }
}
</script>


