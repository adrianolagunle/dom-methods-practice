let bodyElement = document.querySelector("body")
bodyElement.append()

let buttonElement = document.createElement("button")
buttonElement.append("remove")
bodyElement.append(buttonElement)

let mainElement = document.createElement("main")
bodyElement.append(mainElement)

let imageElement = document.createElement("img")
imageElement.src = "https://vignette.wikia.nocookie.net/spiderman/images/a/ad/Peter_Parker_%28Earth-616%29_017.png/revision/latest/scale-to-width-down/340?cb=20150729001942" 
imageElement.className = "image"
mainElement.append(imageElement)

let anchorElement = document.createElement("a")
anchorElement.href = "https://www.google.com"
anchorElement.className = "link"
anchorElement.append("google.com")
mainElement.append(anchorElement)

buttonElement.addEventListener("click", function (){
    mainElement.remove()
})






