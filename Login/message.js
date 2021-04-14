let hamburgerIcon = document.querySelector(".hamburger-icon");
let sideBar = document.querySelector(".online-preview-container");
let backdrop = document.querySelector(".backdrop");
let senderMessageContainer = document.querySelectorAll(".sender-message-container");

senderMessageContainer = Array.from(senderMessageContainer);

hamburgerIcon.addEventListener("click" , () => {
    backdrop.classList.add("backdrop-active");
    sideBar.classList.add("online-preview-container-active");
})

backdrop.addEventListener("click" , () => {
    backdrop.classList.remove("backdrop-active");
    sideBar.classList.remove("online-preview-container-active");
})

senderMessageContainer.forEach(el => {
    el.style.left = `${300 - el.clientWidth}px`;
})