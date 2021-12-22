<template>
  <main class="pdf-merage">
    <canvas ref="drawCanvas" class="draw-canvas"></canvas>
    <PdfView :pdfHeight="pdfHeight" :pdfPath="pdfPath" :pdfWidth="pdfWidth" class="pdf-view" ref="pdfView" @drawSuccess="drawSuccess"></PdfView>
  </main>
</template>
<script>
import PdfView from '../pdf-view'
import { jsPDF } from "jspdf"
import DrawObj from './canvasDraw'
export default {
    props: {
      pdfPath: {
        type: String,
        default: ''
      },
      pdfWidth: {
        type: Number,
        default: 1200
      },
      pdfHeight: {
        type: Number,
        default: 800
      }
    },
    components: {PdfView},
    data() {
      return {
        canvasArray: [],
        baseCanvasArray: []
      }
    },
    methods: {
        async getTheMeragePdf() {
            const pdf = new jsPDF('p', 'pt', 'a4')
            for(let i = 0; i< this.baseCanvasArray.length; i++) {
                let baseCanvas = this.baseCanvasArray[i]
                if (baseCanvas) {
                    let drawCanvas = this.canvasArray[i].getDrawCanvas()
                    const pageData = baseCanvas.toDataURL('image/jpeg')
                    const drawData = drawCanvas.toDataURL('image/png')
                    pdf.addImage(pageData, 'JPEG', 0,0, 592.28, 592.28/baseCanvas.width * baseCanvas.height)
                    pdf.addImage(drawData, 'PNG', 0,0, 592.28, 592.28/drawCanvas.width * drawCanvas.height)
                }
            }
            pdf.save('canvas转成pdf')
        },
      drawSuccess(canvas){
            let current = this.$refs.pdfView.current - 1
            this.baseCanvasArray[current] = canvas
            if (!this.canvasArray[current]) {
                let { width, height } = canvas.getBoundingClientRect()
                let drawCanvas = this.setDrawCanvas(canvas)
                // this.pdfHeight = height + 50;
                this.canvasArray[current] = new DrawObj(drawCanvas, current, canvas.width/width, canvas.height/height)
            }
            this.canvasArray[current].drawItemList()
      },
      setDrawCanvas(canvas) {
        let drawCanvas = this.$refs.drawCanvas
        drawCanvas.width = canvas.width
        drawCanvas.height = canvas.height
        drawCanvas.style.width = canvas.style.width
        drawCanvas.style.height = canvas.style.height
        drawCanvas.style.top = `${canvas.offsetTop}px`
        drawCanvas.style.left = `${canvas.offsetLeft}px`
        return drawCanvas
      },
      addSeal({pos="random", width,height, url}) {
            let current = this.$refs.pdfView.current - 1
            this.canvasArray[current].addSeal({
                width,
                height,
                url,
                pos
            })
      },
      deleteItem() {
            let current = this.$refs.pdfView.current - 1
            this.canvasArray[current].deleteChooseItem()
      },
      addDate({pos="random", date, isTransParent, fontSize}) {
        if (this.date === null) {
          throw('请选择日期插入')
        }
        let current = this.$refs.pdfView.current - 1
        this.canvasArray[current].addDate({
                date,
                isTransParent,
                font: `${fontSize}px serif`,
                pos
            })
      },
      addText({pos = 'random', text, isTransParent, fontSize}) {
        let current = this.$refs.pdfView.current - 1
        this.canvasArray[current].addText({
          text,
          isTransParent,
          font: `${fontSize}px serif`,
          pos
        })
      },
    }
}
</script>
<style>
.pdf-merage{
  position: relative;
}
.draw-canvas{
  position: absolute;
  z-index: 999;
}
</style>