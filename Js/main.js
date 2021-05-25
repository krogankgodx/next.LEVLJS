const products = [
    {id: 1, title: 'Notebook',foto: '<img src="img/notebook.jpg">', price: 2000},
    {id: 2, title: 'Mouse',foto: '<img src="img/mouse.jpg">' , price: 20},
    {id: 3, title: 'Keyboard',foto: '<img src="img/Keyboard.jpg">' , price: 200},
    {id: 4, title: 'Gamepad' ,foto: '<img src="img/Gamepad.jpg">', price: 50},
];
const renderProduct =(x) => {
    return `<div class="product-item">
                <h3>${x.title}</h3>
                <img class="img__product" ${x.foto}
                <p>price $${x.price}</p>
                <button class="buy-btn">Купить</button>
                </div>`
};
const renderPage = list => {
    const productList = list.map(item =>renderProduct(item));
    console.log(productList);
    document.querySelector('.products').innerHTML = productList.join('');
};
renderPage(products);
