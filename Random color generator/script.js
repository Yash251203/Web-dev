var buttn2 = document.querySelector(".btn2")
var box = document.querySelector(".box")

buttn2.addEventListener('click',() => {
    var c1 = Math.floor(Math.random()*255)
    var c2 = Math.floor(Math.random()*255)
    var c3 = Math.floor(Math.random()*255)

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`

})

