const menuBtn = document.querySelector(".menu_btn");
const menu = document.querySelector(".menu");
const mouseStalker = document.querySelector(".mouse_stalker") 
console.log(menuBtn,menu);
// let count =1;

menuBtn.addEventListener("click",()=>{
  console.log("a");
  menuBtn.classList.toggle("active")
  menu.classList.toggle("open")
})

document.addEventListener('mousemove',function(event){
  mouseStalker.style.transform = 'translate('+ event.clientX+'px,'+ event.clientY +'px)'
})
