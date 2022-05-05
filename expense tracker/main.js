const inputName = document.querySelector('#input-name');
const inputDate = document.querySelector('#input-date');
const inputAmount = document.querySelector('#input-amount');
const btnAdd = document.querySelector('.btn-add');
const ulList = document.querySelector('#ul-list');

const getProducts = () => JSON.parse(localStorage.getItem('expense')) || [];

ulList.innerHTML = getProducts().map(createLi).join('');

function createLi(product) {
    return `
        <li class="new_li" data-product="${product.id}">
            ${product.name}
            ${product.amount}
            ${product.date}
            <button class="delete_btn" delete-li-btn>Удалить</button>
        </li>
    `
};

function clearInput() {
    inputName.value = '';
    inputDate.value = '';
    inputAmount.value = '';
};

btnAdd.addEventListener('click', () => {
    const product = {
        id: Date.now(),
        name: inputName.value,
        date: inputDate.value,
        amount: inputAmount.value
    };

    localStorage.setItem('expense', JSON.stringify(getProducts().concat(product)));

    ulList.insertAdjacentHTML('afterbegin', createLi(product));

    clearInput();
});

ulList.addEventListener('click', ({ target }) => {
    const btnDel = target.closest('[delete-li-btn]');
    const delNewLi = btnDel?.closest('[data-product]');

    if(!delNewLi) {
        return;
    };

    const prodId = +delNewLi.dataset.product;
    const filterProd = getProducts().filter(({ id }) => id !== prodId);

    localStorage.setItem('expense', JSON.stringify(filterProd));

    delNewLi?.remove()
});