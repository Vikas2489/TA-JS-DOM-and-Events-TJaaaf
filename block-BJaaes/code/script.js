let form = document.querySelector("form");
let small = document.querySelectorAll("small");

// Messages for error:

// __ can't be less than __ characters (replace __ with field name)
// You can't use number in the name field
// Not a valid email
// Phone number can only contain numbers
// Once the form is valid it should alert User Added Successfully!

let userError = "";

let userInfo = {};

function handleClick(event) {
    event.preventDefault();
    let elementtt = event.target.elements;

    // Your Name

    let fullName = elementtt.name.value;
    if (fullName.split("").some((p) => Number(p)) === true) {
        userError = `You can't use number in the name field`;
        small[0].innerText = userError;
    } else {
        userInfo.fullName = fullName;
    }

    // userName

    let userName = elementtt.username.value;
    if (userName.split("").length < 4) {
        userError = `Username can't be less than 4 characters`;
        small[3].innerText = userError;
    } else {
        userInfo.userName = userName;
    }

    // email

    let email = elementtt.email.value;
    if (email.split("").some((p) => p === "@") === false) {
        userError = 'Email must contain the symbol @, (Not a valid email)';
        small[1].innerText = userError;
    } else if (email.split("").length < 6) {
        small[1].innerText = "Email must be at least 6 characters, (Not a valid email)";
    } else {
        userInfo.email = email;
    }

    // phone number

    let phone = elementtt.phone.value;
    if (phone.split("").length < 7) {
        small[2].innerText = `Length of phone number can't be less than 7`
    }
    //  else if (phone.split("").some((p) => (Number(p)))) {
    //     small[2].innerText = `Phone numbers can only be a number`;
    // }

    // password

    let password1 = elementtt.password[0].value;
    let password2 = elementtt.password[1].value;

    if (password1 !== password2) {
        small[5].innerText = 'Password and confirm password must be same.'
    } else {
        userInfo.password = password2;
    }

    if (small[5].innerText = "") {
        return alert('User Added Successfully!')
    }

}



form.addEventListener("submit", handleClick);