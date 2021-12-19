<template>
  <main
    class="view-container"
    :style="{ height: pdfHeight + 'px' }"
    ref="container">
    <div v-if="isPdfLoading" class="pdf-loading">
      <span class="loadingIcon">{{ loadingText }}</span>
    </div>
    <div v-if="isPdfError" class="pdf-error"></div>
    <template v-if="!isPdfError && !isPdfLoading">
      <div class="pdf-title">
        <slot name="title"></slot>
      </div>
      <div class="pdf-body" :style="{ paddingTop: pdfTop + 'px' }">
        <div
          class="pdf-scroller"
          ref="pdf-scroller"
          @mousedown="handleMouseDown"
        >
          <Page
            ref="page"
            :defaultRotate="pageRotate"
            :page="currentPage"
            :width="pdfWidth"
            @saveRotate="saveRotate"
            @drawFinish="handleFinishDraw"
          ></Page>
        </div>
      </div>
      <PageTurner
        class="page-turner"
        @handleZoom="handleZoom"
        @print="print"
        @rotate="rotate"
        :total="total"
        :current.sync="current"
      ></PageTurner>
    </template>
  </main>
</template>
<script>
import PageTurner from "../page-turner";
import Page from "./page";
import Pdfjs from 'pdfjs-dist/webpack';
export default {
  props: {
    pdfPath: {
      type: String,
      default: "",
    },
    pdfHeight: {
      type: Number,
    },
    pdfTop: {
      type: Number,
      default: 0,
    },
    pdfWidth: {
      type: Number,
      default: 760,
    },
    loadingText: {
      type: String,
      default: "正在加载中",
    },
  },
  components: { Page, PageTurner },
  data() {
    return {
      current: 1,
      rotateArray: [],
      errorText: null,
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
        let { scrollTop, scrollLeft } = this.$refs.fileViewScroller;
        let xPos = e.clientX - clientX;
        let yPos = e.clientY - clientY;
        if (Math.abs(xPos) > 20) {
          this.$refs.fileViewScroller.scrollLeft =
            scrollLeft - (xPos > 0 ? 20 : -20);
        }
        if (Math.abs(yPos) > 20) {
          this.$refs.fileViewScroller.scrollTop =
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
  },
};
</script>
<style scoped>

</style>