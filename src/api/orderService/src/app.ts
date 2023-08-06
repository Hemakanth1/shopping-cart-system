/* eslint-disable import/no-unresolved */
import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv-flow';

//Router imports
import orderRouter from './routes/orderRoutes';
import orderItemRouter from './routes/orderItemRoutes';
import exp from 'constants';
import cors from 'cors';

const app: Express = express();

// (async () => {
//   await db.sync();
// })();

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});
app.use('/orders', orderRouter);
app.use('/order_items', orderItemRouter);

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
