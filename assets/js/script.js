let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .flex .navbar');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');
}


// nav bar sticky
$(window).scroll(function(){
 
   // scroll-up button show/hide script
   if(this.scrollY > 500){
       $('.scroll-up-btn').addClass("show");
   }else{
       $('.scroll-up-btn').removeClass("show");
   }
 });
 
 $('.scroll-up-btn').click(function(){
 $('html').animate({scrollTop: 0});
 // removing smooth scroll on slide-up button click
 $('html').css("scrollBehavior", "auto");
 });