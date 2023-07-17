/* eslint-disable import/no-unresolved */
import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv-flow';
// import db from './utilities/dbHelper';

//Router imports
import productRouter from './routes/productRoutes';
import exp from 'constants';

const app: Express = express();

// (async () => {
//   await db.sync();
// })();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});
app.use('/products', productRouter);

dotenv.config();

const port = 7001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
