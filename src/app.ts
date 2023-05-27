// app.js
import express from 'express';

const app = express();

import routes from './routes';

app.use(express.json());
app.use('/api', routes);

export default  app;