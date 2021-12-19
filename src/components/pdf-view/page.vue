<template>
    <div class="page">
        <canvas class="page-canvas" ref="canvas" />
    </div>
</template>
<script>
// pdf 放大值
const scales = { 1:3.2, 2: 4 }
const defaultScale = 3

export default {
    props: {
        width: {
            type: Number,
        },
        page: {},
        defaultRotate: {}
    },
    mounted() {
        this.draw();
    },
    data() {
        return {
            rotate: this.defaultRotate,
            pageContainer: null,
            // scale: 
        }
    },
    watch: {
        page() {
            this.rotate = this.defaultRotate;
            this.draw();
        },
        width(val) {
            if (val) this.draw();
        }
    },
    methods: {
        async draw(widthScale = 1) {
            if (!this.page) return;
            let page = await this.page;
            this.pageContainer = page;
            let canvas = this.$refs.canvas;
            let context = canvas.getContext('2d');
            let scale = scales[window.devicePixelRatio] || defaultScale;
            let viewport = page.getViewport(scale, this.rotate);
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            canvas.style.width = `${this.width * widthScale}px`
            canvas.style.height = `${this.width/viewport.width * viewport.height * widthScale}px`;
            let renderContext = {
                canvasContext: context,
                viewport: viewport
            };
            await page.render(renderContext);
            this.$emit('drawFinish', canvas);
        },
        rotateLeft() {
            this.rotate += -90;
            this.draw();
            this.$emit('saveRotate', this.rotate)
        },
        rotateRight() {
            this.rotate += 90;
            this.draw();
            this.$emit('saveRotate', this.rotate)
        },
        handleZoom(value) {
            this.draw(value)

        },
        getBasePdfViewport() {
            if (!this.pageContainer) return {};
            return this.pageContainer.getViewport(1, 0);
        }
    }

}
</script>

<style scoped>
.page {
  display: inline-block;
  height: auto;
}

.page-canvas {
  display: block;
}
</style>