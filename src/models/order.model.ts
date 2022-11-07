import { Pool } from 'mysql2/promise';
// ResultSetHeader
import Order from '../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const result = await this.connection.execute(
      `
        SELECT orde.id, orde.userId, JSON_ARRAYAGG(pro.id) productsIds
        FROM Trybesmith.Orders orde
        INNER JOIN Trybesmith.Products pro
        ON orde.id = pro.orderId
        GROUP BY pro.orderId
      `,
    );

    const [rows] = result;
    return rows as Order[];
  }
}

export default OrderModel;