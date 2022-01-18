var mobileMenu = document.getElementById("top--nav--mobile-menu");

var mobileMenuLogo = document.getElementById("top--nav--logo--menu");

function showMenu() {
    if (mobileMenu.className === "top--nav--content") {
        mobileMenu.className += " responsive";
        mobileMenuLogo.className += " filter-logo";
    }
}
//-----------------------------------------------------------------------------
function closeMenu() {
    mobileMenu.className = "top--nav--content";
    mobileMenuLogo.className = "top--nav--logo";
}

// tab  menu
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab--content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
    console.log(tabcontent);
}
// get the element with the id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//-----------------------------------------------------------------------------
// faq
var acc = document.getElementsByClassName("faq--questions-header");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("faq--active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
        console.log(acc);
    });
}