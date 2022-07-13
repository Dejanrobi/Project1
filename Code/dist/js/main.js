//Targeting our DOM elements
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
let showMenu = false;

//adding an event Listner to the menu button
menuBtn.addEventListener("click",  toggleMenu);

//toggle Menu functon
function toggleMenu(){
  if(!showMenu){
    hamburger.classList.add("open");
    nav.classList.add("open");
    menuNav.classList.add("open");
    navItems.forEach((item)=>item.classList.add("open")); 
    showMenu = true;

  }else{
    hamburger.classList.remove("open");
    //CTRL + D selects same data
    nav.classList.remove("open");
    menuNav.classList.remove("open");
    navItems.forEach((item)=>item.classList.remove("open"));

    showMenu = false;
  }
}