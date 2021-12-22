class baseObj {
    constructor (x,y,width,height, type) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.type = type
        this.isSelected = false
    }
    setPos(x,y) {
        this.x = x
        this.y = y
    }
}

class sealObj extends baseObj {
    constructor(x, y,image) {
        super(x, y, image.width,image.height, 'image')
        this.url = image.src
        this.image = image
    }
}
class textObj extends baseObj {
    constructor(x, y, width, height, font,text, isTransParent = false) {
        super(x,y,width,height,'text')
        this.font = font
        this.text = text
        this.isTransParent = isTransParent
    }
}

export default class DrawObj {
    constructor (canvas, current, scaleX, scaleY) {
        this._canvas = canvas
        this._bindEvent()
        this._drawItemList=[]
        this._current = current
        this._moveIndex = -1
        this._isDragging = false
        this._clickObj = {}
        this._ctx = this._canvas.getContext('2d')
        this._clickToAdd= []
        this._scaleX = scaleX
        this._scaleY = scaleY
    }
    _bindEvent() {
        this._canvas.addEventListener('mousedown', (e) => {this._canvasMoouseDown(e)})
        this._canvas.addEventListener('mouseup', (e) => {this._canvasMouseUp(e)})
        this._canvas.addEventListener('mousemove', (e) => { this._canvasMouseMove(e) })
        this._canvas.addEventListener('mouseout', (e) => { this._canvasMouseOut(e) })
        this._canvas.addEventListener('click', (e) => { this._canvasClick(e) })
    }
    _canvasClick(e) {
        if(this._clickToAdd.length === 0) return
        let x  = e.offsetX
        let y = e.offsetY
        for(let i = 0; i < this._clickToAdd.length; i++) {
            let clickItem = this._clickToAdd[i]
            clickItem.setPos(x - clickItem.width/2, y - clickItem.height/2)
            // 防止重叠
            if (x + clickItem.width + 20  < this._canvas.width) {
                x = x + clickItem.width + 20
            }
            this._drawItemList.push(clickItem)
        }
        this.drawItemList()
        this._clickToAdd = []
    }
    _canvasMoouseDown(e) {
        let clickX = e.offsetX
        let clickY = e.offsetY
        // 查找是否在范围内
        for (let i = 0; i < this._drawItemList.length; i++) {
            let { x , y , width, height } = this._drawItemList[i]
            let rightX = x + width
            let bottomY = y + height
            if (clickX < x || clickX > rightX) continue
            if ( clickY < y || clickY > bottomY ) continue
            if (this._moveIndex != -1 ) {
                this._drawItemList[this._moveIndex].isSelected = false
            }
            this._moveIndex  = i
            this._drawItemList[i].isSelected = true
            this._isDragging = true 
            this._clickObj = { clickX, clickY }
            this.drawItemList()
            return
        }
    }
    _canvasMouseUp() {
        this._isDragging = false
    }
    _canvasMouseMove(e) {
        if (!this._isDragging) return
        if (this._moveIndex === -1) return
        let {  clickX, clickY  } = this._clickObj
        let offsetX = e.offsetX - clickX
        let offsetY = e.offsetY - clickY
        let { x, y  } = this._drawItemList[this._moveIndex] 
        this._drawItemList[this._moveIndex] = Object.assign(this._drawItemList[this._moveIndex],{
            x: x + offsetX,
            y: y + offsetY
        })
        this._clickObj = {clickX: e.offsetX,clickY: e.offsetY }
        this.drawItemList()
    }
    _canvasMouseOut() {
        this._isDragging = false

    }
    _randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from)
    }
    _addImageProcess(item){
        if (!item.url) return null
        return new Promise((resolve, reject) => {
            let img = new Image(item.width, item.height)
            img.crossOrigin =  'anonymous'
            img.onload = () => resolve(img)
            img.onerror = reject
            img.src = item.url
        })
    }
    // 绘制图片
    _drawImage(ctx,drawItem) {
        ctx.drawImage(drawItem.image, drawItem.x, drawItem.y,drawItem.width, drawItem.height)
    }
    // 绘制文字
    _drawText(ctx,drawItem) {
        if (!drawItem.isTransParent) {
            ctx.fillStyle = "#fff"
            ctx.fillRect(drawItem.x, drawItem.y,drawItem.width, drawItem.height)
            ctx.fillStyle = "#000"
        }
        ctx.font = drawItem.font
        ctx.textBaseline = 'top';
        ctx.fillText(drawItem.text, drawItem.x, drawItem.y)
    }
    // 绘制虚线
    _drawStroke(ctx, drawItem) {
        ctx.setLineDash([5,5])
        ctx.strokeRect(drawItem.x, drawItem.y,drawItem.width, drawItem.height)
    }
    drawItemList(drawStroke = true) {
        // 解决闪烁问题
        let crashCanvas = document.createElement('canvas')
        crashCanvas.width = this._canvas.width
        crashCanvas.height = this._canvas.height
        let ctx = crashCanvas.getContext('2d')
        ctx.scale(this._scaleX, this._scaleY)
        for(let i = 0 ; i <this._drawItemList.length; i++) {
            let drawItem = this._drawItemList[i]
            if (drawItem.type === 'image') {
                this._drawImage(ctx,drawItem)
            } else if (drawItem.type === 'text') {
                this._drawText(ctx,drawItem)
            }
            if (drawItem.isSelected && drawStroke) {
                this._drawStroke(ctx,drawItem)
            }
        }
        this._ctx.clearRect(0,0, this._canvas.width, this._canvas.height)
        this._ctx.drawImage(crashCanvas,0,0)
    }
    // 添加图片
    async addSeal({width = 480, height = 480, url, pos='random'}) {
        if (!url) {
            throw('请传入图片url')
        }
        let image = await this._addImageProcess({url, width,height})
        let x = this._randomFromTo(0, this._canvas.width)
        let y = this._randomFromTo(0, this._canvas.height)
        let sealItem = new sealObj(x, y, image)
        if (pos === 'random') this._drawItemList.push(sealItem)
        if (pos === 'click')  this._clickToAdd.push(sealItem)
        if (pos === 'random')this.drawItemList()
    }
    _addTextBase({x,y, text, font, pos="random",isTransParent}) {
        this._ctx.font = font
        let width = this._ctx.measureText(text).width
        let height = parseFloat(font.replace(/[^0-9]/ig, ''))
        let textItem = new textObj(x, y,width, height, font, text, isTransParent)
        if (pos === 'random') this._drawItemList.push(textItem)
        if (pos === 'click') this._clickToAdd.push(textItem)
        return textItem
    }
    // 添加文字
    addText(textObj) {
        if (!textObj.text) {
            throw('请输入文字')
        }
        let x = this._randomFromTo(0, this._canvas.width)
        let y = this._randomFromTo(0, this._canvas.height)
        this._addTextBase({ ...textObj, x,y })
        if (textObj.pos === 'random') this.drawItemList()
    }
    // 添加日期
    addDate(dateObj) {
        if (!dateObj.date) {
            throw('请选择日期')
        }
        let dateArray = dateObj.date.split(' ')
        let x = this._randomFromTo(0, this._canvas.width)
        let y = this._randomFromTo(0, this._canvas.height)
        for(let i = 0; i < dateArray.length; i++) {
            let textItem = this._addTextBase({...dateObj, x, y, text: dateArray[i] })
            if (x + textItem.width +  20 < this._canvas.width) {
                x = x + textItem.width +  20 
            }
        }
        if (dateObj.pos === 'random') this.drawItemList()
    }
    getDrawItemList() {
        return this._drawItemList
    }
    getDrawCanvas() {
        this.drawItemList(false)
        return this._canvas
    }
    deleteChooseItem() {
        let deleteIndex = this._drawItemList.findIndex(item => item.isSelected)
        if (deleteIndex === this._moveIndex) this._moveIndex = -1
        this._drawItemList = this._drawItemList.filter(item => !item.isSelected)
        this.drawItemList()
    }
}