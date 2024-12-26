var buttn3 = document.querySelector(".btn3")
var Players = document.querySelector(".Players")

var p = ['ABD','Kohli','Chris Gayle']

buttn3.addEventListener('click',() => {
    var num = Math.floor(Math.random()*p.length)

    Players.innerHTML = p[num]
})