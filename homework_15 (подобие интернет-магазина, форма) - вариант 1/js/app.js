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
    let form = document.querySelector('form[name = "mainForm"]');

    // Название формы
    let formTitle = document.createElement('p');
    formTitle.textContent = 'Fill out the form below!';
    formTitle.classList.add('formTitle');
    form.appendChild(formTitle);

    // ФИО
    let clientName = document.createElement('div');
    clientName.classList.add('js-clientName');
    form.appendChild(clientName);
    // Название поля с ФИО
    let clientNameInfo = document.createElement('label');
    clientNameInfo.textContent = 'Full name:          ';
    clientName.appendChild(clientNameInfo);
    // Ввод поля с ФИО
    let clientNameInput = document.createElement('input');
    clientNameInput.setAttribute('type', 'text');
    clientNameInput.setAttribute('name', 'clientName');
    clientNameInput.setAttribute('placeholder', 'Your full name');
    clientName.appendChild(clientNameInput);


    // Город
    let clientCity = document.createElement('div');
    clientCity.classList.add('js-clientCity');
    form.appendChild(clientCity);
    // Название поля с городом
    let clientCityInfo = document.createElement('label');
    clientCityInfo.textContent = 'City to send:    ';
    clientCity.appendChild(clientCityInfo);
    // Выбор города
    let clientCitySelect = document.createElement('select');
    clientCitySelect.setAttribute('name', 'clientCity');
    clientCity.appendChild(clientCitySelect);

    let city0 = document.createElement('option');
    city0.setAttribute('value', 'not selected');
    city0.textContent = '-- select city --';
    clientCitySelect.appendChild(city0);

    let city1 = document.createElement('option');
    city1.setAttribute('value', 'Kharkiv');
    city1.textContent = 'Kharkiv';
    clientCitySelect.appendChild(city1);

    let city2 = document.createElement('option');
    city2.setAttribute('value', 'Kyiv');
    city2.textContent = 'Kyiv';
    clientCitySelect.appendChild(city2);

    let city3 = document.createElement('option');
    city3.setAttribute('value', 'Odessa');
    city3.textContent = 'Odessa';
    clientCitySelect.appendChild(city3);


    // Номер почты
    let clientPost = document.createElement('div');
    clientPost.classList.add('js-clientPost');
    form.appendChild(clientPost);
    // Название поля для выбора склада Новой почты
    let clientPostInfo = document.createElement('label');
    clientPostInfo.textContent = 'Number of Post Departure:    ';
    clientPost.appendChild(clientPostInfo);
    // Поле с номером склада Новой почты
    let clientPostNumber = document.createElement('input');
    clientPostNumber.setAttribute('type', 'number');
    clientPostNumber.setAttribute('name', 'clientPostNumber');
    clientPostNumber.setAttribute('placeholder', 'Number of Post Departure');
    clientPost.appendChild(clientPostNumber);

    // Форма оплаты
    let formOfPay = document.createElement('div');
    formOfPay.classList.add('js-formOfPay');
    form.appendChild(formOfPay);
    // Название поля для выбора формы оплаты
    let formOfPayment = document.createElement('label');
    formOfPayment.textContent = 'Way to pay the good:    ';
    formOfPay.appendChild(formOfPayment);

    // Поле с выбором формы оплаты
    let parRadio1 = document.createElement('p');
    parRadio1.textContent = 'Cash on delivery:   ';
    parRadio1.classList.add('par');
    formOfPay.appendChild(parRadio1);
    let formOfPayInput1 = document.createElement('input');
    formOfPayInput1.setAttribute('type', 'radio');
    formOfPayInput1.setAttribute('name', 'payment');
    formOfPayInput1.setAttribute('value', 'C.O.D');
    parRadio1.appendChild(formOfPayInput1);

    let parRadio2 = document.createElement('p');
    parRadio2.textContent = 'By banking card:    ';
    parRadio2.classList.add('par');
    formOfPay.appendChild(parRadio2);
    let formOfPayInput2 = document.createElement('input');
    formOfPayInput2.setAttribute('type', 'radio');
    formOfPayInput2.setAttribute('name', 'payment');
    formOfPayInput2.setAttribute('value', 'card');
    parRadio2.appendChild(formOfPayInput2);

    // Колличество товара
    let amount = document.createElement('div');
    amount.classList.add('js-amount');
    form.appendChild(amount);
    // Название поля для колличества товара
    let amountProductInfo = document.createElement('label');
    amountProductInfo.textContent = 'Amount of product:     ';
    amount.appendChild(amountProductInfo);
    // Поле с с колличеством товара
    let amountProductInput = document.createElement('input');
    amountProductInput.setAttribute('type', 'number');
    amountProductInput.setAttribute('name', 'amountOfProduct');
    amountProductInput.setAttribute('placeholder', 'Amount of products');
    amount.appendChild(amountProductInput);


    // Комментарий к заказу
    let comment = document.createElement('div');
    comment.classList.add('js-comment');
    form.appendChild(comment);
    // Название поля для комментария
    let commentInfo = document.createElement('label');
    commentInfo.textContent = 'Comments:    ';
    comment.appendChild(commentInfo);
    // Поле ввода комментария
    let commentInput = document.createElement('textarea');
    commentInput.setAttribute('name', 'description');
    commentInput.setAttribute('placeholder', 'Your comment');
    comment.appendChild(commentInput);

    // Кнопка
    let btn = document.createElement('input');
    btn.setAttribute('type', 'button');
    btn.setAttribute('value', 'Press me');
    btn.classList.add('btn');
    form.appendChild(btn);
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
        let form = document.querySelector('.clientForm');
        let finalMessage = document.createElement('div');
        finalMessage.classList.add('message')
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
        form.appendChild(finalMessage);
    }

}
showCategories();