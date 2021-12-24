<template>
  <div class="pdf-main">
    <div class="pdf-operation">
      <button @click="deleteChooseItem">删除选择的项</button>
      <button @click="handleAddSeal('random')">随机位置盖章</button>
      <button @click="handleAddSeal('click')">点击位置盖章</button>
      <button @click="handleAddDate('random', false)">随机位置日期(不透明)</button>
      <button @click="handleAddDate('click', true)">点击位置日期(透明)</button>
      <button @click="handleAddText('random', false)">随机位置添加文字(不透明)</button>
      <button @click="handleAddText('click', true)">点击位置添加文字(透明)</button>
      <button @click="handleDownload">下载合成的pdf</button>
    </div>
    <div class="pdf-view">
      <pdfView :pdfPath='initData' :pdfHeight="900" ref="pdfView"/>
    </div>
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
    },
    methods: {
      handleAddSeal(pos) {
        this.$refs.pdfView.addSeal({
          pos,
          width: 200,
          height: 200,
          url: 'http://192.168.37.100:8080/default/20211223/09/41/2/渝中区看守所1.png'
        })
      },
      handleAddDate(pos, isTransParent) {
        this.$refs.pdfView.addDate({
          pos,
          date: '2109 09 18',
          fontSize: 24,
          isTransParent,
        })
      },
      handleAddText(pos, isTransParent) {
        this.$refs.pdfView.addText({
          pos,
          isTransParent,
          fontSize: 24,
          text: '样例展示'
        })
      },
      deleteChooseItem() {
        this.$refs.pdfView.deleteItem()
      },
      handleDownload() {
        this.$refs.pdfView.getTheMeragePdf('合成pdf')
      }
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