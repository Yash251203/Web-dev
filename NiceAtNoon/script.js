var logo = document.querySelector('.logo')
var logo2 = document.querySelector('.logo2')

var grow = 0

setInterval(function(){
    grow++
    logo.style.rotate = grow + 'deg'
    logo2.style.rotate = grow + 'deg'
},2)



