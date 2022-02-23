const form = document.forms.feedback;
const text = form.elements.comment;
const num = form.elements.number;
const sub = form.elements.submit;
const res = form.elements.reset;

const defaultText = 'svet.lukyantseva@gmail.com';
const defaultNumber = '+375';

function validateText() {
    if (text.value.length == '') {
        text.value = defaultText;
    } else return;
}

function fillFormNumber() {
    num.value = defaultNumber;
}

function validateNumber() {
    let arrayOfNumbers = (num.value).slice(4, 14);
    let regexp = /\D/g;
    let isValid = (!arrayOfNumbers.match(regexp) && (num.value.length === 13));

    showSpanMessage(isValid);
}

function showSpanMessage(isValid) {
    let spanElement = document.createElement('span');
    spanElement.classList.add('span__message');
    spanElement.textContent = isValid ? 'Password is valid.' : 'Password is not valid.';
    sub.before(spanElement);
    setTimeout(() => spanElement.remove(), 1000);
}

num.addEventListener('focus', fillFormNumber);
sub.addEventListener('click', (event) => {
    event.preventDefault();
    validateText();
    validateNumber();
});
