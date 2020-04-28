const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function setError(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error"
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success"
}

function isBlank(input){
    return input === "";
}

function checkLength(input){
    return input.length  < 6;
}

function passwordChecker(pass1, pass2){
    if(isBlank(pass1) || checkLength(pass1)) {
        setError(password, "Password must me atleast 6 characters");
        if(isBlank(pass2) || checkLength(pass2)) {
            setError(password2, "Password must me atleast 6 characters");
        }
    } else {
        if(pass1 === pass2){
            setSuccess(password);
            setSuccess(password2);
        } else {
            setError(password, "Passwords must match.");
            setError(password2, "Passwords must match.");
        }
    }
}

function emailChecker(val){
    let regX = /[^@]+@[^\.]+\..+/g
    if(val.match(regX)){
        setSuccess(email)
    } else {
        setError(email, "Email is not valid.")
    }
}

function usernameChecker(val){
    if(isBlank(val) || checkLength(val)){
        setError(username, "Username is not valid");
    } else {
        setSuccess(username);
    }
}


form.addEventListener('submit', e =>{
    e.preventDefault();
    let usernameValue = username.value.trim();
    let emailValue = email.value.trim();
    let passwordValue = password.value.trim();
    let password2Value = password2.value.trim();

    usernameChecker(usernameValue);
    emailChecker(emailValue);
    passwordChecker(passwordValue, password2Value);
})

