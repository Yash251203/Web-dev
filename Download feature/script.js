var btn = document.querySelector(".download")
var h1 = document.querySelector("h1")
var growth = document.querySelector(".growth")
var grow = 0

btn.addEventListener("click",function(){
    console.log("hello")
    var full = setInterval(() => {
        grow++
        h1.innerHTML = grow +"%"
        growth.style.width = grow + '%'
        btn.style.pointerEvents = 'none'
    }, 10);

    setTimeout(()=>{
        clearInterval(full)
    },1000)
    
})