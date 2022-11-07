import { Request, Response } from 'express';
import statusCodes from '../../statusCodes';
import ProductsService from '../services/products.service';

class ProductsController {
  constructor(private productService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const productCreated = await this.productService.create(req.body);
    res.status(statusCodes.CREATED).json(productCreated);
  };
}

export default ProductsController;
