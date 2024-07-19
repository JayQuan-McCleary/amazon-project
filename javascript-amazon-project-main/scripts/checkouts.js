import {renderOrderSummary} from './checkout/orderSummary.js' //renderOrderSummary
import { renderPaymentSummary } from './checkout/paymentsSummary.js';
import '../data/cart-class.js';

/*
import '../data/backend-practice.js';
import {loadProducts} from '../data/products.js';
*/ 

renderOrderSummary();
renderPaymentSummary();

/*
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/