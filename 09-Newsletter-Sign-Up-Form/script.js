'use strict'

const btnSubscribe = document.querySelector('.btn-subscribe');
const btnClose = document.querySelector('.btn-close');
const errorField = document.querySelector('.error');
const successPopup = document.querySelector('.success-popup');
const cardContainer = document.querySelector('.card-container');
const email = document.querySelector('#email');

function emailValidator(email) {

    if(!email){
        return `Email is required`;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email))
        return 'Valid email required'
    }
}

btnSubscribe.addEventListener('click', function(e) {
    e.preventDefault();

    const emailVal = email.value.trim();
    const errorMessage = emailValidator(emailVal);

    if(errorMessage) {
        errorField.textContent = errorMessage;
        errorField.classList.remove('hidden');
        email.classList.add('errorEmail');

    } else {
        const emailsubscribed = document.querySelector('.sub-email');
        emailsubscribed.textContent = email.value;
        email.classList.remove('errorEmail');
        errorField.classList.add('hidden');
        cardContainer.classList.add('hidden');
        successPopup.classList.remove('hidden');
    }

});

btnClose.addEventListener('click', (e)=> {
    successPopup.classList.add('hidden');
    cardContainer.classList.remove('hidden');
    email.value = '';
})