var body = document.querySelector('body')
var img1 = document.querySelector('.img1')
var img2 = document.querySelector('.img2')
var btn = document.querySelector('.swap')
var grow = 0

btn.addEventListener('click', () => {
    var img1src = img1.getAttribute('src')
    var img2src = img2.getAttribute('src')

    img1.setAttribute('src', img2src)
    img2.setAttribute('src', img1src)
})


