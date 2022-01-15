var mobileMenu = document.getElementById("top--nav--mobile-menu");

var mobileMenuLogo = document.getElementById("top--nav--logo--menu");

/*var btn = document.getElementById("top--nav--menu-btn");

var img = document.getElementsByClassName("top--nav--close")[0];*/

/*btn.onclick = function() {
    mobileMenu.style.display = "block";
}

img.onclick = function() {
    mobileMenu.style.display = "none";
}*/
/*function showMenu() {
    if (mobileMenu.style.display === "block") {
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "block"
    }
}

img.onclick = function() {
    mobileMenu.style.display = "none";
}*/

function showMenu() {
    if (mobileMenu.className === "top--nav--content") {
      mobileMenu.className += " responsive";
      mobileMenuLogo.className += " filter-logo";
    }
  }

  function closeMenu() {
      mobileMenu.className = "top--nav--content";
      mobileMenuLogo.className = "top--nav--logo";
  }