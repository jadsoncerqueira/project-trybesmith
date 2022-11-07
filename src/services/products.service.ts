import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Product from '../interfaces/product.interface';

class ProductsService {
  public model: ProductsModel;
  
  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async create(product: Product): Promise<Product> {
    const response = await this.model.create(product);
    return response;
  }

  public async getAll(): Promise<Product[]> {
    const response = await this.model.gelAll();
    return response;
  }
}

export default ProductsService;
