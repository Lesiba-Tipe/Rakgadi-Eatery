

//$(document).ready(function(){})

const primary_nav = document.querySelector(".primary-navigation");
const mobile_nav_toogle = document.querySelector(".mobile-nav-toogle");

mobile_nav_toogle.addEventListener("click", () => {

  const visibility = primary_nav.getAttribute('data-visible')

  if(visibility === "true"){
    primary_nav.setAttribute("data-visible", false)
    mobile_nav_toogle.setAttribute("aria-expanded", false)
  }else{
    primary_nav.setAttribute("data-visible",true);
    mobile_nav_toogle.setAttribute("aria-expanded", true)
  }
})

const buttons = document.querySelectorAll(".btn_nav");

 buttons.forEach(btn => {

  btn.addEventListener("click", () => {
    primary_nav.setAttribute("data-visible", false)
    mobile_nav_toogle.setAttribute("aria-expanded", false)
  })

});

 const div_dev_contentElement = document.getElementById('developer');

 const dev_contentElement = '<p> Developed by: <span href="https://tipegraphics.co.za/" >Tipe Graphics</span>   | '+ new Date().getFullYear() + ' | &copy; Copyright reserved<p/>'

 div_dev_contentElement.innerHTML += dev_contentElement

  