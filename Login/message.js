let userBox = document.querySelectorAll(".user-info");


// collections to make work easier
let collections = {

}

userBox = Array.from(userBox);

userBox.map((el , ind , arr) => {
    el.addEventListener("click" , () => {
        userBox.map((el) => {
            el.classList.remove("user-info-active");
        })
        el.classList.add("user-info-active");
    })
})