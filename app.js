const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/3axes';

MongoClient.connect(url, (err, db) => {
  if (err) { console.log('Could not connected to DB!'); }
  console.log('Connected to DB!');
  db.collection('results').remove({});
  console.log('DB cleared');
});

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index');
  res.end();
});

app.get('/instructions', (req, res) => {
  res.render('instructions');
  res.end();
});

app.get('/quiz', (req, res) => {
  res.render('quiz');
  res.end();
});
app.post('/quiz', (req, res) => {
  quizResults = { ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress, results: req.body };
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    db.collection('results').update(
      { ip: quizResults.ip },
      quizResults,
      {
        upsert: true,
        multi: false,
      },
    );
  });
  return res.redirect('results');
});

app.get('/results', (req, res) => {
  // res.render('results');

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const r = db.collection('results');
    r.find({}, { results: 1, _id: 0 }).toArray((err, result) => {
      if (err) throw err;

      console.log({ all: JSON.stringify(result) });
      res.render('results', { all: JSON.stringify(result) });
      res.end();
      db.close();
    });
  });
});

app.listen(3000);
