const list = document.querySelector('#basket__list');
const productCards = document.querySelector('#cards');

// ф-ция создаёт товар в корзине
function getPurchaseHtml({ id, count, product }) {
    return `
    <li>
        <div data-purchase="${id}" class="card">
            <h3 class="card__title">${product.title}</h3>
            <p class="card__price">${product.price * count}</p>
            <p class="card__weight">${product.weight * count}</p>

            <button data-del-add class="card__button">Удалить</button>
        </div>
    </li>
    `
};

const getPurchases = () => JSON.parse(localStorage.getItem('shop')) || [];

list.innerHTML = getPurchases().map(getPurchaseHtml).join('');

// window.add??
productCards.addEventListener('click', ({ target }) => {
    if (target.hasAttribute('data-add-btn')) {
        // выбор продукта рядом с кнопкой добавить
        const cardElement = target.closest('[data-card]');

        // id продукта
        const productId = +cardElement.dataset.card;
        // тут мы нахдим ПРОДУКТ по ID
        const product = products.find(({ id }) => id === productId);
        const existedPurchase = getPurchases().find(({ product }) => product.id === productId);
        const newPurchase = {
            id: existedPurchase?.id || Date.now(),
            product,
            count: 1 + (existedPurchase?.count || 0)
        };

        const purchases = existedPurchase 
            ? getPurchases().map((purchase) => purchase.id === existedPurchase.id ? newPurchase : purchase)
            : getPurchases().concat(newPurchase);


        // const cardInfo = {
        //     id: goodsArr,
        //     title: card.querySelector('.card__title').innerText,
        //     price: card.querySelector('.card__price').innerText,
        //     weight: card.querySelector('.card__weight').innerText,
        // };

        localStorage.setItem('shop', JSON.stringify(purchases));
        
        if (existedPurchase) {
            list.querySelector(`[data-purchase="${existedPurchase.id}"]`).remove();
        }
    
        list.insertAdjacentHTML('beforeend', getPurchaseHtml(newPurchase));
    }
});

list.addEventListener('click', ({ target }) => {
    const delBtn = target.closest('[data-del-add]')
    const delCard = delBtn?.closest('[data-purchase]')

    if(!delCard) return

    const cardId = +delCard.dataset.purchase;
    const purchases = getPurchases().filter(({ id }) => id !== cardId);

    localStorage.setItem('shop', JSON.stringify(purchases))

    delCard.remove()
})

// это не практикуют. должен быть только 1 список!!!
const products = [
    {
        title: 'Ананас',
        price: 15,
        weight: 1,
        id: 1
    },
    {
        title: 'Яблоки',
        price: 12,
        weight: 1,
        id: 2
    },
    {
        title: 'Манго',
        price: 18,
        weight: 1,
        id: 3,
    }
];

//или копировать с html?
function addGoods(product) {
    const templateGood = `
        <div data-card=${product.id} class="card">
            <h3 class="card__title">${product.title}</h3>
            <p class="card__price">${product.price} грн</p>
            <p class="card__weight">${product.weight} кг</p>

            <button data-add-btn class="card__button">Добавить</button>
        </div>
    `

    productCards.insertAdjacentHTML('beforeend', templateGood)
};

products.forEach(addGoods);