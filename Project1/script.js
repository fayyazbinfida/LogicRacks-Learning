
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All Functions
// Function to Show Error
function ShowError(input,message) {
  const FormControl = input.parentElement;
  FormControl.className = 'form-control error';
  const small = FormControl.querySelector('small');
  small.innerText = message;
}

//Function to Show Success
function showSuccess(input) {
    const FormControl = input.parentElement;
  FormControl.className = 'form-control success';
}

//Function to Check if Email is Valid
function isValidEmail (email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//New Function to Check if Field is Required
function ShowRequired(inputArray) {
    inputArray.forEach(function(input) {
        if(input.value === '') {
            ShowError(input, `${GetFieldId(input)} is Required`);
        } else {
            showSuccess(input);
        }
    });
}

//Function to Get the Field id for 1st Latter in Upper Case
function GetFieldId(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// This is an Event Listner for the form on submit
form.addEventListener('submit',function(e) {
    e.preventDefault();
    ShowRequired([username,email,password,password2]);
})