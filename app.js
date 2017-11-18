const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/3axes';

// MongoClient.connect(url, (err, db) => {
//   if (err) { console.log('Could not connected to DB!'); }
//   console.log('Connected to DB!');
//   db.collection('results').remove({});
//   console.log('DB cleared');
// });

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
    r.find({}, { results: 1, _id: 0 }).toArray((err, results) => {
      if (err) throw err;

      for (let index = 0; index < results.length; index++) {
        const singleResult = results[index];
        console.log(singleResult);
        r.count(singleResult, (err, count) => {
          if (err) throw err;
          console.log(count);
        });
      }

      // console.log({ all: JSON.stringify(results) });
      res.render('results', { all: JSON.stringify(results) });
      res.end();
      db.close();
    });
  });
});
app.post('/results', (req, res) => {
  let country = '';
  let sex = '';
  console.log(req.body.ageMin);
  console.log(req.body.ageMax);
  console.log(req.body.country);
  if (req.body.country === 'all') {
    country = /^/;
  } else {
    country = req.body.country;
  }
  if (req.body.sex === 'all') {
    sex = /^/;
  } else {
    sex = req.body.sex;
  }

  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const r = db.collection('results');
    r.find({
      'results.age': { $gte: req.body.ageMin, $lte: req.body.ageMax },
      'results.country': country,
      'results.sex': sex,
    }, { results: 1, _id: 0 }).toArray((err, results) => {
      if (err) throw err;
      console.log(results);

      for (let index = 0; index < results.length; index++) {
        const singleResult = results[index];
        console.log(singleResult);
        r.count(singleResult, (err, count) => {
          if (err) throw err;
          console.log(count);
        });
      }

      // console.log({ all: JSON.stringify(results) });
      res.render('results', { all: JSON.stringify(results) });
      res.end();
      db.close();
    });
  });
});

app.listen(3000);
