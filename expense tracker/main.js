const inputName = document.querySelector('#input-name');
const inputDate = document.querySelector('#input-date');
const inputAmount = document.querySelector('#input-amount');

const btnAdd = document.querySelector('.btn-add');
const ulList = document.querySelector('#ul-list');


function createLi() {
    return `
        <li class="new_li" new-li>
            ${inputName.value}
            ${inputAmount.value}
            ${inputDate.value}
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
    ulList.insertAdjacentHTML('afterbegin', createLi());

    clearInput();
});

ulList.addEventListener('click', ({ target }) => {
    const btnDel = target.closest('[delete-li-btn]');
    const delNewLi = btnDel?.closest('[new-li]');

    delNewLi?.remove()
});