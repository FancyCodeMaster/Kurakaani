let hamburgerIcon = document.querySelector(".hamburger-icon");
let sideBar = document.querySelector(".online-preview-container");
let backdrop = document.querySelector(".backdrop");
let senderMessageContainer = document.querySelectorAll(".sender-message-container");
let userMessageContainer = document.querySelector(".user-messages-container");
let userInfo = document.querySelectorAll(".user-info");
let messageSection = document.querySelector(".message-section");
let userTitleContainer = document.querySelector(".user-title-container");
let enterMessageContainer = document.querySelector(".enter-message-container");



senderMessageContainer = Array.from(senderMessageContainer);

hamburgerIcon.addEventListener("click" , () => {
    backdrop.classList.add("backdrop-active");
    sideBar.classList.add("online-preview-container-active");
})

backdrop.addEventListener("click" , () => {
    backdrop.classList.remove("backdrop-active");
    sideBar.classList.remove("online-preview-container-active");
})

// for first load
senderMessageContainer.forEach(el => {
    el.style.left = `${(userMessageContainer.clientWidth - 20) - el.clientWidth}px`;
})

// After each resizing
window.addEventListener("resize" , () => {
    // To arrange sender message at the right
    senderMessageContainer.forEach(el => {
    el.style.left = `${(userMessageContainer.clientWidth - 20) - el.clientWidth}px`;
    })

    // To manage the height of userMessageContainer
    userMessageContainer.style.height = `${messageSection.clientHeight - userTitleContainer.clientHeight - enterMessageContainer.clientHeight}px`;
})

// When we click the user message title
userInfo = Array.from(userInfo);
userInfo.forEach((el , ind) => {
    el.addEventListener("click" , () => {
        for(let i=0 ; i<userInfo.length ; i++)
            {
                if(ind!==i)
                    {
                        userInfo[i].style.backgroundColor = "#dddddd";
                    }
            }
        el.style.backgroundColor = "#fff";
    })
})

// To select first friend's message immediately after the page loads
window.addEventListener("load" , () => {
    userInfo[0].style.backgroundColor = "#fff";
})




