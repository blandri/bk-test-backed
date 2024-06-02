import express from 'express';
import order from './order.route.js';
import product from './product.route.js';
import user from './user.route.js';

const routes = express.Router();

routes.use('/order', order);
routes.use('/product', product);
routes.use('/user', user);

export default routes;