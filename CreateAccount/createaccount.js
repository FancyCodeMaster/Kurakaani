sessionStorage.removeItem("popup");


let password = document.querySelectorAll(".password");
let initialPassword = document.getElementById("first-password");
let confirmPassword = document.getElementById("confirm-password");
let signUpButton = document.querySelector(".button");
let passwordNoMatch = document.querySelector(".password-no-match");
let email = document.querySelector(".email");
let firstName = document.querySelector(".first-name");
let lastName = document.querySelector(".last-name");
let form = document.querySelector("form");
let popupContainer = document.querySelector(".popup-container");
let layer = document.querySelector(".layer");
let popupButton = document.querySelector(".popup-button");

let a=0,b=0,c=0,d=0,e=0;

let namePattern = /^[a-z_A-Z]{3,10}$/
// function to match pattern of name
const checkPattern = (pattern , str) => {
    let search = str.search(pattern);
    return search;
}


// check pattern when key is clicked
let firstEnteredValue;
firstName.addEventListener("keyup" , (e) => {
    firstEnteredValue = e.target.value;
    if(firstEnteredValue==="") {
        firstName.style.border = "initial";
    }
    let search = checkPattern(namePattern , firstEnteredValue);
    if(search==0) {
        firstName.style.border = "2px solid green";
        a = 1;
    }else if(search == -1 && firstEnteredValue!=="") {
        firstName.style.border = "2px solid red";
        a = 0;
    }
})

// remove border when no char typed
firstName.addEventListener("blur" , (e) => {
    if(e.target.value==="") {
        firstName.style.border = "initial";
    }
})

// check pattern when key is clicked
let lastEnteredValue;
lastName.addEventListener("keyup" , (e) => {
    let lastEnteredValue = e.target.value;
    if(lastEnteredValue==="") {
        lastName.style.border = "initial";
    }
    let search = checkPattern(namePattern , lastEnteredValue);
    if(search==0) {
        lastName.style.border = "2px solid green";
        b = 1;
    }else if(search == -1 && lastEnteredValue!=="") {
        lastName.style.border = "2px solid red";
        b = 0;
    }
})

// remove border when no char typed
lastName.addEventListener("blur" , (e) => {
    if(lastEnteredValue === "") {
        lastName.style.border = "initial";
    }
})


/*---------------------*/
/*---Email Validation -------------------*/
/*---------------------------*/

// function to match email
let emailPattern = /^([a-z_A-Z]+)([0-9]*)(\.?)([0-9]*)(\@)([a-z_A-Z]+)(\.)([a-z_A-Z]+)(\.?)([a-z_A-Z]*)$/;

let enteredEmail;
email.addEventListener("keyup" , (e) => {
    let enteredEmail = e.target.value;
    if(enteredEmail==="") {
        email.style.border = "initial";
    }
    let search = checkPattern(emailPattern , enteredEmail);
    if(search==0) {
        email.style.border = "2px solid green";
        c = 1;
    }else if(search == -1 && enteredEmail!=="") {
        email.style.border = "2px solid red";
        c = 0;
    }
})

// remove border when no char typed
email.addEventListener("blur" , (e) => {
    if(enteredEmail === "") {
        email.style.border = "initial";
    }
})


/*---Email Validation -------------------*/



// To get password from two containers
// Two Passwords
let firstPassword;
let secondPassword;
password = Array.from(password);
password.forEach((el,ind) => {
    if(ind===0) {
        el.addEventListener("keyup" , (e) => {
            passwordNoMatch.style.display = "none";
            password[0].style.border = "initial";
            password[1].style.border = "initial";
            firstPassword = e.target.value;
            confirmPassword.removeAttribute("disabled");
        })
        el.addEventListener("blur" , () => {
            if(firstPassword==="") {
                confirmPassword.setAttribute("disabled" , "");
            }
        })
    }else{        
        el.addEventListener("keyup" , (e) => {
            secondPassword = e.target.value;
            if(secondPassword === firstPassword) {
                password[0].style.border = "2px solid green";
                password[1].style.border = "2px solid green";
                d = 1;
            }else {
                password[0].style.border = "initial";
                confirmPassword.style.border = "2px solid red";
                d = 0;
            }
        })
    }
})

// Function to check two passwords
const checkPassword = (first , second) => {
    if(first===second) {
        passwordNoMatch.style.display = "none";
        e = 1;
    }else{
        passwordNoMatch.style.display = "block";
        password[0].style.border = "red";
        password[1].style.border = "red";
        e = 0;
        password[0].focus();
    }
}

form.addEventListener("submit" , (event) => {
    checkPassword(firstPassword , secondPassword);
    let sum = a+b+c+d+e;
    if(sum!==5) {
        if(a===0) {
            firstName.focus();
        }else if(b===0) {
            lastName.focus();
        }else if(c===0) {
            email.focus();
        }else if(d===0) {
            initialPassword.focus();
        }else if(e===0) {
            initialPassword.focus();
        }
        event.preventDefault();
    }
})



// When the window loads
window.addEventListener("load" , () => {
    firstName.focus();
})




// description container for pattern description
