// When user clicks the mouse icon, it snaps down to the next section
function snapDown() {
    let secondSection = document.getElementById("second-section");
    secondSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function snapToTop() {
    let firstSection = document.querySelector(".hero-section");
    firstSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function snapToAbout() {
    let secondSection = document.querySelector("#second-section");
    secondSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function snapToPortfolio() {
    let thirdSection = document.querySelector("#third-section");
    thirdSection.scrollIntoView({
        behavior: 'smooth'
    });
}

function snapToContact() {
    let fourthSection = document.querySelector("#fourth-section");
    fourthSection.scrollIntoView({
        behavior: 'smooth'
    });
}

let navBar = document.querySelector("nav");
window.addEventListener("scroll", function(e) {
    e.preventDefault();
    if(window.scrollTop <= 200) {
        // navBar.classList.remove("navbar-transparent");
        navBar.classList.add("navbar-colored");
    }
    else if(window.scrollTop > 200)
    {
        navBar.classList.remove("navbar-colored");
        // navBar.classList.add("navbar-transparent");
    }
});