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