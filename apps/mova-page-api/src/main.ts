/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { getData } from './app/data.module';

const app = express();

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to mova-page-api!' });
});

app.get('/data', (req, res) => {
  const data = getData();
  res.send( data );
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
