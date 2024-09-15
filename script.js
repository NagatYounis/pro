const bar = document.querySelector('.nav .fa-bars');
const close = document.querySelector('.nav-links .fa-x');
const links = document.querySelector('.nav-links');
bar.addEventListener('click' , ()=>{
links.classList.add('open');
})
close.addEventListener('click' , ()=>{
    links.classList.remove('open');
})