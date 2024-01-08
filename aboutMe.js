function redirectToPage(page) {
    window.location.href = page
}

var abtMeButton = document.getElementById('aboutMeButton');
var dispText = document.getElementById('displayedText');

abtMeButton.addEventListener("click", function() {
    if (dispText.style.display === "none") {
        dispText.style.display = "block";
    } else {
        dispText.style.display = "none";
    }
});