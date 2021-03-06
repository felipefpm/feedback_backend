import cors from 'cors';
import express from 'express';
import { routes } from './routes';


export const app = express();

app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  'HTTP server runing!'
});