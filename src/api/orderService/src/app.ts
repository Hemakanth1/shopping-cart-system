/* eslint-disable import/no-unresolved */
import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv-flow';

//Router imports
import orderRouter from './routes/orderRoutes';
import exp from 'constants';

const app: Express = express();

// (async () => {
//   await db.sync();
// })();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});
app.use('/orders', orderRouter);

dotenv.config();

const port = 7002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
