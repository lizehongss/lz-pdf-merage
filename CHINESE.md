# lz-pdf-merage

lz-pdf-merage 是一个可以预览和合成pdf的vue组件，主要功能包括盖章，添加日期，添加文字，旋转,打印，保存等。
## Install

```bash
npm install lz-pdf-merage
```
## Example

```vue
<template>
    <pdfView :pdfPath='pdfPath' :pdfHeight="900" ref="pdfView"/>
</template>
<script>
import pdfView from 'lz-pdf-merage'
export default {
    components:{
        pdfView
    },
    data() {
        return {
            pdfPath: ''
        }
    }
}
</script>
```
## Demo

[lz-pdf-merage](https://lizehongss.github.io/lz-pdf-merage/dist/index.html)

## Browser support
与[Vue.js 2](https://github.com/vuejs/vue/blob/dev/README.md)支持一样

## API

### Props
#### :pdfPath <sup>String<sup>
需要进行预览和合成的pdf路径，支持本地路径和http,

#### :pdfHeight <sup>Number<sup>
预览和合成pdf的容器宽度
#### :pdfWidth <sup>Number<sup>
预览和合成pdf的容器高度

### Methods
### addSeal(Object)
添加盖章图片,Object对象说明如下:
* `pos`：位置是随机还是点击时确定， **random**为随机，**click**为点击时确定
* `width`: 图片宽度
* `height`: 图片高度
* `url`: 图片地址，支持url和base64

```js
    this.$refs.pdfView.addSeal({
        pos: 'random' // 'click'
        width: 200,
        height: 200,
        url: './seal.png'
    })
```
### addDate(Object)
添加日期, Object对象说明如下:
* `pos`: 同上
* `date`: 日期
* `fontSize`: 日期文字大小
* `isTransParent`: 是否透明
```js
    this.$refs.pdfView.addDate({
        pos: 'click'
        date: '2021 09 18',
        fontSize: 24,
        isTransParent: true
        })
```
### addText(Object)
添加文字
* `pos`: 同上
* `isTransParent`: 同上
* `fontSize`: 同上
* `text`: 文字内容
```js
    this.$refs.pdfView.addText({
        pos: 'random'
        isTransParent: false
        fontSize: 24,
        text: '样例展示'
    })
```
### deleteItem() 
删除选中的项
```js
    this.$refs.pdfView.deleteItem()
```
### downLoadPdf(name)
下载合成的pdf
*`name`: pdf名称
```js
    this.$refs.pdfView.downLoadPdf('合成pdf')

```
## License
MIT