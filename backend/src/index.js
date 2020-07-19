import 'dotenv/config';

import express from 'express';
import {json} from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(json());

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

app.listen(PORT, function() {
  console.log('Server is running on port:', PORT);
});

export default app;
