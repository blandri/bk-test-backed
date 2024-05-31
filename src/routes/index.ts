import express from 'express';
import order from './order.route';
import product from './product.route';

const routes = express.Router();

routes.use('/order', order);
routes.use('/product', product);

export default routes;