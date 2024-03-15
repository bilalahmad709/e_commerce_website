const bar= document.getElementById('hamburger_bar');
const close= document.getElementById('close');
const nav= document.getElementById('nav_bar');

if(hamburger_bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}