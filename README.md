# lz-pdf-merage
[中文文档](https://github.com/lizehongss/lz-pdf-merage/blob/master/CHINESE.md)

lz-pdf-merage is a Vue component that can preview and synthesize PDF. Its main functions include stamping, adding date, adding text, rotating, printing, saving, etc.
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
Same browser support as [Vue.js 2](https://github.com/vuejs/vue/blob/dev/README.md)

## API

### Props
#### :pdfPath <sup>String<sup>

The PDF path that needs to be previewed and synthesized supports local path and HTTP

#### :pdfHeight <sup>Number<sup>

Container width for preview and composite pdf
#### :pdfWidth <sup>Number<sup>

Container height for preview and composite pdf
### Methods
### addSeal(Object)
Add a stamp picture
* `pos`：Is the location random or determined when clicked, **random** is random, **click** is determined when clicked 
* `width`: stamp picture width
* `height`: stamp picture height
* `url`: stamp picture url **SupportBase64** 

```js
    this.$refs.pdfView.addSeal({
        pos: 'random' // 'click'
        width: 200,
        height: 200,
        url: './seal.png'
    })
```
### addDate(Object)
Add Date
* `pos`: ditto
* `date`: Date
* `fontSize`: Date font size
* `isTransParent`: Is it transparent
```js
    this.$refs.pdfView.addDate({
        pos: 'click'
        date: '2021 09 18',
        fontSize: 24,
        isTransParent: true
        })
```
### addText(Object)
Add Text
* `pos`: ditto
* `isTransParent`: ditto
* `fontSize`: ditto
* `text`: text
```js
    this.$refs.pdfView.addText({
        pos: 'random'
        isTransParent: false
        fontSize: 24,
        text: '样例展示'
    })
```
### deleteItem() 
Delete selected item
```js
    this.$refs.pdfView.deleteItem()
```
### downLoadPdf(name)
Download synthetic pdf
*`name`: pdf name
```js
    this.$refs.pdfView.downLoadPdf('合成pdf')

```
## License
MIT
