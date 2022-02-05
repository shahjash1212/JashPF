const navSlider = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');

//TOGGEL BAR
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

navlinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = '';
        }
        else{
            link.style.animation = `navLinksFade 0.5s ease forwards ${index/7+0.3}s`
        }
    
        });

        //BURGER ANIMATION
        burger.classList.toggle('toggle');
    }); 
}
navSlider();

const headding  = document.getElementsByTagName('h1');
console.log(headding);