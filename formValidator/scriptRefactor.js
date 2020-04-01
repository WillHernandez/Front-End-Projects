// First grab the elements on the page we will be working with
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

let showError =(input, message)=>{
    const formControl = input.parentElement; // grabbing on the the inputs parent element === div
    formControl.className = "form-control error"; // adding class of error to the parent div
    const small = formControl.querySelector('small'); // "small" tag inside of this parentElement
    small.innerText = message; // message we provide
}

let showSuccess =(input)=>{
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// function to check if the email address is valid
let emailIsValid =(input)=>{
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){ // test searches for a match in a string. in this case string === regex 
        return showSuccess(input);
    } else {
        return showError(input, `${getFieldName(input)} is not valid`)
    }
}

let checkRequired =(inputArr)=>{
    inputArr.forEach(input => {
       if(input.value === ""){
           showError(input, `${getFieldName(input)} is not valid`);
       } else {
           showSuccess(input)
       }
    });
}

let checkLength =(input, min, max)=>{
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at minimum ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

let checkPasswordsMatch =(input1, input2)=>{
    if(input1.value !== input2.value){
        showError(input1, `Password's do not match!`);
        showError(input2, `Password's do not match!`);
    }
}

// This functions sole purpose is to Capitalize the first letter in the small error message. Will be passed into ShowError() as the message argument;
let getFieldName =(input)=>{
   return (input.id.charAt(0).toUpperCase() + input.id.slice(1));
}

// Event Listeners // Run the following functions when a "submit" event has occured
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    emailIsValid(email);
    checkPasswordsMatch(password, password2);
})