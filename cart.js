const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
     const ul = document.getElementById('product-container');
     const li = document.createElement('li');
     li.innerText = `${product}: ${quantity}`
     ul.appendChild(li);
}

const getStoredShoppingCard = () => {
    let card = {};
    const storedCard = localStorage.getItem('card');
    if(storedCard){
        card = JSON.parse(storedCard);
    };
    return card
};


const saveProductToLocalStorage = (product, quantity) => {
    const card = getStoredShoppingCard();
    card[product] = quantity;
    const cardStringfied = JSON.stringify(card);
    localStorage.setItem('card', cardStringfied);
};

const displayProductsFromLocalStorage = () => {
    const savedCart  = getStoredShoppingCard();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity)
        displayProduct(product, quantity); 
    }
};

displayProductsFromLocalStorage();
