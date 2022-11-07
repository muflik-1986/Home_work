let products = [
    {
        name: 'AKM',
        price: 700,
    },
    {
        name: 'AR-15',
        price: 1500,
    },
    {
        name: 'Savage 110',
        price: 500,
    },
    {
        name: 'Mossberg 500',
        price: 1000
    },
    {
        name: 'Glock 17',
        price: 600,
    },
];

products.push({ name: 'iPhone', price: 1000 });

function shop() {

    showProducts();

    let selectedProductNumber = getProductNumber();
    const selectedProduct = products[selectedProductNumber];
    console.log(`You have chosen product: \nName: ${selectedProduct.name} \nPrice: ${selectedProduct.price}`);

    let selectedProductAmount = getProductAmount();
    console.log(`Amount of products you have chosen: ${selectedProductAmount}`);

    const finalPrice = calculateProductPrice(selectedProduct, selectedProductAmount);
    console.log('The price is $' + finalPrice);

    if (hasDiscount(finalPrice)) {
        let productDiscountPrice = calculateDiscountPrice(finalPrice);
        console.log(`Congrats! You got discount ${DISCOUNT_STR}%:`);
        console.log('Please pay $' + productDiscountPrice);
    }

    showProducts();
}

shop();



