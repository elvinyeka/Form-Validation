//* Get elements in document

const userName = document.querySelector('#username'),
    surName = document.querySelector('#surname'),
    userEmail = document.querySelector('#email'),
    phone = document.querySelector('#phone'),
    password = document.querySelector('#password'),
    passwordConf = document.querySelector('#confirm-password'),
    form = document.querySelector('#signup');

console.log(userName);


const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;
const isEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
    return re.test(password);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkName = getUserName(),
        checkSurname = getSurName(),
        checkEmail = getEmail(),
        checkPhone = getPhone(),
        checkPassword = getPassword(),
        checkPasswordConf = getPasswordConf();


});

function errorMessage(input, message, status) {
    const successIcon = input.parentElement.querySelector('.icon-success');
    const errorIcon = input.parentElement.querySelector('.icon-error');
    const errorMessage = input.parentElement.querySelector('.error-message');

    if (status === 'success') {
        if (errorIcon) {
            errorIcon.classList.add('hidden');
        }
        if (errorMessage) {
            errorMessage.innerText = '';
        }
        successIcon.classList.remove('hidden');
    }
    if (status === 'error') {
        if (successIcon) {
            successIcon.classList.add('hidden');
        }

        errorMessage.innerText = message;
        errorIcon.classList.remove('hidden');
    }
}

function getUserName() {
    const min = 3,
        max = 50;

    const username = userName.value.trim();
    console.log(username);
    if (!isRequired(username)) {
        errorMessage(userName, 'Xananı doldurun!', 'error');
    } else if (!isBetween(username.length, min, max)) {
        errorMessage(userName, `Adinizin uzunlugu ${min} ve ${max} araliginda olmalidir`, 'error');
    } else {
        errorMessage(userName, '', 'success');
    }
}

function getSurName() {
    const min = 3,
        max = 50;

    const surname = surName.value.trim();
    if (!isRequired(surname)) {
        errorMessage(surName, 'Xananı doldurun!', 'error');
    } else if (!isBetween(surname.length, min, max)) {
        errorMessage(surName, `Soyadinizin uzunlugu ${min} ve ${max} araliginda olmalidir`, 'error');
    } else {
        errorMessage(surName, '', 'success');
    }
}



function getEmail() {
    const email = userEmail.value.trim();
    if (!isRequired(email)) {
        errorMessage(userEmail, 'Xananı doldurun!', 'error');
    } else if (!isEmail(email)) {
        errorMessage(userEmail, `Emailin terkibinde @ isharesi ve noqte olmalidir`, 'error');
    } else {
        errorMessage(userEmail, '', 'success');
    }

}

function getPhone() {
    const phonevalue = phone.value.trim();
    if (!isRequired(phonevalue)) {
        errorMessage(phone, 'Xananı doldurun!', 'error');
    } else {
        errorMessage(phone, '', 'success');
    }
}

function getPassword() {
    const checkpassword = password.value.trim();
    if (!isRequired(checkpassword)) {
        errorMessage(password, 'Xananı doldurun!', 'error');
    } else if (!isPasswordSecure(checkpassword)) {
        errorMessage(password, `Şifrə minimum 8 xarakter, reqem  və 1 balaca hərflərdən olmalıdır`, 'error');
    } else {
        errorMessage(password, '', 'success');
    }
}

function getPasswordConf() {
    const confirmpassword = passwordConf.value.trim();
    const checkpassword = password.value.trim();
    if (!isRequired(confirmpassword)) {
        errorMessage(passwordConf, 'Xananı doldurun!', 'error');
    } else if (confirmpassword !== checkpassword) {
        errorMessage(passwordConf, `Şifrələr oxshar olmalıdır.`, 'error');
    } else {
        errorMessage(passwordConf, '', 'success');
    }
}

//* show Password

const passwordIco = document.querySelector('#password-ico1');
const passwordIco2 = document.querySelector('#password-ico2');


passwordIco.addEventListener('click', () => {
    let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    passwordIco.classList.toggle('fa-eye-slash');
});

passwordIco2.addEventListener('click', () => {
    let type = passwordConf.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordConf.setAttribute('type', type);

    passwordIco2.classList.toggle('fa-eye-slash');
});

//* modal  

const modalBtn = document.querySelector('[data-target-modal]');
const closeBtn = document.querySelector('[data-target-close]');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('#overlay');


modalBtn.addEventListener('click', () => {
    modal.classList.add('active');
    overlay.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');

});

overlay.addEventListener('click', () => {
    modal.classList.remove('active');
    overlay.classList.remove('active');
});