// query selectors
let loginBtn = document.querySelector(".login-button");
let createAccountBtn = document.querySelector(".create-account-button");
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let invalidInfo = document.querySelector(".invalid-info");
let linkToMessage = document.querySelector(".link-to-message");
let linkToNewAccount = document.querySelector(".link-to-new-account");

let checkEmail;
let checkPassword;
// Collections object to match up email , password and many counting stuffs
let collections = {
    initDetails : {
        email : "silwalrikesh1@gmail.com",
        password : "kxababu"
    } , 
    enteredDetails : {
        firstName : null,
        middleName : null,
        lastName : null,
        password : null,
    },
    messageSiteLink : "./Login/message.html",
    // newAccountSiteLink : "./CreateAccount/createaccount.html",
}

// Log in clicked or enter entered --> function
const enterLogin = () => {
    checkUser(checkEmail , checkPassword);
    console.log(checkPassword);
    emailInput.value = "";
    passwordInput.value = "";
    linkToMessage.setAttribute("href" , "#");
    emailInput.focus();
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
    checkEmail = emailInput.value;
});

// When we type inside the password input 
passwordInput.addEventListener("keyup" , (e) => {
    checkPassword = passwordInput.value;
});

// Function to validate the correct user email and password
const checkUser = (email , password) => {
    if(email===collections.initDetails.email && password===collections.initDetails.password) {
        invalidInfo.style.visibility = "hidden";
        linkToMessage.setAttribute("href" , collections.messageSiteLink);
        linkToMessage.click();
    }else {
        invalidInfo.style.visibility = "visible";
    }
}

// Function to create new account and add their info to the collections objects
const createAccountUserInfo = () => {

}
