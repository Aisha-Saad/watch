let menu =document.querySelector('#menu-icon')
let navList =document.querySelector('.navlist')

menu.onclick=() =>{
  menu.classList.toggle('ri-close-line')
  navList.classList.toggle('open')
}

window.onscroll=() =>{
  menu.classList.remove('ri-close-line')
  navList.classList.remove('open')
}