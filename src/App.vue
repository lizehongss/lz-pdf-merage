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
      <pdfView :pdfPath='pdfPath' :pdfHeight="900" ref="pdfView"/>
    </div>
  </div>
</template>

<script>
import pdfView from './components/pdf-view'
export default {
    data(){
      return {
        pdfPath: './test.pdf'
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
          url: './seal.png'
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
        this.$refs.pdfView.downLoadPdf('合成pdf')
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
button{
  cursor: pointer;
  margin: 5px;
}
</style>