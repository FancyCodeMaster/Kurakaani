let userBox = document.querySelectorAll(".user-info");


userBox = Array.from(userBox);

// To open the first message by default when the message section is completely loaded
window.addEventListener("load" , () => {
    userBox.map((el) => {
        el.classList.remove("user-info-active");
    })
    userBox[0].classList.add("user-info-active");
})

// collections to make work easier
let collections = {

}

// When we click/select message container of one user , it unselects the message container of all other users
userBox.map((el) => {
    el.addEventListener("click" , () => {
        userBox.map((el) => {
            el.classList.remove("user-info-active");
        })
        el.classList.add("user-info-active");
    })
})