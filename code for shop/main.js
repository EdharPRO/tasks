import { getPurchaseHtml, deletePurchase, getPurchases } from "./modules/purchses";
import { addProduct, buyProduct } from "./modules/products";
import { products } from "./modules/db";

export const purchasesElement = document.querySelector('#basket__list');
export const productsElement = document.querySelector('#cards');

products.forEach(addProduct);

purchasesElement.innerHTML = getPurchases().map(getPurchaseHtml).join('');

productsElement.addEventListener('click', ({ target }) => {
    if (target.hasAttribute('data-add-btn')) {
         // выбор продукта рядом с кнопкой добавить
        const cardElement = target.closest('[data-card]');

         // id продукта
        const productId = +cardElement.dataset.card;

        buyProduct(productId);
    };
});

purchasesElement.addEventListener('click', ({ target }) => {
    const delBtn = target.closest('[data-del-add]');
    const delCard = delBtn?.closest('[data-purchase]');

    if (!delCard) return;

    const purachseId = +delCard.dataset.purchase;

    deletePurchase(purachseId);
    delCard.remove();
});

// ПРИМЕР С ;;;;;;
// purchasesElement.addEventListener('click', ({ target }) => {
//     const delBtn = target.closest('[data-del-add]');
//     const delCard = delBtn?.closest('[data-purchase]');

//     if (!delCard) return;

//     const cardId = +delCard.dataset.purchase;
//     const purchases = getPurchases().filter(({ id }) => id !== cardId);

//     localStorage.setItem('goods3', JSON.stringify(purchases));

//     delCard.remove();
// });
