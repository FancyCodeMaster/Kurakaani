// query selectors
let loginBtn = document.querySelector(".login-button");
let createAccountBtn = document.querySelector(".create-account-button");
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let invalidInfo = document.querySelector(".invalid-info");
let linkToMessage = document.querySelector(".link-to-message");
let linkToNewAccount = document.querySelector(".link-to-new-account");
let form = document.querySelector("form");


let checkEmail="";
let checkPassword="";

const checkEmptyFields = (email , password) => {
    if(email=== "" || password === "") {
        invalidInfo.style.visibility = "visible";
        invalidInfo.textContent = "Empty fields detected";
        emailInput.focus();
        return 0;
    }
}
let standardEmail = /^[a-z_A-Z]+[0-9]*\.?[0-9]*\@[a-z_A-Z]+\.[a-z_A-Z]+\.?[a-z_A-Z]*$/;
let standardPassword = /[a-z_A-Z_0-9]{7,15}/g;
let specialChars = /[@#$%&]/g;
let number = /[0-9]/g;
let caps = /[A-Z]/g;
let emailResult , passwordResult , numPasswordResult , capsPasswordResult , specialCharsPasswordResult;
const checkValid = (email , password) => {

    emailResult = email.search(standardEmail);
    passwordResult = password.search(standardPassword);
    numPasswordResult = password.search(number);
    capsPasswordResult = password.search(caps);
    specialCharsPasswordResult = password.search(specialChars);
    
}
// Collections object to match up email , password and many counting stuffs
//let collections = {
//    initDetails : {
//        email : "silwalrikesh1@gmail.com",
//        password : "kxababu"
//    } , 
//    enteredDetails : {
//        firstName : null,
//        middleName : null,
//        lastName : null,
//        password : null,
//    },
//    messageSiteLink : "./Message/message.html",
//    newAccountSiteLink : "./CreateAccount/createaccount.html",
//}

// Log in clicked or enter entered --> function
const enterLogin = (e) => {
//    checkUser(checkEmail , checkPassword);
//    console.log(checkPassword);
    let empty = checkEmptyFields(checkEmail , checkPassword);
    if(empty===0) {
        e.preventDefault();   
    }else {
        checkValid(checkEmail , checkPassword);
        if(!(emailResult>=0 && passwordResult>=0 && numPasswordResult>=0 && specialCharsPasswordResult>=0 && capsPasswordResult >= 0)) {
            invalidInfo.textContent = "Invalid format of password or email";
            invalidInfo.style.visibility = "visible";
            emailInput.focus();
            e.preventDefault();
            return;
        }
    }
//    linkToMessage.setAttribute("href" , "#");
}

// When we click login button
loginBtn.addEventListener("click" , enterLogin);

//when we press enter button
document.addEventListener("keydown" , (event) => {
    if(event.keyCode === 13) {
        enterLogin();
    }
});

// When we click create account  button
createAccountBtn.addEventListener("click" , () => {
    
});

// When we type inside the email input 
emailInput.addEventListener("change" , (e) => {
    invalidInfo.style.visibility = "hidden";
    checkEmail = e.target.value;
});

// When we type inside the password input 
passwordInput.addEventListener("keyup" , (e) => {
    invalidInfo.style.visibilty = "hidden";
    checkPassword = e.target.value;
});

// Function to validate the correct user email and password
//const checkUser = (email , password) => {
//    if(email===collections.initDetails.email && password===collections.initDetails.password) {
//        invalidInfo.style.visibility = "hidden";
//        linkToMessage.setAttribute("href" , collections.messageSiteLink);
//        linkToMessage.click();
//    }else {
//        invalidInfo.style.visibility = "visible";
//    }
//}


// when window loads for the first time
window.addEventListener("load" , () => {
    emailInput.value = "";
    emailInput.focus();
})