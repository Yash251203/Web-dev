const users = [
    {
      name: "Alice Johnson",
      profileImage: "https://images.unsplash.com/photo-1734312621516-3d258db95e76?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "5 min ago",
      coverPhoto: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Bob Smith",
      profileImage: "https://images.unsplash.com/photo-1732923323323-8d2e805661df?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "10 min ago",
      coverPhoto: "https://images.unsplash.com/photo-1730292422392-ebe05786caa7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Charlie Brown",
      profileImage: "https://images.unsplash.com/photo-1675663345944-9440812025c3?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "15 min ago",
      coverPhoto: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Diana Prince",
      profileImage: "https://plus.unsplash.com/premium_photo-1734413233859-b288d00f7e36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      time: "20 min ago",
      coverPhoto: "https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Alice Johnson",
        profileImage: "https://imgs.search.brave.com/4bI_HQQ8QE6DpjZcjEKUZ6e41jcHmuLv7oqB_FUulbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1L2Ri/L2IwLzc1ZGJiMGFk/YTVhM2RjOWIxNDhl/NmEzYTEyMWUzZTdm/LmpwZw",
        time: "5 min ago",
        coverPhoto: "https://images.unsplash.com/photo-1734366965512-0f7ec347ab36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Bob Smith",
        profileImage: "https://plus.unsplash.com/premium_photo-1734218351052-924f089b80c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "10 min ago",
        coverPhoto: "https://images.unsplash.com/photo-1730196564080-af720561900d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Charlie Brown",
        profileImage: "https://images.unsplash.com/photo-1733371001616-0341f62c56c1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "15 min ago",
        coverPhoto: "https://images.unsplash.com/photo-1733407826766-6361c7c1ea24?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        name: "Diana Prince",
        profileImage: "https://images.unsplash.com/photo-1733036432312-3b79aacf185e?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        time: "20 min ago",
        coverPhoto: "https://images.unsplash.com/photo-1733036432312-9db8f19fad01?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      }
  ];


var sum = ``;

users.forEach(function(elem,idx){
    sum = sum + `<div id=${idx} class="status">
                <img src="${elem.profileImage}" alt="">
                <div class="status-1">
                    <h4>${elem.name}</h4>
                    <h5>${elem.time}</h5>
                </div>
            </div>`
})


var allstatuss = document.querySelector('.allstatus')

allstatuss.innerHTML = sum;

var full = document.querySelector('.full')
var status = document.querySelector('.status')
var growth = document.querySelector('.growth')
var fullUser = document.querySelector('.fullUser')

allstatuss.addEventListener('click' , function(dets){
  var grow = 0
  var inter = setInterval(function(){
    grow++

    growth.style.width = grow +'%'

  },30)
  var gold = users[dets.target.id];
  

  full.style.display = "block"
  full.style.backgroundImage = `url(${gold.coverPhoto})`
  fullUser.innerHTML = gold.name
  
  setTimeout(() => {
    full.style.display = 'none'
    clearInterval(inter)
  },3000);
  
})