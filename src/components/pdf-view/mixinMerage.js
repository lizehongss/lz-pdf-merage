import { jsPDF } from "jspdf"
import DrawObj from './canvasDraw'
export default {
  data() {
    return {
      canvasArray: [],
      baseCanvasImages: [] // use the crash
    }
  },
  methods: {
    async getTheMeragePdf() {
      const pdf = new jsPDF('p', 'pt', 'a4')
      let pdfImages = await this.getThePdfImages()
      for(let i = 0; i< pdfImages.length; i++) {
        let imageObj = pdfImages[i]
        pdf.addImage(imageObj.url, 'JPEG', 0,0, 592.28, 592.28/imageObj.width * imageObj.height)
        if(this.canvasArray[i]) {
          let drawCanvas = this.canvasArray[i].getDrawCanvas()
          const drawData = drawCanvas.toDataURL('image/png')
          pdf.addImage(drawData, 'PNG', 0,0, 592.28, 592.28/drawCanvas.width * drawCanvas.height)
        }
        if (i < pdfImages.length - 1) pdf.addPage() 
      }
      return pdf
    },
    async downLoadPdf(name="pdf合成") {
      let pdfObj = await this.getTheMeragePdf()
      pdfObj.save(name)
    },
    async pdfToBase64() {
      let pdfObj = await this.getTheMeragePdf()
      return pdfObj.output('datauristring')
    },
    async getThePdfImages() {
      let pdfImages = Array(this.total).fill(Infinity)
      for(let i = 0; i<pdfImages.length; i++) {
        // use the canvas after the user operation
        if(this.baseCanvasImages[i]){
          pdfImages[i] = this.baseCanvasImages[i]
        } else {
          pdfImages[i] = await this.$refs.page.drawPage(this.pdf.getPage(i+1))
        }
      }
      return pdfImages
    },
    handleFinishDraw(canvas){
      let current = this.current - 1
      this.baseCanvasImages[current] = {
        url: canvas.toDataURL('image/jpeg'),
        width: canvas.width,
        height: canvas.height
      }
      if (!this.canvasArray[current]) {
        let { width, height } = canvas.getBoundingClientRect()
        let drawCanvas = this.setDrawCanvas(canvas)
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
      // drawCanvas.style.top = `${canvas.offsetTop}px`
      // drawCanvas.style.left = `${canvas.offsetLeft}px`
      return drawCanvas
    },
    getIsDragging() {
      let current = this.current - 1
      return this.canvasArray[current].getIsDragging()
    },
    addSeal({pos="random", width,height, url}) {
          let current = this.current - 1
          this.canvasArray[current].addSeal({
              width,
              height,
              url,
              pos
          })
    },
    deleteItem() {
          let current = this.current - 1
          this.canvasArray[current].deleteChooseItem()
    },
    addDate({pos="random", date, isTransParent, fontSize}) {
      if (this.date === null) {
        throw('请选择日期插入')
      }
      let current = this.current - 1
      this.canvasArray[current].addDate({
              date,
              isTransParent,
              font: `${fontSize}px serif`,
              pos
          })
    },
    addText({pos = 'random', text, isTransParent, fontSize}) {
      let current = this.current - 1
      this.canvasArray[current].addText({
        text,
        isTransParent,
        font: `${fontSize}px serif`,
        pos
      })
    },
  }

}