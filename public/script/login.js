let loginAlinks = document.querySelectorAll('.btn-primary');
loginAlinks.forEach((loginAlink) => {
loginAlink.addEventListener('click', (event)=>{
      event.preventDefault();
    })
})
let snsAlinks = document.querySelectorAll('.sns-login>a');
snsAlinks.forEach((snsAlink) => {
snsAlink.addEventListener('click', (event)=>{
      event.preventDefault();
    })
})

      