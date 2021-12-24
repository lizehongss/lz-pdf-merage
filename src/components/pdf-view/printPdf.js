let allImg = []
export default async function printPdf(pdfImage, canvasArray){
    console.log(pdfImage);
    let printWin = await createElement()
    for(let i = 0; i<pdfImage.length; i++) {
        let canvas = document.createElement('canvas')
        canvas.width = pdfImage[i].width
        canvas.height = pdfImage[i].height
        let imageObject = await addImageProcess(pdfImage[i])
        canvas.getContext('2d').drawImage(imageObject, 0,0,canvas.width,canvas.height)
        if(canvasArray[i]) {
            canvas.getContext('2d').drawImage(canvasArray[i].getDrawCanvas(), 0,0,canvas.width,canvas.height)
        }
        let base64ImgSrc = canvas.toDataURL("image/png")
        const img = document.createElement("img")
        img.src = base64ImgSrc
        allImg.push(new Promise((resolve) => {
            img.onload = () => {
                printWin.appendChild(img)
                resolve()
            }
        }))
    }
    document.body.appendChild(printWin);
    Promise.all(allImg).then(() => {
        window.print();
        removeElement()
            
    })
}
async function addImageProcess(item) {
    if(!item.url) return null
    return new Promise((resolve, reject) => {
        let img = new Image(item.width, item.height)
        img.crossOrigin = 'anonymous',
        img.onload = () => resolve(img)
        img.onerror = reject
        img.src = item.url
    })
}
async function createElement () {
    let container = document.createElement("div")
    container.setAttribute("id", "print-container")
    let styleContent =`
    #print-container {
        display: none;
    }
    @supports ((size:A4) and (size:1pt 1pt)) {
        @page { 
            size: 592.28pt 841.89pt; 
            margin-top: 0.5cm;
            margin-bottom: 0.5cm;
        }
    }
    @media print {
        body > :not(.print-container) {
            display: none;
        }
        html,
        body {
            margin: 0;
            display: block !important;
        }

        #print-container {
            width: 100%
            height: 100%;
            display: block !important ;
            overflow: visible;
            page-break-after: always;
            page-break-inside: avoid;
        }
        #print-container img {
            width: 100%
        }
    }
    @media screen {
        body{
            margin:0
        }
    }
    `
    let style = document.createElement("style");
    style.innerHTML = styleContent;
    container.appendChild(style)
    return container
}
function removeElement() {
    let p = document.getElementById('print-container');
    if (p) {
        document.querySelector('body').removeChild(p);
    }
}