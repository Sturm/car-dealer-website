const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');

const app = express();
const db = process.env.APP_MONGO_DB;


mongoose.connect(db)
.then(() => {
  console.log('Connected to DB!');
})
.catch(err => {
  console.log(err);
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/', require('./server/routes'));

const port = process.env.APP_PORT || 1337;

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
