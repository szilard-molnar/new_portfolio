// When user clicks the mouse icon, it snaps down to the next section
function snapDown() {
    let secondSection = document.getElementById("second-section");
    secondSection.scrollIntoView({
        behavior: 'smooth'
    });
}