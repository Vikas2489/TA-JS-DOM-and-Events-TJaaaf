// Ankit Sir way of solving

let form = document.querySelector("form");
let errorMessage = {};


function displayError(name) {
    let elm = form.elements[name];
    elm.nextElementSibling.innerText = errorMessage[name];
    elm.parentElement.classList.add("error");
}

function displaySuccess(name) {
    console.log(name);
    console.log(form.elements[name], form.elements[name].nextElementSibling);
    form.elements[name].nextElementSibling.innerText = "";
    errorMessage.username = "";
    errorMessage.name = "";
    errorMessage.email = "";
    errorMessage.phone = "";
    errorMessage.passwordd = "";
    errorMessage.passwordCheck = "";
    form.elements[name].parentElement.classList.remove("error");
    form.elements[name].parentElement.classList.add("success");
}

function handleSubmit(event) {
    event.preventDefault();
    let elements = event.target.elements;
    let username = elements.username.value;
    let name = elements.name.value;
    let email = elements.email.value;
    let phone = elements.phone.value;
    let password = elements.passwordd.value;
    let passwordCheck = elements["password-check"].value;

    // Rules for form validation: 

    // Username can't be less than 4 characters
    if (username.length < 4) {
        errorMessage.username = "Username can't be less than 4 characters";
        displayError("username");
    } else {
        displaySuccess("username");
    }

    // Name can't be numbers
    if (name.split("").some((p) => Number(p)) === true) {
        errorMessage.name = "Name can't be numbers";
        displayError("name");
    } else {
        displaySuccess("name");
    }

    // Email must contain the symbol @
    // Email must be at least 6 characters
    if (email.split("").some((p) => p === "@") === false) {
        errorMessage.email = "Email must contain the symbol @";
        displayError("email");
    } else if (email.length < 6) {
        errorMessage.email = "Email must be at least 6 characters";
        displayError("email");
    } else {
        displaySuccess("email");
    }


    // Phone numbers can only be a number
    // Length of phone number can't be less than 7
    if (isNaN(phone)) {
        errorMessage.phone = 'Phone numbers can only be a number';
        displayError("phone");
    } else if (phone.length < 7) {
        errorMessage.phone = "Length of phone number can't be less than 7";
        displayError("phone");
    } else {
        displaySuccess("phone");
    }

    // Password and confirm password must be same.
    if (password !== passwordCheck) {
        errorMessage.passwordd = "Password and confirm password must be same.";
        errorMessage.passwordCheck = "Password and confirm password must be same.";
        displayError("passwordd");
        displayError("password-check");
    } else {
        displaySuccess("passwordd");
        displaySuccess("passsword-check");
    }
}

form.addEventListener("submit", handleSubmit);






















































































// Mine way of solving

let form = document.querySelector("form");
let small = document.querySelectorAll("small");



let userError = "";


function handleClick(event) {
    event.preventDefault();
    let elementtt = event.target.elements;

    // Your Name

    let fullName = elementtt.name.value;
    if (fullName.split("").some((p) => Number(p)) === true) {
        userError = `You can't use number in the name field`;
        small[0].innerText = userError;
    } else {
           small[0].innerText = "";
    }

    // userName

    let userName = elementtt.username.value;
    if (userName.split("").length < 4) {
        userError = `Username can't be less than 4 characters`;
        small[3].innerText = userError;
    } else {
        small[3].innerText = "";
    }

    // email

    let email = elementtt.email.value;
    if (email.split("").some((p) => p === "@") === false) {
        userError = 'Email must contain the symbol @, (Not a valid email)';
        small[1].innerText = userError;
    } else if (email.split("").length < 6) {
        small[1].innerText = "Email must be at least 6 characters, (Not a valid email)";
    } else {
        small[1].innerText = "";
    }

    // phone number

    let phone = elementtt.phone.value;
    if (phone.split("").length < 7) {
        small[2].innerText = `Length of phone number can't be less than 7`
    }  else {
    small[2].innerText = "";
    }
    //  else if (phone.split("").some((p) => (Number(p)))) {
    //     small[2].innerText = `Phone numbers can only be a number`;
    // }

    // password

    let password1 = elementtt.password[0].value;
    let password2 = elementtt.password[1].value;

    console.log({ password1, password2 });
    if (password1 !== password2) {
        small[5].textContent = 'Password and confirm password must be same.'
        console.log("abc"); 
    } else {
        small[5].innerText = "";
    }

}



form.addEventListener("submit", handleClick);
