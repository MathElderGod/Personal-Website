// This Java script file expands the hamburger menu, and turns it to an x when expanded
// This functionality toggles back to its original state when touched. 

function expandHamburgerMenu() {
    var navBarElements = document.querySelectorAll(".nav-content");
    navBarElements.forEach(function(element) {
        element.classList.toggle("show");
    });
    const hamburgerMenuElement = document.getElementById("hamburger-menu");
    hamburgerMenuElement.classList.toggle("hamburger-x");
}
const hamburgerMenuContainerElement = document.getElementById("hamburger-menu-container");
hamburgerMenuContainerElement.addEventListener("touchend", expandHamburgerMenu);
