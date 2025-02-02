// This Java script file expands the hamburger menu, and turns it to an x when expanded
// This functionality toggles back to its original state when touched. 

function expandHamburgerMenu(event) {
    event.preventDefault(); // Prevents weird touch behavior
    event.stopPropagation(); // Prevents event bubbling issues

    var navBarElements = document.querySelectorAll(".nav-content");
    navBarElements.forEach(function (element) {
        element.classList.toggle("show");
    });

    const hamburgerMenuElement = document.getElementById("hamburger-menu");
    hamburgerMenuElement.classList.toggle("hamburger-x");
}

// Use both `click` and `touchend` for better responsiveness
const hamburgerMenuElement = document.getElementById("hamburger-menu");
hamburgerMenuElement.addEventListener("click", expandHamburgerMenu);
hamburgerMenuElement.addEventListener("touchend", expandHamburgerMenu);
