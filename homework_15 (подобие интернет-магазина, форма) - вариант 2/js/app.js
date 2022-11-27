function showCategories() {
    const container = document.querySelector('.categories');

    for (let i = 0; i < data.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = data[i].name;
        elem.setAttribute('data-category', i);
        elem.addEventListener('click', showProducts);
        container.appendChild(elem);
    }
}

// handler of click on categories
function showProducts(event) {
    const categoryIndex = event.target.getAttribute('data-category');
    const products = data[categoryIndex].products;
    const container = document.querySelector('.products');
    container.innerHTML = '';

    for (let i = 0; i < products.length; i++) {
        const elem = document.createElement('div');
        elem.textContent = products[i].name;
        elem.setAttribute('data-product', i);
        elem.setAttribute('data-category', categoryIndex);
        container.appendChild(elem);
        elem.addEventListener('click', showDetails);
        elem.addEventListener('click', createButton);
    }
}

let chosenProduct;

function showDetails(event) {
    const categoryIndex = event.target.getAttribute('data-category');
    const productIndex = event.target.getAttribute('data-product');
    chosenProduct = data[categoryIndex].products[productIndex];
    let details = document.querySelector('.details');
    details.innerHTML = `name: ${chosenProduct.name}
    <p>price: ${chosenProduct.price}</p>
    description: ${chosenProduct.description}`;
}

function createButton() {
    let details = document.querySelector('.details');
    let btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.classList.add('btn');
    btn.textContent = 'Buy now!';
    details.appendChild(btn);
    btn.addEventListener('click', revomeProductsAndDetails);
    btn.addEventListener('click', openForm);
}

function revomeProductsAndDetails() {
    let products = document.querySelector('.products');
    let details = document.querySelector('.details');
    products.innerHTML = '';
    details.innerHTML = '';
}

function openForm() {
    let form = document.querySelector('.clientForm');
    form.classList.add('js-showForm');
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', checkInfoAndShowMessage);
}

function checkInfoAndShowMessage() {
    let inputName = document.forms.mainForm.clientName.value;
    let inputCity = document.forms.mainForm.clientCity.value;
    let inputPost = document.forms.mainForm.clientPostNumber.value;
    let inputPayment = document.forms.mainForm.payment.value;
    let inputAmount = document.forms.mainForm.amountOfProduct.value;
    let inputComment = document.forms.mainForm.description.value;

    function createErrorMessageEl() {
        let message = document.createElement('div');
        message.textContent = 'Fill this gap!';
        message.classList.add('message');
        return message;
    }

    if (!inputName) {
        let clientName = document.querySelector('.js-clientName');
        clientName.appendChild(createErrorMessageEl());
    }
    if (inputCity === 'not selected') {
        let clientCity = document.querySelector('.js-clientCity');
        clientCity.appendChild(createErrorMessageEl());
    }
    if (!inputPost) {
        let clientPost = document.querySelector('.js-clientPost');
        clientPost.appendChild(createErrorMessageEl());
    }
    if (inputPost < 1) {
        let clientPost = document.querySelector('.js-clientPost');
        let messageNum = document.createElement('div');
        messageNum.textContent = `There is no  post number ${inputPost}`;
        messageNum.classList.add('message');
        clientPost.appendChild(messageNum);
    }
    if (!inputPayment) {
        let formOfPay = document.querySelector('.js-formOfPay');
        formOfPay.appendChild(createErrorMessageEl());
    }
    if (!inputAmount) {
        let amountProduct = document.querySelector('.js-amount');
        amountProduct.appendChild(createErrorMessageEl());
    }
    if (inputAmount < 1) {
        let amountProduct = document.querySelector('.js-amount');
        let messageNum = document.createElement('div');
        messageNum.textContent = 'You cannot buy less than 1 product';
        messageNum.classList.add('message');
        amountProduct.appendChild(messageNum);
    }
    if (!inputComment) {
        let clientComment = document.querySelector('.js-comment');
        clientComment.appendChild(createErrorMessageEl());
    }
    if (inputName && inputCity !== 'not selected' && inputPost && inputPost >= 1 && inputPayment && inputAmount && inputAmount >= 1 && inputComment) {

        let finalMessage = document.querySelector('.js-message');
        finalMessage.innerHTML = ` 
        <p> You've succesfully filled out the form! </p>
        <br>
        <p> Product information </p>
        <p> - name: ${chosenProduct.name};</p>
        <p> - price: ${chosenProduct.price};</p>
        <p> - description: ${chosenProduct.description};</p>
        <br>
        <p> Delivery information </p>
        <p> - full name: ${inputName};</p>
        <p> - city: ${inputCity};</p>
        <p> - post number: ${inputPost};</p>
        <p> - form of payment: ${inputPayment};</p>
        <p> - amount of product: ${inputAmount};</p>
        <p> - comment: ${inputComment};</p>
        `;
    }

}
showCategories();