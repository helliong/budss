

let form = document.querySelector('.jsForm'),
    formInputs = document.querySelectorAll('.jsInput'),
    inputEmail = document.querySelector('.jsInputEmail'),
    inputPhone = document.querySelector('.jsInputPhone');

function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    let re = /^[0-9\s]*$/;
    return re.test(String(phone))
}

form.onsubmit = function () {
    let emailValue = inputEmail.value,
        phoneValue = inputPhone.value,
        emptyInputs = Array.from(formInputs).filter(input => input.value === '');

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }

            });


    if (emptyInputs.length !== 0) {
        console.log('inputs not filled')
        return false;
    }

    if (!validatePhone(phoneValue)) {
        console.log('phone not valid')
        inputPhone.classList.add('error');
        return false;
    } else {
        inputPhone.classList.remove('error')
    }


    if (!validateEmail(emailValue)) {
        console.log('email not valid');
        inputEmail.classList.add('error');

        return false;
    } else {
        inputEmail.classList.remove('error');
    }
}

function validation(form) {

    function createError(input, text) {
        const parent = input.parentNode;
        const errorText = document.createElement('p')

        errorText.classList.add('errorLabel')
        errorText.textContent = text;

        parent.classList.add('error')
        parent.append(errorText)
    }

let result = true;

const allInputs = form.querySelectorAll('input');

for (const input of allInputs) {

    if(input.value=="") {
        console.log('error')
        createError(input,'This field is required.')
        result = false;
    }

}

return result
}

document.getElementById('addForm').addEventListener('submit', function (event) {
    event.preventDefault()

    if (validation(this) == true) {
        alert('succecedddd')
    }
})




