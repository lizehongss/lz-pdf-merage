<template>
  <div>
    <pdfView :pdfPath='initData'/>
  </div>
</template>

<script>
import pdfView from './components/pdf-view'
export default {
    data(){
      return {
        initData: './test.pdf'
      }
    },
    components:{
        pdfView
    }
}
</script>