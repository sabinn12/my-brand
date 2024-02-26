/* Home or main content navbar */ 
let menuBtn = document.getElementById("menu");
let links = document.getElementById("links");

menuBtn.addEventListener("click", function(e){
    links.classList.toggle('responsive');
    menuBtn.classList.toggle('fa-x')
});
// blog sliders
var slider = document.getElementById('slider');
        var slides = Array.from(slider.children);
        var slideWidth = slides[0].getBoundingClientRect().width;
        var slideIndex = 0; // Define slideIndex globally

        function nextSlide() {
            slideIndex = (slideIndex + 1) % slides.length;
            slider.scrollTo({
                left: slideWidth * slideIndex,
                behavior: 'smooth'
            });
        }

        function prevSlide() {
            slideIndex = (slideIndex - 1 + slides.length) % slides.length;
            slider.scrollTo({
                left: slideWidth * slideIndex,
                behavior: 'smooth'
            });
        }


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

