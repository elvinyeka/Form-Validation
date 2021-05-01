//* Get elements in document

const userName = document.querySelector('#name'),
    surName = document.querySelector('#surname'),
    form = document.querySelector('#signup');



const isRequired = value => value === "" ? false : true;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let checkName = getUserName();
    let checkSurname = getSurName();

});


function getUserName() {
    const name = userName.value.trim();

    if (!isRequired(name)) {
        getError(userName, 'Ad hissəni doldurmağınız vacibdir!');
    } else {
        getSuccess(userName);
    }
}

function getSurName() {
    const surname = surName.value.trim();

    if (!isRequired(surname)) {
        getError(surName, 'Soyad hissəni doldurmağınız vacibdir!');
    } else {
        getSuccess(surName);
    }
}


function getError(input, message) {
    const inputField = input.parentElement;
    inputField.classList.remove('success');
    inputField.classList.add('error');
    const error = inputField.querySelector('small');
    error.textContent = message;

}

function getSuccess(input) {
    const inputField = input.parentElement;
    inputField.classList.remove('error');
    inputField.classList.add('success');
    const error = inputField.querySelector('small');
    error.textContent = "";
}