var btn = document.querySelector(".btn")
var h = document.querySelector(".name")

var flag = 0
btn.addEventListener('click',()=>{
    if(flag === 0){
        h.innerHTML = "Request Sending..."
        h.style.color = "orange"
        btn.innerHTML = "Adding..."

        setTimeout(()=>{
            h.innerHTML = "FRIENDS"
            h.style.color = "green"
            btn.innerHTML = "Remove Friend"
        },2000)
        
        flag =1
    }
    else{
        h.innerHTML = "STRANGER"
        h.style.color = "red"
        btn.innerHTML = "Add friend"

        flag = 0
    }
})