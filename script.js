const form = document.getElementById('form');
const firstname_input = document.getElementById('firstname-input');
const Email_input = document.getElementById('email-input');
const Password_input = document.getElementById('password-input');
const RepeatPassword_input = document.getElementById('repeat-password-input');
const error_message = document.getElementById('error-message')

form.addEventListener('submit',(e)=>{
   

    let errors = []

    if(firstname_input){
      errors = getSignupFormErrors(firstname_input.value,Password_input.value,RepeatPassword_input.value)  
    }
    else{
        errors = getLoginFormErrors(Email_input.value,Password_input.value);
    }

    if(errors.length > 0){
        //if there any errors
        e.preventDefault()
        error_message.innerText = errors.join(".")
    }
})

function getSignupFormErrors(firstname,email,password,repeatPassword){
    let errors = []

    if(firstname === ''|| firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect');
    }

     if(email === ''|| email == null){
        errors.push('Email is required')
        Email_input.parentElement.classList.add('incorrect');
    }

     if(password === ''|| password == null){
        errors.push('password is required')
        Password_input.parentElement.classList.add('incorrect');
    }
    if(password.length < 8){
        errors.push('password must have at least 8 characters');
        Password_input.parentElement.classList.add('incorrect');
    }
     if(password!== repeatPassword){
        errors.push('Password does not match repeated password');
        Password_input.parentElement.classList.add('incorrect');
        RepeatPassword_input.parentElement.classList.add('incorrect');
    }
    return errors;
}

const allInputs = [firstname_input,Email_input,Password_input,RepeatPassword_input]

allInputs.forEach(input =>{
    if(input.parentElement.classList.contains('incorrect')){
        input.parentElement.classList.remove('incorrect');
        error_message.innerText='';
    }

   
})