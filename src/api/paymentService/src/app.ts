/* eslint-disable import/no-unresolved */
import express, { Express, Request, Response } from 'express';
import * as dotenv from 'dotenv-flow';
// import db from './utilities/dbHelper';

//Router imports
import paymentRouter from './routes/paymentRoutes';
import exp from 'constants';

const app: Express = express();

// (async () => {
//   await db.sync();
// })();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome');
});
app.use('/payments', paymentRouter);

dotenv.config();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
