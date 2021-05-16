let infoContainer = document.querySelector(".info-container");
let okButton = document.querySelector(".ok-button");
let body = document.querySelector("body");

// When window loads for the first time
window.addEventListener("load" , () => {
    if(sessionStorage.getItem("popup") !== "true") {
        infoContainer.style.transform = "translateY(0vh)";
        body.style.backgroundColor = "#ddd";
    }
    sessionStorage.setItem("popup" , "true");

})

// When ok button is clicked
okButton.addEventListener("click" , () => {
    infoContainer.style.transform = "translateY(-100vh)";
    body.style.backgroundColor = "#fff";
})