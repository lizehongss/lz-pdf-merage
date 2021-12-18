<template>
  <div class="container">
    <div>{{propData}}</div>
  </div>
</template>

<script>
export default {
  name: 'pdf-view',
  data () {
    return {}
  },
  props: {
      propData: {
          type: String,
          default: '我是默认值'
      }
  }
}
</script>