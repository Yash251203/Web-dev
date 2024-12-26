var h = document.querySelector(".circle")
var buttn = document.querySelector(".btn")

var flag = 1
buttn.addEventListener('click',() => {
    if(flag === 1 ){
        h.style.backgroundColor = "yellow"
        flag = 0
    }
    else{
        h.style.backgroundColor = "white"
        flag = 1
    }
})

