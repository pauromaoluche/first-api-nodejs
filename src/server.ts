
import express from 'express';
import cors from 'cors';

import { router } from './routes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', router);

const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
};

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
