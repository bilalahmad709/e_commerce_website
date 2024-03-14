const bar= document.getElementById('hamburger_bar');
const nav= document.getElementById('nav_bar');

if(hamburger_bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}