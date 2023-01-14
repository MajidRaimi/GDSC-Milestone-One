const burger = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');
const home = document.querySelector('#home');
const about = document.querySelector('#about');
const services = document.querySelector('#services');
const contact = document.querySelector('#contact');


burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    }else if(menu.classList.contains('md:hidden')){
        menu.classList.remove('md:hidden')
    }
    else{
        menu.classList.add('hidden')
    }
} )


home.addEventListener('click', () => {
    menu.classList.add('hidden')
})


about.addEventListener('click', () => {
    menu.classList.add('hidden')
})


services.addEventListener('click', () => {
    menu.classList.add('hidden')
})


contact.addEventListener('click', () => {
    menu.classList.add('hidden')
})



document.addEventListener("DOMContentLoaded", function(){
    let bar = document.getElementById('c++');
    bar.classList.remove('w-0');
    bar.classList.add('w-20');
});

document.addEventListener("DOMContentLoaded", function(){
    let bar = document.getElementById('css');
    bar.classList.remove('w-0');
    bar.classList.add('w-20');
});

document.addEventListener("DOMContentLoaded", function(){
    let bar = document.getElementById('html');
    bar.classList.remove('w-0');
    bar.classList.add('w-10');
});

document.addEventListener("DOMContentLoaded", function(){
    let bar = document.getElementById('java');
    bar.classList.remove('w-0');
    bar.classList.add('w-30');
});

document.addEventListener("DOMContentLoaded", function(){
    let bar = document.getElementById('python');
    bar.classList.remove('w-0');
    bar.classList.add('w-20');
});

document.addEventListener("DOMContentLoaded", function(){
    let bar = document.getElementById('flutter');
    bar.classList.remove('w-0');
    bar.classList.add('w-10');
});




