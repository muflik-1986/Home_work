const EXCHANGE = 41;
const DISCOUNT_STARTS_FROM = 100000;
const DISCOUNT_STR = 10;
const DISCOUNT = DISCOUNT_STR / 100;

function showProducts() {
    // Show products
    console.log(`All our products:`);
    for (let i = 0; i < products.length; i++) {
        console.log(`#${(i + 1)} Name: ${products[i].name} \nPrice: ${products[i].price}`);
    }
}

function getProductNumber() {
    // Get product number    
    let productNumber;
    do {
        productNumber = prompt('Enter the product you wanna buy:');
        productNumber--;
    } while (productNumber < 0 || productNumber > products.length - 1 || isNaN(productNumber));
    return productNumber;
}

function getProductAmount() {
    // Get amount of products to be bought   
    let amount;
    do {
        amount = parseInt(prompt('Enter the amount of products you wanna buy:'));
    } while (amount <= 0 || isNaN(amount));
    return amount;
}

function calculateProductPrice(product, amount) {
    // Calculate the price
    return (product.price * amount);
}

function hasDiscount(price) {
    // Check if discount needed
    if (price * EXCHANGE > DISCOUNT_STARTS_FROM) {
        return true;
    } else {
        return false;
    }
}

function calculateDiscountPrice(price) {
    // Calculate price with discount
    return (price - price * DISCOUNT);
}