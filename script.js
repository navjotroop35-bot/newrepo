// Show a welcome message when the page loads
window.onload = function () {
    console.log("Website Loaded Successfully!");
};

// Function for button click
function showMessage() {
    alert("Hello! Welcome to My Website.");
}

// Change heading color
function changeColor() {
    const heading = document.querySelector("h1");
    heading.style.color = "blue";
}

// Change background color
function changeBackground() {
    document.body.style.backgroundColor = "#dff9fb";
}

// Display current date and time
function showDateTime() {
    const now = new Date();
    document.getElementById("date").innerHTML =
        "Current Date & Time: " + now.toLocaleString();
}
