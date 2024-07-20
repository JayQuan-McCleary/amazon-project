import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";
// import { loadProducts, loadProductsFetch } from "../../data/products.js";
describe('test suite: renderOrderSummary', () => {
    It ('Displays the cart', () => {
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary"></div>
        `;

                // Create a container element in the body to use for testing
                container = document.createElement('div');
                container.classList.add('js-test-container');
                document.body.appendChild(container);
        
                // Insert the .js-order-summary element
                container.innerHTML = `
                    <div class="js-order-summary"></div>
                `;
        
                const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
                const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';
        
        
        
                // Mock localStorage.getItem to return a predefined cart
                spyOn(localStorage, 'getItem').and.callFake(() => {
                    return JSON.stringify([{
                        productId: productId1,
                        quantity: 2,
                        deliveryOptionId: "1",
                    }, {
                        productId: productId2,
                        quantity: 1,
                        deliveryOptionId: "2",
                    }]);
                });

                /*
                beforeAll((done) => {
                    loadProducts(() => {
                        done();
                    });
                });
                
                */ 
        
                // Load the cart from storage (this will use the mocked localStorage.getItem)
                loadFromStorage();
        
                renderOrderSummary();
        
                expect(
                    document.querySelectorAll('.js-cart-item-container').length
                ).equal(2);
                expect (
                    document.querySelector(`.js-product-quantity-${productId1}`).innerText
            ).toContain('Quantity: 2');
            expect (
                document.querySelector(`.js-product-quantity-${productId2}`).innerText
        ).toContain('Quantity: 1');
    });

    It('removes a product from the cart', () => {
        
        document.querySelector('.js-test-container').innerHTML = `
            <div class="js-order-summary">
            
            </div>
        `;
        
        
                const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6';
                const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d';

                spyOn(localStorage, 'getItem').and.callFake(() => {
                    return JSON.stringify([{
                        productId: productId1,
                        quantity: 2,
                        deliveryOptionId: "1",
                    }, {
                        productId: productId2,
                        quantity: 1,
                        deliveryOptionId: "2",
                    }]);
                });
        
                // Load the cart from storage (this will use the mocked localStorage.getItem)
                loadFromStorage();

                renderOrderSummary();
                document.querySelector(`.js-delete-link-${productId1}`).click();
    });
});
