<template>
  <div>
    <pdfView :propData='initData'/>
  </div>
</template>

<script>
import pdfView from './components/pdf-view'
export default {
    data(){
      return {
        initData: 'hello world'
      }
    },
    components:{
        pdfView
    }
}
</script>