import {renderOrderSummary} from './checkout/orderSummary.js' //renderOrderSummary
import { renderPaymentSummary } from './checkout/paymentsSummary.js';
import '../data/cart-class.js';



renderOrderSummary();
renderPaymentSummary();

/*

TESTING AWAIT VS MANUAL PROMISES - AWAIT IS BETTER

async function loadPage() {
await loadProductsFetch(),

const value = await new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
});
renderOrderSummary();
renderPaymentSummary();
}
loadPage();

AWAIT IS BETTER it took like 10 or so easily readable lines of code






/*
import '../data/backend-practice.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';
*/ 

/*

new Promise((resolve)=>{
loadProductsFetch(),
     new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    }) 

}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

or you can use Promise.all

Promise.all([
    new Promise((resolve)=>{
        loadProducts(() => {
            resolve('value 1');
        });
    }),

    new Promise((resolve)=>{
        loadCart(() => {
            resolve();
        });
    }),

]).then((values) => {
    console.log(values);
    renderOrderSummary();
    renderPaymentSummary();
});
*/ 


/*
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/