function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i)
    };
};

function map(array, callback) {
    const result = [];

    forEach(array, (arr) => {
        result.push(callback(arr))
    })

    return result;
};

const products = [
    { id: 1, name: 'Pencil', price: "10,00" }, 
    { id: 2, name: 'Pen', price: "12,00 "}
];

const prodHtml = document.getElementById('products');

const removeProd = (prod) => {
    document.querySelector(`[data-prod="${prod.id}"]`).remove();
};

const prodElement = map(products, (prod) => {
    return `
        <li data-prod="${prod.id}">
            <h1 class="">${prod.name}</h1>
            <p>Цена товара ${prod.price} гривен</p>
            <button >+</button>
            <button onclick='removeProd(${JSON.stringify(prod)})'>-</button>
        </li>
    `
});

prodHtml.innerHTML = prodElement;