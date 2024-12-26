var cursor = document.querySelector(".cursor")
var h1 = document.querySelector("h1")
var body = document.querySelector("body")

body.addEventListener('mousemove',function(dets){
    cursor.style.left = dets.x +"px"
    cursor.style.top = dets.y +"px"
})

h1.addEventListener('mouseenter', function(){
    cursor.style.scale = 5
})

h1.addEventListener('mouseleave', function(){
    cursor.style.scale = 1
})