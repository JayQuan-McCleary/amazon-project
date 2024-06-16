import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('test suite: Add To Cart', () => {
    beforeEach(() => {
        cart.length = 0; // Clear the cart before each test
    });

    it('adds an existing product to cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                    quantity: 1,
                    deliveryOptionId: "1",
                }
            ]);
        });
        loadFromStorage();

        addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
        expect(cart[0].quantity).toEqual(2); // Increment the quantity for existing product
    });

    it('adds a new product to cart', () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        });
        loadFromStorage();

        addToCart("15b6fc6f-327a-4ec4-896f-486349e85a3d");
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual("15b6fc6f-327a-4ec4-896f-486349e85a3d");
        expect(cart[0].quantity).toEqual(1); // Should be 1 for a new product
    });
});
