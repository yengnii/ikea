const select = document.querySelector('#select_country');
select.addEventListener('click', function(event){
  // event.preventDefault();
   const current = event.target;
   let currentValue = current.getAttribute('data-value');
   console.log( currentValue );
   location.href = currentValue;
})