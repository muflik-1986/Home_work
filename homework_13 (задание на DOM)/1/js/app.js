let input = document.querySelector('input');
input.addEventListener('focus', showMessage);
input.addEventListener('blur', hideMessage);

function showMessage() {
    let createdDiv = document.createElement('div');
    let main = document.querySelector('.main');
    createdDiv.textContent = 'Заполните, пожалуйста, форму';
    createdDiv.classList.add('myDiv');
    main.appendChild(createdDiv);
    main.classList.add('mainStyles');
}

function hideMessage() {
    document.querySelector('.myDiv').remove();
}