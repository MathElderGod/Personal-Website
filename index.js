// Toggles the mobile nav menu open/closed and updates the button's
// aria-expanded state so screen readers know whether the menu is open.

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.classList.toggle("open", isOpen);
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu after a link is tapped, so it doesn't stay open
// covering the page once the user has navigated somewhere.
navLinks.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        navLinks.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", false);
    }
});