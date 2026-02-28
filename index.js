const filterInput = document.querySelector('#filterInput');
    const items       = document.querySelectorAll('#filterList li');
    filterInput.addEventListener('input', function(){
    const finput = filterInput.value.toLowerCase();
  
    //with for loop
    // for (i = 0; i <= items.length; i++){
    //     const loopItems = items[i].textContent.toLowerCase(); 
    //     if (loopItems.includes(finput)){
    //         items[i].classList.remove('hidden')
    //     }else{
    //         items[i].classList.add('hidden');
    //     }
    // }

    //with for each loop
    items.forEach(function(item){
        const taskItems = item.textContent.toLowerCase();
          if (taskItems.includes(finput)){
            item.classList.remove('hidden')
        }else{
            item.classList.add('hidden');
        }
    })
    })
 