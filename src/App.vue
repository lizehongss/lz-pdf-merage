<template>
  <div class="pdf-view">
    <pdfView :pdfPath='initData' :pdfHeight="900"/>
  </div>
</template>

<script>
import pdfView from './components/pdf-view'
export default {
    data(){
      return {
        initData: 'http://192.168.37.100:8080/default/20211221/17/17/2/%E5%8F%98%E6%9B%B4%E7%BE%81%E6%8A%BC%E6%9C%9F%E9%99%90%E9%80%9A%E7%9F%A5%E4%B9%A6.pdf'
      }
    },
    components:{
        pdfView
    }
}
</script>
<style>
.pdf-view{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>