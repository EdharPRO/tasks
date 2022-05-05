export function getPurchaseHtml({ id, count, product }) {
    return `
        <li>
            <div data-purchase="${id}" class="card">
                <h3 class="card__title">${product.title}</h3>
                <p class="card__price">${product.price * count}</p>
                <p class="card__weight">${product.weight * count}</p>

                <button data-del-add class="card__button">Удалить</button>
            </div>
        </li>
    `;
};

export const getPurchases = () => JSON.parse(localStorage.getItem('goods3')) || [];

export function deletePurchase(purchaseId) {
    // filter даёт [] после удаления
    const purchases = getPurchases().filter(({ id }) => id !== purchaseId);

    localStorage.setItem('goods3', JSON.stringify(purchases))
}
