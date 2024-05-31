import express from 'express';
import order from './order.route.js';
import product from './product.route.js';

const routes = express.Router();

routes.use('/order', order);
routes.use('/product', product);

export default routes;