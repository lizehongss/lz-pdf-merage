(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],d=0,l=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&l.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);h&&h(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function s(t){return o.p+"js/"+({pdfjsWorker:"pdfjsWorker"}[t]||t)+"."+{"chunk-2d216214":"02f52b64","chunk-2d216257":"d9b65536","chunk-70a2df70":"98994a8a",pdfjsWorker:"7f82a706"}[t]+".js"}function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=s(t);var u=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,n[1](u)}a[t]=void 0}};var d=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/lz-pdf-merage/dist/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1:function(t,e){},2:function(t,e){},2123:function(t,e,n){"use strict";n("ca38")},3:function(t,e){},4:function(t,e){},"4b86":function(t,e,n){"use strict";n("9dd0")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf-main"},[n("div",{staticClass:"pdf-operation"},[n("button",{on:{click:t.deleteChooseItem}},[t._v("删除选择的项")]),n("button",{on:{click:function(e){return t.handleAddSeal("random")}}},[t._v("随机位置盖章")]),n("button",{on:{click:function(e){return t.handleAddSeal("click")}}},[t._v("点击位置盖章")]),n("button",{on:{click:function(e){return t.handleAddDate("random",!1)}}},[t._v("随机位置日期(不透明)")]),n("button",{on:{click:function(e){return t.handleAddDate("click",!0)}}},[t._v("点击位置日期(透明)")]),n("button",{on:{click:function(e){return t.handleAddText("random",!1)}}},[t._v("随机位置添加文字(不透明)")]),n("button",{on:{click:function(e){return t.handleAddText("click",!0)}}},[t._v("点击位置添加文字(透明)")]),n("button",{on:{click:t.handleDownload}},[t._v("下载合成的pdf")])]),n("div",{staticClass:"pdf-view"},[n("pdfView",{ref:"pdfView",attrs:{pdfPath:t.pdfPath,pdfHeight:900}})],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pdf-content",style:{height:t.pdfHeight+"px"}},[t.isPdfLoading?n("div",{staticClass:"pdf-loading"},[n("span",{staticClass:"loadingIcon"}),t._v(" "+t._s(t.loadingText)+" ")]):t._e(),t.isPdfError?n("div",{staticClass:"pdf-error"},[t._v(t._s(t.errorText))]):t._e(),t.isPdfError||t.isPdfLoading?t._e():n("div",{ref:"pdfBody",staticClass:"pdf-body",style:t.pdfContent,on:{mousedown:t.handleMouseDown}},[n("canvas",{ref:"drawCanvas",staticClass:"draw-canvas"}),n("Page",{ref:"page",attrs:{defaultRotate:t.pageRotate,page:t.currentPage,width:t.pdfWidth-25},on:{saveRotate:t.saveRotate,drawFinish:t.handleFinishDraw}})],1),n("PageTurner",{staticClass:"page-turner",attrs:{total:t.total,current:t.current},on:{handleZoom:t.handleZoom,print:t.print,rotate:t.rotate,"update:current":function(e){t.current=e}}})],1)},o=[],c=n("1da1"),u=(n("96cf"),n("a9e3"),n("c740"),n("e9c4"),n("7db0"),n("d3b7"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-turner"},[n("div",{staticClass:"page-reset page-icon",on:{click:function(e){return t.handleActions("reset")}}}),n("div",{staticClass:"page-enlarge page-icon",class:t.enlargeClass,on:{click:function(e){return t.handleActions("zoomIn")}}}),n("div",{staticClass:"page-narrow page-icon",class:t.narrowClass,on:{click:function(e){return t.handleActions("zoomOut")}}}),n("div",{staticClass:"page-first page-icon",class:t.prevClass,on:{click:t.first}}),n("div",{staticClass:"page-second page-icon",class:t.prevClass,on:{click:t.second}}),n("div",{staticClass:"page-num page-icon"},[t._v(t._s(t.current)+"/"+t._s(t.total))]),n("div",{staticClass:"page-third page-icon",class:t.nextClass,on:{click:t.third}}),n("div",{staticClass:"page-fourth page-icon",class:t.nextClass,on:{click:t.fourth}}),n("div",{staticClass:"page-anti-clockwise page-icon",attrs:{title:"逆时钟旋转"},on:{click:function(e){return t.rotate("left")}}}),n("div",{staticClass:"page-clockwise page-icon",attrs:{title:"顺时钟旋转"},on:{click:function(e){return t.rotate("right")}}}),n("div",{staticClass:"page-print page-icon",attrs:{title:"打印"},on:{click:t.print}})])}),d=[],h={props:{current:{type:Number},total:{type:Number},scale:{type:Number,default:4}},data:function(){return{setScale:1}},methods:{print:function(){this.$emit("print")},rotate:function(t){this.$emit("rotate",t)},first:function(){this.prevDisabled||this.$emit("update:current",1)},second:function(){this.prevDisabled||this.$emit("update:current",this.current-1)},third:function(){this.nextDisabled||this.$emit("update:current",this.current+1)},fourth:function(){this.nextDisabled||this.$emit("update:current",this.total)},handleActions:function(t){if("reset"===t)this.setScale=1;else if("zoomIn"===t){if(4===this.setScale)return;this.setScale+=.5}else if("zoomOut"===t){if(.5===this.setScale)return;this.setScale-=.5}this.$emit("handleZoom",this.setScale)}},computed:{prevDisabled:function(){return this.current<=1},nextDisabled:function(){return this.current>=this.total},prevClass:function(){return{"page-disabled":this.prevDisabled}},nextClass:function(){return{"page-disabled":this.nextDisabled}},enlargeClass:function(){return{"page-disabled":this.setScale>=this.scale}},narrowClass:function(){return{"page-disabled":this.setScale<=.5}}}},l=h,f=(n("2123"),n("2877")),p=Object(f["a"])(l,u,d,!1,null,null,null),g=p.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[n("canvas",{ref:"canvas",staticClass:"page-canvas"})])},m=[],w={1:3.2,2:4},_=3,b={props:{width:{type:Number},page:{},defaultRotate:{}},mounted:function(){this.draw()},data:function(){return{rotate:this.defaultRotate,pageContainer:null}},watch:{page:function(){this.rotate=this.defaultRotate,this.draw()},width:function(t){t&&this.draw()}},methods:{draw:function(){var t=arguments,e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a,i,s,o,c,u;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=t.length>0&&void 0!==t[0]?t[0]:1,e.page){n.next=3;break}return n.abrupt("return");case 3:return n.next=5,e.page;case 5:return a=n.sent,e.pageContainer=a,i=e.$refs.canvas,s=i.getContext("2d"),o=w[window.devicePixelRatio]||_,c=a.getViewport(o,e.rotate),i.height=c.height,i.width=c.width,i.style.width="".concat(e.width*r,"px"),i.style.height="".concat(e.width/c.width*c.height*r,"px"),u={canvasContext:s,viewport:c},n.next=18,a.render(u);case 18:e.$emit("drawFinish",i);case 19:case"end":return n.stop()}}),n)})))()},drawPage:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:return n=e.sent,r=document.createElement("canvas"),a=r.getContext("2d"),i=w[window.devicePixelRatio]||_,s=n.getViewport(i,0),r.height=s.height,r.width=s.width,o={canvasContext:a,viewport:s},e.next=12,n.render(o);case 12:return e.abrupt("return",{url:r.toDataURL("image/jpeg"),width:r.width,height:r.height});case 13:case"end":return e.stop()}}),e)})))()},rotateLeft:function(){this.rotate+=-90,this.draw(),this.$emit("saveRotate",this.rotate)},rotateRight:function(){this.rotate+=90,this.draw(),this.$emit("saveRotate",this.rotate)},handleZoom:function(t){this.draw(t)},getBasePdfViewport:function(){return this.pageContainer?this.pageContainer.getViewport(1,0):{}}}},y=b,x=(n("4b86"),Object(f["a"])(y,v,m,!1,null,"b6b20aea",null)),k=x.exports,I=n("9511"),C=n.n(I),P=(n("cb29"),n("8baf")),T=n("5530"),L=n("262e"),O=n("2caf"),j=n("d4ec"),R=n("bee2"),D=(n("ac1f"),n("5319"),n("1276"),n("4de4"),function(){function t(e,n,r,a,i){Object(j["a"])(this,t),this.x=e,this.y=n,this.width=r,this.height=a,this.type=i,this.isSelected=!1}return Object(R["a"])(t,[{key:"setPos",value:function(t,e){this.x=t,this.y=e}}]),t}()),S=function(t){Object(L["a"])(n,t);var e=Object(O["a"])(n);function n(t,r,a){var i;return Object(j["a"])(this,n),i=e.call(this,t,r,a.width,a.height,"image"),i.url=a.src,i.image=a,i}return Object(R["a"])(n)}(D),A=function(t){Object(L["a"])(n,t);var e=Object(O["a"])(n);function n(t,r,a,i,s,o){var c,u=arguments.length>6&&void 0!==arguments[6]&&arguments[6];return Object(j["a"])(this,n),c=e.call(this,t,r,a,i,"text"),c.font=s,c.text=o,c.isTransParent=u,c}return Object(R["a"])(n)}(D),E=function(){function t(e,n,r,a){Object(j["a"])(this,t),this._canvas=e,this._bindEvent(),this._drawItemList=[],this._current=n,this._moveIndex=-1,this._isDragging=!1,this._clickObj={},this._ctx=this._canvas.getContext("2d"),this._clickToAdd=[],this._scaleX=r,this._scaleY=a}return Object(R["a"])(t,[{key:"_bindEvent",value:function(){var t=this;this._canvas.addEventListener("mousedown",(function(e){t._canvasMoouseDown(e)})),this._canvas.addEventListener("mouseup",(function(e){t._canvasMouseUp(e)})),this._canvas.addEventListener("mousemove",(function(e){t._canvasMouseMove(e)})),this._canvas.addEventListener("mouseout",(function(e){t._canvasMouseOut(e)})),this._canvas.addEventListener("click",(function(e){t._canvasClick(e)}))}},{key:"_canvasClick",value:function(t){if(0!==this._clickToAdd.length){for(var e=t.offsetX,n=t.offsetY,r=0;r<this._clickToAdd.length;r++){var a=this._clickToAdd[r];a.setPos(e-a.width/2,n-a.height/2),e+a.width+20<parseInt(this._canvas.style.width)&&(e=e+a.width+20),this._drawItemList.push(a)}this.drawItemList(),this._clickToAdd=[]}}},{key:"_canvasMoouseDown",value:function(t){for(var e=t.offsetX,n=t.offsetY,r=0;r<this._drawItemList.length;r++){var a=this._drawItemList[r],i=a.x,s=a.y,o=a.width,c=a.height,u=i+o,d=s+c;if(!(e<i||e>u)&&!(n<s||n>d))return-1!=this._moveIndex&&(this._drawItemList[this._moveIndex].isSelected=!1),this._moveIndex=r,this._drawItemList[r].isSelected=!0,this._isDragging=!0,this._clickObj={clickX:e,clickY:n},void this.drawItemList()}}},{key:"_canvasMouseUp",value:function(){this._isDragging=!1}},{key:"_canvasMouseMove",value:function(t){if(this._isDragging&&-1!==this._moveIndex){var e=this._clickObj,n=e.clickX,r=e.clickY,a=t.offsetX-n,i=t.offsetY-r,s=this._drawItemList[this._moveIndex],o=s.x,c=s.y;this._drawItemList[this._moveIndex]=Object.assign(this._drawItemList[this._moveIndex],{x:o+a,y:c+i}),this._clickObj={clickX:t.offsetX,clickY:t.offsetY},this.drawItemList()}}},{key:"_canvasMouseOut",value:function(){this._isDragging=!1}},{key:"_randomFromTo",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}},{key:"_addImageProcess",value:function(t){return t.url?new Promise((function(e,n){var r=new Image(t.width,t.height);r.crossOrigin="anonymous",r.onload=function(){return e(r)},r.onerror=n,r.src=t.url})):null}},{key:"_drawImage",value:function(t,e){t.drawImage(e.image,e.x,e.y,e.width,e.height)}},{key:"_drawText",value:function(t,e){e.isTransParent||(t.fillStyle="#fff",t.fillRect(e.x,e.y,e.width,e.height),t.fillStyle="#000"),t.font=e.font,t.textBaseline="top",t.fillText(e.text,e.x,e.y)}},{key:"_drawStroke",value:function(t,e){t.setLineDash([5,5]),t.strokeRect(e.x,e.y,e.width,e.height)}},{key:"getIsDragging",value:function(){return this._isDragging}},{key:"drawItemList",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=document.createElement("canvas");e.width=this._canvas.width,e.height=this._canvas.height;var n=e.getContext("2d");n.scale(this._scaleX,this._scaleY);for(var r=0;r<this._drawItemList.length;r++){var a=this._drawItemList[r];"image"===a.type?this._drawImage(n,a):"text"===a.type&&this._drawText(n,a),a.isSelected&&t&&this._drawStroke(n,a)}this._ctx.clearRect(0,0,this._canvas.width,this._canvas.height),this._ctx.drawImage(e,0,0)}},{key:"addSeal",value:function(){var t=Object(c["a"])(regeneratorRuntime.mark((function t(e){var n,r,a,i,s,o,c,u,d,h,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.width,r=void 0===n?480:n,a=e.height,i=void 0===a?480:a,s=e.url,o=e.pos,c=void 0===o?"random":o,s){t.next=3;break}throw"请传入图片url";case 3:return t.next=5,this._addImageProcess({url:s,width:r,height:i});case 5:u=t.sent,d=this._randomFromTo(0,parseInt(this._canvas.style.width)),h=this._randomFromTo(0,parseInt(this._canvas.style.height)),l=new S(d,h,u),"random"===c&&this._drawItemList.push(l),"click"===c&&this._clickToAdd.push(l),"random"===c&&this.drawItemList();case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"_addTextBase",value:function(t){var e=t.x,n=t.y,r=t.text,a=t.font,i=t.pos,s=void 0===i?"random":i,o=t.isTransParent;this._ctx.font=a;var c=this._ctx.measureText(r).width,u=parseFloat(a.replace(/[^0-9]/gi,"")),d=new A(e,n,c,u,a,r,o);return"random"===s&&this._drawItemList.push(d),"click"===s&&this._clickToAdd.push(d),d}},{key:"addText",value:function(t){if(!t.text)throw"请输入文字";var e=this._randomFromTo(0,parseInt(this._canvas.style.width)),n=this._randomFromTo(0,parseInt(this._canvas.style.height));this._addTextBase(Object(T["a"])(Object(T["a"])({},t),{},{x:e,y:n})),"random"===t.pos&&this.drawItemList()}},{key:"addDate",value:function(t){if(!t.date)throw"请选择日期";for(var e=t.date.split(" "),n=this._randomFromTo(0,parseInt(this._canvas.style.width)),r=this._randomFromTo(0,parseInt(this._canvas.style.height)),a=0;a<e.length;a++){var i=this._addTextBase(Object(T["a"])(Object(T["a"])({},t),{},{x:n,y:r,text:e[a]}));n+i.width+20<parseInt(this._canvas.style.width)&&(n=n+i.width+20)}"random"===t.pos&&this.drawItemList()}},{key:"getDrawItemList",value:function(){return this._drawItemList}},{key:"getDrawCanvas",value:function(){return this.drawItemList(!1),this._canvas}},{key:"deleteChooseItem",value:function(){var t=this._drawItemList.findIndex((function(t){return t.isSelected}));t===this._moveIndex&&(this._moveIndex=-1),this._drawItemList=this._drawItemList.filter((function(t){return!t.isSelected})),this.drawItemList()}}]),t}(),$={data:function(){return{canvasArray:[],baseCanvasImages:[]}},methods:{getTheMeragePdf:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=new P["a"]("p","pt","a4"),e.next=3,t.getThePdfImages();case 3:for(r=e.sent,a=0;a<r.length;a++)i=r[a],n.addImage(i.url,"JPEG",0,0,592.28,592.28/i.width*i.height),t.canvasArray[a]&&(s=t.canvasArray[a].getDrawCanvas(),o=s.toDataURL("image/png"),n.addImage(o,"PNG",0,0,592.28,592.28/s.width*s.height)),a<r.length-1&&n.addPage();return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))()},downLoadPdf:function(){var t=arguments,e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:"pdf合成",n.next=3,e.getTheMeragePdf();case 3:a=n.sent,a.save(r);case 5:case"end":return n.stop()}}),n)})))()},pdfToBase64:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getTheMeragePdf();case 2:return n=e.sent,e.abrupt("return",n.output("datauristring"));case 4:case"end":return e.stop()}}),e)})))()},getThePdfImages:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=Array(t.total).fill(1/0),r=0;case 2:if(!(r<n.length)){e.next=13;break}if(!t.baseCanvasImages[r]){e.next=7;break}n[r]=t.baseCanvasImages[r],e.next=10;break;case 7:return e.next=9,t.$refs.page.drawPage(t.pdf.getPage(r+1));case 9:n[r]=e.sent;case 10:r++,e.next=2;break;case 13:return e.abrupt("return",n);case 14:case"end":return e.stop()}}),e)})))()},handleFinishDraw:function(t){var e=this.current-1;if(this.baseCanvasImages[e]={url:t.toDataURL("image/jpeg"),width:t.width,height:t.height},!this.canvasArray[e]){var n=t.getBoundingClientRect(),r=n.width,a=n.height,i=this.setDrawCanvas(t);this.canvasArray[e]=new E(i,e,t.width/r,t.height/a)}this.canvasArray[e].drawItemList()},setDrawCanvas:function(t){var e=this.$refs.drawCanvas;return e.width=t.width,e.height=t.height,e.style.width=t.style.width,e.style.height=t.style.height,e},getIsDragging:function(){var t=this.current-1;return this.canvasArray[t].getIsDragging()},addSeal:function(t){var e=t.pos,n=void 0===e?"random":e,r=t.width,a=t.height,i=t.url,s=this.current-1;this.canvasArray[s].addSeal({width:r,height:a,url:i,pos:n})},deleteItem:function(){var t=this.current-1;this.canvasArray[t].deleteChooseItem()},addDate:function(t){var e=t.pos,n=void 0===e?"random":e,r=t.date,a=t.isTransParent,i=t.fontSize;if(null===this.date)throw"请选择日期插入";var s=this.current-1;this.canvasArray[s].addDate({date:r,isTransParent:a,font:"".concat(i,"px serif"),pos:n})},addText:function(t){var e=t.pos,n=void 0===e?"random":e,r=t.text,a=t.isTransParent,i=t.fontSize,s=this.current-1;this.canvasArray[s].addText({text:r,isTransParent:a,font:"".concat(i,"px serif"),pos:n})}}},M=(n("3ca3"),n("ddb0"),[]);function Y(t,e){return X.apply(this,arguments)}function X(){return X=Object(c["a"])(regeneratorRuntime.mark((function t(e,n){var r,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,z();case 2:r=t.sent,a=regeneratorRuntime.mark((function t(a){var i,s,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=document.createElement("canvas"),i.width=e[a].width,i.height=e[a].height,t.next=5,B(e[a]);case 5:s=t.sent,i.getContext("2d").drawImage(s,0,0,i.width,i.height),n[a]&&i.getContext("2d").drawImage(n[a].getDrawCanvas(),0,0,i.width,i.height),o=i.toDataURL("image/png"),c=document.createElement("img"),c.src=o,M.push(new Promise((function(t){c.onload=function(){r.appendChild(c),t()}})));case 12:case"end":return t.stop()}}),t)})),i=0;case 5:if(!(i<e.length)){t.next=10;break}return t.delegateYield(a(i),"t0",7);case 7:i++,t.next=5;break;case 10:document.body.appendChild(r),Promise.all(M).then((function(){window.print(),H()}));case 12:case"end":return t.stop()}}),t)}))),X.apply(this,arguments)}function B(t){return F.apply(this,arguments)}function F(){return F=Object(c["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.url){t.next=2;break}return t.abrupt("return",null);case 2:return t.abrupt("return",new Promise((function(t,n){var r=new Image(e.width,e.height);r.crossOrigin="anonymous",r.onload=function(){return t(r)},r.onerror=n,r.src=e.url})));case 3:case"end":return t.stop()}}),t)}))),F.apply(this,arguments)}function z(){return V.apply(this,arguments)}function V(){return V=Object(c["a"])(regeneratorRuntime.mark((function t(){var e,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=document.createElement("div"),e.setAttribute("id","print-container"),n="\n    #print-container {\n        display: none;\n    }\n    @supports ((size:A4) and (size:1pt 1pt)) {\n        @page { \n            size: 592.28pt 841.89pt; \n        }\n    }\n    @media print {\n        body > :not(.print-container) {\n            display: none;\n        }\n        html,\n        body {\n            margin: 0;\n            display: block !important;\n        }\n\n        #print-container {\n            width: 100%\n            height: 100%;\n            display: block !important ;\n            overflow: visible;\n            page-break-after: always;\n            page-break-inside: avoid;\n        }\n        #print-container img {\n            width: 100%\n        }\n    }\n    @media screen {\n        body{\n            margin:0\n        }\n    }\n    ",r=document.createElement("style"),r.innerHTML=n,e.appendChild(r),t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)}))),V.apply(this,arguments)}function H(){var t=document.getElementById("print-container");t&&document.querySelector("body").removeChild(t)}var N={props:{pdfPath:{type:String,default:""},pdfHeight:{type:Number},pdfWidth:{type:Number,default:1200},loadingText:{type:String,default:"正在加载中"},errorText:{type:String,default:"加载PDF失败"}},mixins:[$],components:{Page:k,PageTurner:g},data:function(){return{current:1,rotateArray:[],isPdfLoading:!1,pdf:null,transform:{clientX:0,clientY:0}}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getPdfData();case 2:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){this.cleanPrint()},watch:{},methods:{print:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==t.total){e.next=2;break}return e.abrupt("return",0);case 2:return e.next=4,t.getThePdfImages();case 4:n=e.sent,Y(n,t.canvasArray);case 6:case"end":return e.stop()}}),e)})))()},saveRotate:function(t){var e=this,n=this.rotateArray.findIndex((function(t){return t.current===e.current}));-1!=n?this.rotateArray[n].rotate=t:this.rotateArray.push({current:JSON.parse(JSON.stringify(this.current)),rotate:t})},rotate:function(t){"left"===t&&this.$refs.page.rotateLeft(),"right"===t&&this.$refs.page.rotateRight()},cleanPrint:function(){var t=document.getElementById("printContainer");t&&document.querySelector("body").removeChild(t)},handleZoom:function(t){this.$refs.page.handleZoom(t)},handleMouseDown:function(t){var e=this;if(!this.getIsDragging()){this.transform={clientX:t.clientX,clientY:t.clientY};var n=this;this._dragHandler=function(t){var n=e.transform,r=n.clientX,a=n.clientY,i=e.$refs.pdfBody,s=i.scrollTop,o=i.scrollLeft,c=t.clientX-r,u=t.clientY-a;Math.abs(c)>20&&(e.$refs.pdfBody.scrollLeft=o-(c>0?20:-20)),Math.abs(u)>20&&(e.$refs.pdfBody.scrollTop=s-(u>0?20:-20))},this._stopHandler=function(){window.removeEventListener("mousemove",n._dragHandler),window.removeEventListener("mouseup",n._stopHandler)},window.addEventListener("mousemove",n._dragHandler),window.addEventListener("mouseup",n._stopHandler)}},getPdfData:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.pdfPath,t.isPdfLoading=!0,e.next=4,C.a.getDocument({url:n});case 4:t.pdf=e.sent,t.isPdfLoading=!1;case 6:case"end":return e.stop()}}),e)})))()}},computed:{total:function(){return this.pdf?this.pdf.numPages:0},currentPage:function(){return this.pdf?this.pdf.getPage(this.current):null},pageRotate:function(){var t=this,e=this.rotateArray.find((function(e){return e.current===t.current}));return e?e.rotate:0},isPdfError:function(){return!this.pdfPath||!this.isPdfLoading&&!this.pdf},pdfContent:function(){return{width:this.pdfWidth+"px",height:this.pdfHeight+"px"}}}},U=N,W=(n("952a"),Object(f["a"])(U,s,o,!1,null,null,null)),Z=W.exports,J={data:function(){return{pdfPath:"./test.pdf"}},components:{pdfView:Z},methods:{handleAddSeal:function(t){this.$refs.pdfView.addSeal({pos:t,width:200,height:200,url:"./seal.png"})},handleAddDate:function(t,e){this.$refs.pdfView.addDate({pos:t,date:"2109 09 18",fontSize:24,isTransParent:e})},handleAddText:function(t,e){this.$refs.pdfView.addText({pos:t,isTransParent:e,fontSize:24,text:"样例展示"})},deleteChooseItem:function(){this.$refs.pdfView.deleteItem()},handleDownload:function(){this.$refs.pdfView.downLoadPdf("合成pdf")}}},q=J,G=(n("034f"),Object(f["a"])(q,a,i,!1,null,null,null)),K=G.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(K)}}).$mount("#app")},"85ec":function(t,e,n){},"952a":function(t,e,n){"use strict";n("c2fb")},"9dd0":function(t,e,n){},c2fb:function(t,e,n){},ca38:function(t,e,n){}});
//# sourceMappingURL=app.9fd4ac31.js.map