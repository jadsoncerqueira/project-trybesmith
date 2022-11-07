import express from 'express';
import ProductsRouter from './routes/products.route';
import UserRouter from './routes/user.route';

const app = express();

app.use(express.json());

app.use(ProductsRouter);
app.use(UserRouter);

export default app;
