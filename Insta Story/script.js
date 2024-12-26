var users = [
    {
      username: "tech_guru",
      dp: "https://images.unsplash.com/photo-1734312621516-3d258db95e76?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
        username: "wanderlust",
        dp: "https://images.unsplash.com/photo-1732923323323-8d2e805661df?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        story: "https://images.unsplash.com/photo-1730292422392-ebe05786caa7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    ,
    {
      username: "java_master",
      dp: "https://images.unsplash.com/photo-1675663345944-9440812025c3?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1721332155545-c7a8005a2581?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "foodie_fiesta",
      dp: "https://plus.unsplash.com/premium_photo-1734413233859-b288d00f7e36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1732647169576-49abfdef3348?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        username: "cycling_pro",
        dp: "https://imgs.search.brave.com/4bI_HQQ8QE6DpjZcjEKUZ6e41jcHmuLv7oqB_FUulbI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzc1L2Ri/L2IwLzc1ZGJiMGFk/YTVhM2RjOWIxNDhl/NmEzYTEyMWUzZTdm/LmpwZw",
        story: "https://images.unsplash.com/photo-1734366965512-0f7ec347ab36?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      username: "fitness_fanatic",
      dp: "https://plus.unsplash.com/premium_photo-1734218351052-924f089b80c5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story: "https://images.unsplash.com/photo-1730196564080-af720561900d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
  
  var sum = ``

  users.forEach(function(elem,idx){
    sum += `<div class="story">
                <img id=${idx} src="${elem.dp}" alt="">
                <h4>${elem.username}</h4>
            </div>`
  })

  var storiyan = document.querySelector('.storiyan')
  var full = document.querySelector('.full')
  var fullUser = document.querySelector('.full h2')
  
  var growth = document.querySelector('.growth')

  storiyan.innerHTML = sum

  storiyan.addEventListener('click',function(dets) {
    
    var gold = users[dets.target.id];
    
    var grow = 0;
    var inter = setInterval(function(){
      grow++
      growth.style.width = grow+ '%';
    },30)

    full.style.display = 'block'
    full.style.backgroundImage =`url(${gold.story})`
    fullUser.innerHTML = gold.username


    setTimeout(function(){
      full.style.display = 'none'
      clearInterval(inter)
    },3000)
    
  })





 var clutter = ``;

  users.forEach(function(elem){
    clutter += `<div class="uppost">
                <img class="profilepic" src="${elem.dp}" alt="">
                <div class="uppost-1">
                    <h3>${elem.username}</h3>
                    <h3><i class="ri-more-2-fill"></i></h3>
                </div>
            </div>

            <img class="newpost" src="${elem.story}" alt="">

            <div class="lowpost">
                <div class="lcs">
                    <i class="ri-heart-line"></i>
                    <i class="ri-chat-3-line"></i>
                    <i class="ri-send-plane-fill"></i>
                </div>
                <div class="lowpost-1">
                    <h4>${elem.username}</h4>
                    <h5>just here and there</h5>
                </div>
            </div>`;
  })


  var post = document.querySelector('.post')

  post.innerHTML = clutter;