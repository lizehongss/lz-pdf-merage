<template>
  <div class="pdf-content" :style="{'height': pdfHeight + 'px'}">
    <div v-if="isPdfLoading" class="pdf-loading">
      <span class="loadingIcon"></span>
      {{ loadingText }}
    </div>
    <div v-if="isPdfError" class="pdf-error">{{errorText}}</div>
    <div class="pdf-body" ref="pdfBody" :style="pdfContent" @mousedown="handleMouseDown"  v-if="!isPdfError && !isPdfLoading">
      <Page ref="page" :defaultRotate="pageRotate" :page="currentPage" :width="pdfWidth - 25" @saveRotate="saveRotate" @drawFinish="handleFinishDraw"></Page>
    </div>
    <PageTurner class="page-turner" @handleZoom="handleZoom" @print="print" @rotate="rotate" :total="total" :current.sync="current"></PageTurner>
  </div>
</template>
<script>
import PageTurner from "../page-turner";
import Page from "./page";
import Pdfjs from 'pdfjs-dist';
export default {
  props: {
    pdfPath: {
      type: String,
      default: "",
    },
    pdfHeight: {
      type: Number,
    },
    pdfWidth: {
      type: Number,
      default: 1200,
    },
    loadingText: {
      type: String,
      default: "正在加载中",
    },
    errorText: {
      type: String,
      default: '加载PDF失败'
    }
  },
  components: { Page, PageTurner },
  data() {
    return {
      current: 1,
      rotateArray: [],
      isPdfLoading: false,
      pdf: null,
      transform: {
        clientX: 0,
        clientY: 0,
      },
    };
  },
  async mounted() {
    await this.getPdfData();
  },
  beforeDestroy() {
    this.cleanPrint();
  },
  watch: {},
  methods: {
    print() {
      if (this.total === 0) return 0;
      // printPdf
    },
    saveRotate(rotate) {
      let index = this.rotateArray.findIndex(
        (it) => it.current === this.current
      );
      if (index != -1) {
        this.rotateArray[index].rotate = rotate;
      } else {
        this.rotateArray.push({
          current: JSON.parse(JSON.stringify(this.current)),
          rotate: rotate,
        });
      }
    },
    rotate(type) {
      if (type === "left") this.$refs.page.rotateLeft();
      if (type === "right") this.$refs.page.rotateRight();
    },
    handleFinishDraw(canvas) {
      this.$emit("drawSuccess", canvas);
    },
    cleanPrint() {
      let p = document.getElementById("printContainer");
      if (p) {
        document.querySelector("body").removeChild(p);
      }
    },
    handleZoom(value) {
      this.$refs.page.handleZoom(value);
    },
    handleMouseDown(e) {
      this.transform = {
        clientX: e.clientX,
        clientY: e.clientY,
      };
      let self = this;
      this._dragHandler = (e) => {
        const { clientX, clientY } = this.transform;
        let { scrollTop, scrollLeft } = this.$refs.pdfBody;
        let xPos = e.clientX - clientX;
        let yPos = e.clientY - clientY;
        if (Math.abs(xPos) > 20) {
          this.$refs.pdfBody.scrollLeft =
            scrollLeft - (xPos > 0 ? 20 : -20);
        }
        if (Math.abs(yPos) > 20) {
          this.$refs.pdfBody.scrollTop =
            scrollTop - (yPos > 0 ? 20 : -20);
        }
      }
      this._stopHandler = () => {
        window.removeEventListener("mousemove", self._dragHandler);
        window.removeEventListener("mouseup", self._stopHandler);
      };
      window.addEventListener("mousemove", self._dragHandler);
      window.addEventListener("mouseup", self._stopHandler);
    },
    async getPdfData() {
      let { pdfPath } = this;
      this.isPdfLoading = true;
      this.pdf = await Pdfjs.getDocument({
        url: pdfPath,
      });
      this.isPdfLoading = false;
    },
  },
  computed: {
    total() {
      return this.pdf ? this.pdf.numPages : 0;
    },
    currentPage() {
      return this.pdf ? this.pdf.getPage(this.current) : null;
    },
    pageRotate() {
      let item = this.rotateArray.find((it) => it.current === this.current);
      return item ? item.rotate : 0;
    },
    isPdfError() {
      if (!this.pdfPath) return true;
      if (this.isPdfLoading) return false;
      return this.pdf ? false : true;
    },
    pdfContent() {
      return {
        width: this.pdfWidth + 'px',
        height: this.pdfHeight + 'px',
      }
    }
  },
};
</script>
<style>
.pdf-content{
  position: relative;
}
.pdf-body{
  overflow: auto;
  text-align: center;
}
.pdf-loading{
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #579fff;
  text-align: center;
  
}
.pdf-error{

}
.loadingIcon{
    display: inline-block;
    margin-right: 10px;
    width: 8px;
    height: 8px;
    border: 2px solid;
    border-radius: 100%;
    border-right-color: transparent;
    animation: loading 1s ease-in-out infinite;
}
.page-turner{
	height: 30px;
	position: absolute;
	bottom: 0px;
	width: 700px;
	left: 50%;
	transform: translate(-350px);
  opacity: 0.6;
  background: #000000;
  border-radius: 4px 4px 0px 0px;
}
@keyframes loading {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>