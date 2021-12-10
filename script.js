function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        callback(array[i], i)
    };
};


function map(array, callback) {
    const result = [];

    forEach(array, (arr, index) => {
        result.push(callback(arr, index))
    })

    return result;
};

const products = [
    { id: 1, name: 'Pencil', price: 12 }, 
    { id: 2, name: 'Pen', price: 12 }
];




const price = 0;
const productsList = document.getElementById('products');


productsList.innerHTML = price;


const removeTask = (prod) => {
    document.querySelector(`[data-prod="${prod.id}"]`).remove();
};

const productsHtml = map(products, (prod) => {
    return `
        <li data-prod="${prod.id}">
            <button>+</button>
            <p>${prod.name}</p>
            <p>${prod.price}</p>
            <button >-</button>
            <button onclick='removeTask(${JSON.stringify(prod)})'>X</button>
        </li>
    `
});

productsList.innerHTML = productsHtml;