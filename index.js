const nav_links = document.querySelector(".nav-links");
const xmark = document.querySelector(".fa-xmark");
const bars = document.querySelectorAll(".fa-bars");
function show_navbar(){
    nav_links.style.right="0px";
}
function close_navbar(){
    nav_links.style.right="-400px";
}
// bars.addEventListener('click',()=>{
// nav_links.style.transform
// })
// bars.addEventListner('click',()=>{
//     nav_links.style.right="-250px";
// });
