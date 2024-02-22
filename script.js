/* Home or main content navbar */ 
let menuBtn = document.getElementById("menu");
let links = document.getElementById("links");

menuBtn.addEventListener("click", function(e){
    links.classList.toggle('responsive');
    menuBtn.classList.toggle('fa-x')
});

/* dashboard navbar */


function openNav() {
    document.getElementById("side").style.width = "230px";
    document.getElementById("main").style.marginLeft = "230px";
  }
  
  function closeNav() {
    document.getElementById("side").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }