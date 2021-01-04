import express from 'express';
const app = express();
import cors from 'cors';

import IndexRoutes from './routes/index.routes';

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use(IndexRoutes);

app.listen(4000, () => { console.log('server on port 4000') });