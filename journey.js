function redirectToPage(page) {
    window.location.href = page
}

// "START"
var start_button = document.getElementById('startButton');
var start_txt = document.getElementById('startTxt');
var start_img = document.getElementById('startImg');

start_button.addEventListener("click", function () {
    if (start_txt.style.display === "none" && start_img.style.display === "none"){
        start_txt.style.display = "block";
        start_img.style.display = "block";
    } else {
        start_txt.style.display = "none";
        start_img.style.display = "none";
    }

});

// "VISUALS"
var visuals_button = document.getElementById('visualsButton');
var visuals_txt = document.getElementById('visualsTxt');
var visuals_img = document.getElementById('visualsImg');

visuals_button.addEventListener("click", function () {
    if (visuals_txt.style.display === "none" && visuals_img.style.display === "none") {
        visuals_txt.style.display = "block";
        visuals_img.style.display = "block";
    } else {
        visuals_txt.style.display = "none";
        visuals_img.style.display = "none";
    }
});

// "PLANNING"
var planning_button = document.getElementById('planningButton');
var planning_txt = document.getElementById('planningTxt');
var planning_img = document.getElementById('planningImg');

planning_button.addEventListener("click", function () {
    if (planning_txt.style.display === "none" && planning_img.style.display === "none") {
        planning_txt.style.display = "block";
        planning_img.style.display = "block";
    } else {
        planning_txt.style.display = "none";
        planning_img.style.display = "none";
    }
});

// "SUMMARY"
var summary_button = document.getElementById('summaryButton');
var summary_txt = document.getElementById('summaryTxt');
var summary_img = document.getElementById('summaryImg');

summary_button.addEventListener("click", function () {
    if (summary_txt.style.display === "none" && summary_img.style.display === "none") {
        summary_txt.style.display = "block";
        summary_img.style.display = "block";
    } else {
        summary_txt.style.display = "none";
        summary_img.style.display = "none";
    }
});
