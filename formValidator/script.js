const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let showError =(input, message)=>{
    const formControl = input.parentElement;
    formControl.className = "form-control error"; // added the error className to the formControl div
    const small = formControl.querySelector('small'); // accessed within the form-control div
    small.innerText = message; // add error message to <small> as second parameter to showError
}

let showSuccess =(input)=>{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// function to check if the email address is valid
let emailIsValid =(email)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase()); // will return a true or false if (email) matches regex format
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault(); 
    if(username.value === ""){
        showError(username, "UserName is required!");
    } else {
        showSuccess(username);
    }

    if(email.value === ""){
        showError(email, "Email address is required!");
    } else if(!emailIsValid(email.value)){
        showError(email, "Email is not in the correct format.")
    } else {
        showSuccess(email);
    }

    if(password.value === ""){
        showError(password, "A password is required!");
    } else {
        showSuccess(password);
    }
    
    if(password2.value === ""){
        showError(password2, "You must re-enter the same password.");
    } else {
        showSuccess(password2);
    }
});
