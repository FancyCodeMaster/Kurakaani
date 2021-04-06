let hamburgerIcon = document.querySelector(".hamburger-icon");
let sideBar = document.querySelector(".online-preview-container");
let backdrop = document.querySelector(".backdrop");

hamburgerIcon.addEventListener("click" , () => {
    backdrop.classList.add("backdrop-active");
    sideBar.classList.add("online-preview-container-active");
})

backdrop.addEventListener("click" , () => {
    backdrop.classList.remove("backdrop-active");
    sideBar.classList.remove("online-preview-container-active");
})