function updateCaseQuantity(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = parseInt(productInput.value);
    if (isIncrease) {
        productNumber++;
    }
    else if (productNumber > 0) {
        productNumber--;
    }
    productInput.value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;



    calculateTotal();
}

function getInputId(product) {
    const productInput = document.getElementById(product + '-input');
    const productNumber = parseInt(productInput.value);

    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputId('phone') * 1219;
    const caseTotal = getInputId('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;

    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = totalAmount;
}