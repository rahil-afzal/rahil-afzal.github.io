const nav =document.querySelector('.navbar'),
    navlist=nav.querySelectorAll('li'),
    totalnavlist=navlist.length;
    for(let i=0; i<totalnavlist; i++)
        {
            const a =navlist[i].querySelector("a");
            a.addEventListener('click',function(){
                this.classList.add("active")
            }
            
            )
        }