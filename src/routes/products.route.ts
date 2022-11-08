import { Router } from 'express';
import ProductsController from '../controllers/product.controller';
import ValidateProps from '../middlewares/propsValidate';

const router = Router();

const productControler = new ProductsController();

router.post('/products', ValidateProps, productControler.create);
router.get('/products', productControler.getAll);

export default router;