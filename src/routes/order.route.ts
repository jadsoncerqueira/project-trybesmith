import { Router } from 'express';
import OrderController from '../controllers/order.controller';

const router = Router();

const orderControler = new OrderController();

router.get('/orders', orderControler.getAll);

export default router;