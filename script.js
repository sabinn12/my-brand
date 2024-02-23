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

  /* js for sliders */
  document.getElementById('slideLeft').addEventListener('click', function() {
    document.querySelector('.blog-slider').scrollBy(-350, 0);
});

document.getElementById('slideRight').addEventListener('click', function() {
    document.querySelector('.blog-slider').scrollBy(350, 0);
});


// form validation 

