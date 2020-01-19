const toggler = document.querySelector('.toggler')
console.log('hi')
toggler.addEventListener('click',function(e){
    let tog = document.querySelector('.hidden');
    console.log(tog)

    // tog.classList.remove('right');
    // tog.classList.add('hidden');
    // tog.classList.add('right')  
    if (tog.style.display === "block") {
    tog.style.display = "none";
} else {
  tog.style.display = "block";
}
    
})