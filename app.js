const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/3axes';

MongoClient.connect(url, (err, db) => {
  if (err) throw err;
  console.log('Connected to DB!');
  db.close();
});


const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
});

app.get('/instructions', (req, res) => {
  res.render('instructions');
});

app.get('/quiz', (req, res) => {
  res.render('quiz');
});
app.post('/quiz', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  console.log(ip);
  console.log(req.body);
  // console.log(req.body.age);
  // console.log(req.body.sex);
  // console.log(req.body.country);
  // console.log(req.body.i);
  // console.log(req.body.p);
  // console.log(req.body.c);
  return res.render('results');
});

app.get('/results', (req, res) => {
  res.render('results');
});


app.listen(3000);
