let navBar = document.getElementById('nav-bar');
let hamburger = document.querySelector('.open-icon');
let closeMenu = document.querySelector('.close-icon');
// let header = document.querySelector('#header');

hamburger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

closeMenu.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

//Hide navbar by clicking anywhere on the body
document.onclick = function (e) {
    if(e.target.id !== 'open-nav') {
    navBar.classList.remove('active')
    }
};

// email input validation

const emailEl = document.querySelector('#email');
const button = document.querySelector('.subcribe')

const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError(emailEl, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(emailEl, 'Email is not valid.')
    } else {
        showSuccess(emailEl);
        valid = true;
    }
    return valid;
};

const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

const isRequired = value => value === '' ? false : true;

const showError = (input) => {
    // get the form-field element
    const formField = input;
    // add the error class
    formField.classList.add('error');

};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input;

    // remove the error class
    formField.classList.remove('error');
}

button.addEventListener('click', function (e) {
    let isEmailValid = checkEmail()

    let isFormValid = isEmailValid 

    if (isFormValid) {
        alert('successful');
    }
})