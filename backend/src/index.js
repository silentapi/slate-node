import 'dotenv/config';

import express from 'express';
import mongoose from 'mongoose';
import {json} from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO = process.env.MONGO || 'mongodb://127.0.0.1:27017/slate';

app.use(cors());
app.use(json());

mongoose.connect(MONGO, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

connection.once('open', function() {
  console.log('MongoDB database connection established successfully');
});

app.get('/', function(req, res) {
  res.send('Hello, World!');
});

app.listen(PORT, function() {
  console.log('Server is running on port:', PORT);
});

export default app;
