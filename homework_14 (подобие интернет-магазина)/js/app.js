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

function showDetails(event) {
    const categoryIndex = event.target.getAttribute('data-category');
    const productIndex = event.target.getAttribute('data-product');
    let chosenProduct = data[categoryIndex].products[productIndex];
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
    btn.addEventListener('click', showMessage);
    btn.addEventListener('click', revomeProductsAndDetails);
}

function showMessage() {
    message = document.querySelector('.message')
    message.classList.add('message');
    message.textContent = "Congrats! You've bought the product!";
}

function revomeProductsAndDetails() {
    let products = document.querySelector('.products');
    let details = document.querySelector('.details');
    products.innerHTML = '';
    details.innerHTML = '';
}

showCategories();