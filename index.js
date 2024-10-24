// This Java script file expands the hamburger menu, and turns it to an x when expanded
// This functionality toggles back to its original state when touched. 

function expandHamburgerMenu() {
    var navBarElements = document.querySelectorAll(".nav-content");
    navBarElements.forEach(function(element) {
        element.classList.toggle("show");
    });
    hamburgerMenuElement.classList.toggle("hamburger-x");
}
const hamburgerMenuElement = document.getElementById("hamburger-menu");
hamburgerMenuElement.addEventListener("click", expandHamburgerMenu);
hamburgerMenuElement.addEventListener("touchend", expandHamburgerMenu);
