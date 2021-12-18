import lzPdfMerage from './src/components/pdf-merage'
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component('lz-pdf-mmerage', lzPdfMerage)
  }
  //这样就可以使用Vue.use进行全局安装了。
  lzPdfMerage.install = function(Vue) {
    Vue.component(lzPdfMerage.name, lzPdfMerage)
  }
  export default lzPdfMerage