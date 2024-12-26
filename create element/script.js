var btn = document.querySelector('.create')
var body = document.querySelector('body')
var grow = 0

btn.addEventListener('click', () => {
    var images = ['https://imgs.search.brave.com/4bI_HQQ8QE6DpjZcjEKUZ6e41jcHmuLv7oqB_FUulbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1L2Ri/L2IwLzc1ZGJiMGFk/YTVhM2RjOWIxNDhl/NmEzYTEyMWUzZTdm/LmpwZw',
        'https://imgs.search.brave.com/QwVtmo0pZCH2o21HMPoWCluPXucrqyCz4sp2rGJGjjI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMxLmNicmltYWdl/cy5jb20vd29yZHBy/ZXNzL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L3Vzb3Bw/LW9uZS1waWVjZS0x/MTg4Mjc2LTEyODB4/MC5qcGVn',
        'https://imgs.search.brave.com/LzuNmuPwKDJ64rRZzIDroJkF0GtSMGz4iKxcyXmJ8aY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc0LzBh/L2RlLzc0MGFkZWZi/YzMyNjk2YmQxYmJm/MWI4MzNkNzZkODk5/LmpwZw',
        'https://imgs.search.brave.com/yzEUaJnurNUaADxkVQIhlFcAV5K9UthjZbsWvZGBoic/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvbmFtaS1vbmUt/cGllY2UtcGljdHVy/ZXMteTQyZGRmaHoz/cjZzdWdmYy5qcGc',
        'https://imgs.search.brave.com/jeEdLarrW-QYs9JIDzzPlbc0pjU1QHo8yi9uwb2KIt0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMwLmdhbWVyYW50/aW1hZ2VzLmNvbS93/b3JkcHJlc3Mvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMTAv/T25lLVBpZWNlLTIu/anBn'
    ]

    var valueX = Math.random() * 80
    var valueY = Math.random() * 80
    var rotate = Math.random() * 360

    var img = document.createElement('img')
    img.setAttribute('src', images[Math.floor(Math.random() * images.length)])
    img.style.height = "100px"
    img.style.position = "absolute"
    img.style.left = valueX + "%"
    img.style.top = valueY + "%"
    img.style.rotate = rotate + "deg"
    img.style.borderRadius = '100px'

    body.appendChild(img)

})

