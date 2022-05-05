import { products } from "./db";
import { purchasesElement, productsElement } from "../main";
import { getPurchases, getPurchaseHtml } from "./purchses";

export function addProduct(product) {
    const productTemplate = `
        <div data-card=${product.id} class="card">
            <h3 class="card__title">${product.title}</h3>
            <p class="card__price">${product.price} грн</p>
            <p class="card__weight">${product.weight} кг</p>

            <button data-add-btn class="card__button">Добавить</button>
        </div>
    `;

    productsElement.insertAdjacentHTML('beforeend', productTemplate);
};

export function buyProduct(productId) {
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

    localStorage.setItem('goods3', JSON.stringify(purchases));
        
    if (existedPurchase) {
        purchasesElement.querySelector(`[data-purchase="${existedPurchase.id}"]`).remove();
    }
    
    purchasesElement.insertAdjacentHTML('beforeend', getPurchaseHtml(newPurchase));
}
