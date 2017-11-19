const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const { MongoClient } = require('mongodb');

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
  MongoClient.connect(url, (clientError, db) => {
    if (clientError) throw clientError;
    db.collection('results').find({
      'results.users.ip': req.connection.remoteAddress,
    }, { _id: 0 }).toArray((err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        console.log('DELETE');
        console.log(results);
        console.log(results[0].results.users);
        db.collection('results').update(
          results[0],
          { $pull: { 'results.users': { ip: req.connection.remoteAddress } } },

        );
      }
    });
  });

  MongoClient.connect(url, (clientError, db) => {
    if (clientError) throw clientError;
    db.collection('results').update(
      {
        'results.identity': req.body.identity,
        'results.property': req.body.property,
        'results.society': req.body.society,
      },
      {
        results: {
          identity: req.body.identity,
          property: req.body.property,
          society: req.body.society,
          users: [{
            ip: req.connection.remoteAddress,
            age: req.body.age,
            country: req.body.country,
            sex: req.body.sex,
          }],
        },
      },
      {
        upsert: true,
        multi: false,
      },
    );
  });

  MongoClient.connect(url, (clientError, db) => {
    if (clientError) throw clientError;
    db.collection('results').find({
      'results.identity': req.body.identity,
      'results.property': req.body.property,
      'results.society': req.body.society,
    }, { _id: 0 }).toArray((err, results) => {
      if (err) throw err;
      console.log('SPECIFIC RESULTS');
      console.log(results);
    });
  });

  MongoClient.connect(url, (clientError, db) => {
    if (clientError) throw clientError;
    db.collection('results').find({}, { _id: 0 }).toArray((err, results) => {
      if (err) throw err;
      console.log('ALL RESULTS');
      console.log(results);
    });
  });

  return res.redirect('results');
});


app.get('/results', (req, res) => {
  MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const r = db.collection('results');
    r.find({}, { _id: 0 }).toArray((err, results) => {
      if (err) throw err;

      const resultsE = results;
      // console.log(resultsE);

      resultsE.forEach((singleResult) => {
        singleResult.results.count = singleResult.results.users.length;
        singleResult.results.users.forEach((users) => {
          users.ip = '';
          console.log(singleResult.results.users);
        });
      });

      res.render('results', { all: JSON.stringify(resultsE) });
      res.end();
      db.close();
    });
  });
});
app.post('/results', (req, res) => {
  let country = '';
  let sex = '';
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
    }, { _id: 0 }).toArray((err, results) => {
      if (err) throw err;
      const resultsE = results;
      // console.log(resultsE);

      resultsE.forEach((singleResult) => {
        r.count({
          'results.property': singleResult.results.property,
          'results.identity': singleResult.results.identity,
          'results.society': singleResult.results.society,
        }, (err, count) => {
          if (err) throw err;
          singleResult.results.count = singleResult.results.users.length;
          console.log(singleResult.results.count);
        });
      });

      db.close();
      return res.render('results', { all: JSON.stringify(resultsE) });
    });
  });
});

app.listen(3000);
