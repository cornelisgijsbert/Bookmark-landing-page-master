var mobileMenu = document.getElementById("top--nav--mobile-menu");

var btn = document.getElementById("top--nav--menu-btn");

var img = document.getElementsByClassName("top--nav--close")[0];

btn.onclick = function() {
    mobileMenu.style.display = "block";
}

img.onclick = function() {
    mobileMenu.style.display = "none";
}