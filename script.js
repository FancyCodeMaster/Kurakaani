// query selectors
let loginBtn = document.querySelector(".login-button");
let createAccountBtn = document.querySelector(".create-account-button");
let emailInput = document.querySelector(".email");
let passwordInput = document.querySelector(".password");
let invalidInfo = document.querySelector(".invalid-info");
let linkToMessage = document.querySelector(".link-to-message");

let checkEmail;
let checkPassword;
// Collections object to match up email , password and many counting stuffs
let collections = {
    details : {
        email : "silwalrikesh1@gmail.com",
        password : "kxababu"
    } , 
    messageSiteLink : "./message.html"
}

// When we click login button
loginBtn.addEventListener("click" , () => {
    checkUser(checkEmail , checkPassword);
})

// When we click create account  button
createAccountBtn.addEventListener("click" , () => {
    
})

// When we type inside the email input 
emailInput.addEventListener("change" , (e) => {
    checkEmail = e.target.value;
})

// When we type inside the password input 
passwordInput.addEventListener("change" , (e) => {
    checkPassword = e.target.value;
})

// Function to validate the correct user email and password
const checkUser = (email , password) => {
    if(email===collections.details.email && password===collections.details.password) {
        invalidInfo.style.visibility = "hidden";
        linkToMessage.setAttribute("href" , collections.messageSiteLink);
    }else {
        invalidInfo.style.visibility = "visible";
    }
}