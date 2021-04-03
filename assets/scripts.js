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
function checkCards() {
    let centerCard = document.getElementById("card-2");
    let rightCard = document.getElementById("card-3"); 
    let leftCard = document.getElementById("card-1");

    let bounding = centerCard.getBoundingClientRect();
    
    if(bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
        centerCard.classList.add("center-card-comes-in");
        centerCard.classList.remove("not-visible");

        rightCard.classList.add("right-card-comes-in");
        rightCard.classList.remove("not-visible");

        leftCard.classList.add("left-card-comes-in");
        leftCard.classList.remove("not-visible");
    }
}

document.addEventListener("scroll", function() {
    checkCards();
});

///////////////////////////////////////////////////////////////////
function changeNavBar() {
    let navBar = document.querySelector("nav");
    if(window.scrollY >= window.innerHeight) {
        navBar.classList.remove("navbar-transparent");
        navBar.classList.add("navbar-colored");
        document.querySelector(".navbar-left h2").classList.add("navbar-colored-text");
        document.querySelector("#about-link").classList.add("navbar-colored-text");
        document.querySelector("#portfolio-link").classList.add("navbar-colored-text");
        document.querySelector("#contact-link").classList.add("navbar-colored-text");
    }
    else if(window.scrollY < window.innerHeight)
    {
        navBar.classList.remove("navbar-colored");
        navBar.classList.add("navbar-transparent");
        document.querySelector(".navbar-left h2").classList.remove("navbar-colored-text");
        document.querySelector("#about-link").classList.remove("navbar-colored-text");
        document.querySelector("#portfolio-link").classList.remove("navbar-colored-text");
        document.querySelector("#contact-link").classList.remove("navbar-colored-text");
    }
}

window.addEventListener("scroll", function() {
    changeNavBar();
});