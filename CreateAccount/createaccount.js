let password = document.querySelectorAll(".password");
let confirmPassword = document.getElementById("confirm-password");
let signUpButton = document.querySelector(".button");
let passwordNoMatch = document.querySelector(".password-no-match");


// Two Passwords
let firstPassword;
let secondPassword;

// To get password from two containers
password = Array.from(password);
password.forEach((el,ind) => {
    if(ind===0) {
        el.addEventListener("keydown" , (e) => {
            firstPassword = e.target.value;
        })
    }else{
        el.addEventListener("keydown" , (e) => {
            secondPassword = e.target.value;
        })
    }
})

// Function to check two passwords
const checkPassword = (first , second) => {
    if(first===second) {
        passwordNoMatch.style.visibilty = "hidden";
    }else{
        passwordNoMatch.style.visibilty = "visible";
    }
}

signUpButton.addEventListener("click" , () => {
    checkPassword(firstPassword , secondPassword);
    password[0].value = "";
    password[1].value = "";
    password[0].focus();
    return false;
})