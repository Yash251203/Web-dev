var bts = document.querySelectorAll('button')
var body = document.querySelector('body')

bts.forEach(function(elem){
    elem.addEventListener('click',function(){
        body.style.backgroundColor = elem.innerHTML
    // console.log(elem);
    })
})