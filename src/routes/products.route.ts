import { Router } from 'express';
import ProductsController from '../controllers/product.controller';

const router = Router();

const productControler = new ProductsController();

router.post('/products', productControler.create);
router.get('/products', productControler.getAll);

export default router;