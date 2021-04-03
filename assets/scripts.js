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

// functionality to pull off different animations on project chards
let centerCard = document.getElementById("card-2");
let rect = centerCard.getBoundingClientRect();
let viewWidth = window.innerWidth;
let viewHeight = window.innerHeight;

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

document.addEventListener("scroll", function() {
    if(isInViewport(centerCard)) {
        console.log("true");
    } else {
        console.log("false");
    }
});
///////////////////////////////////////////////////////////////////

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