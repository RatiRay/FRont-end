    @	  	   ??	  P ? ? ?	U S B   C o r p o r a t i o n                               F l a s h   D i s k                                         "S C Y 0 0 0 0 0 0 0 0 7 9 5 8 5                                             
    @ 	   ??	  P ?@ ?@ ? ?smiUSB     Flash Disk      1100                  <? ????(2?? ?? (_   0P      ?  f11? H  ?                @iR0329V1D  ,    f;z 	#Item.style.display = 'flex';
                btns[1].classList.remove('active')
                btns[2].classList.remove('active')
                btns[3].classList.remove('active')
                btns[4].classList.remove('active')

                btns[0].classList.add('active')

            }
            else {
                btns[0].classList.remove('active');

                if(blogItem.classList.contains(filter)){
                    blogItem.style.display = 'flex';
                   
                
                if(btns[1] === e.target){
                    btns[1].classList.add('active');
                }
                
                else{
                    btns[1].classList.remove('active');
                }

                if(btns[2] === e.target){
                    btns[2].classList.add('active');
                } 
                else{
                    btns[2].classList.remove('active');

                }

                if(btns[3] === e.target){
                    btns[3].classList.add('active');
                }
                else{
                    btns[3].classList.remove('active');
                }

                if(btns[4] === e.target){
                    btns[4].classList.add('active');
                } 
                else{
                    btns[4].classList.remove('active');
                }}

                else{
                    blogItem.style.display = 'none';
                }
            }
        })
    })
}

// searchfilter

const search = document.querySelector('#search');
search.addEventListener('keyup', (e) => {
    e.preventDefault()
    const searchValue = search.value.toLowerCase().trim();
    console.log(searchValue)

    // loop through blog cartegory

    for ( let i = 0; i < blogItems.length; i++) {
        if(blogItems[i].classList.contains(searchValue)){
            blogItems[i].style.display = 'flex'; 
      } 
       if(searchValue === ""){
        blogItems[i].style.display ='flex';
      }
      else{
        blogItems[i].style.display = 'none';
      }
    }
})