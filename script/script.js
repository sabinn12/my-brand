let menuBtn = document.getElementById("menu");
let links = document.getElementById("links");

menuBtn.addEventListener("click", function () {
    if (links.classList.contains('responsive')) {
        links.classList.add('closing');
        links.addEventListener('animationend', function () {
            links.classList.remove('responsive', 'closing');
        }, { once: true });
    } else {
        links.classList.add('responsive');
    }
    menuBtn.classList.toggle('fa-times');
});


// year footer

document.getElementById('year').textContent = new Date().getFullYear();
