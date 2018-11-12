const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const pug = require('pug');

const {
  MongoClient,
} = require('mongodb');

const url = 'mongodb://localhost:27017/3axes';

// MongoClient.connect(url, (err, database) => {
//   if (err) {
//     console.log('Could not connected to DB!');
//   }
//   console.log('Connected to DB!');
//   const db = database.db('3axes');

//   db.collection('results').remove({});
//   console.log('DB cleared');
// });

// MongoClient.connect(url, (err1, database) => {
//   if (err1) throw err1;
//   const db = database.db('3axes');

//   db.createCollection('results', (err2) => {
//     if (err2) throw err2;
//     console.log('Collection created!');
//     database.close();
//   });
// });

const app = express();
app.enable('trust proxy');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({
  extended: true,
}));
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
  const user = {
    ip: req.ip,
    age: req.body.age,
    country: req.body.country,
    income: req.body.income,
    race: req.body.race,
    religion: req.body.religion,
    sex: req.body.sex,
  };
  MongoClient.connect(url, (clientError, database) => {
    if (clientError) throw clientError;
    const db = database.db('3axes');

    db.collection('results').find({
      'results.users.ip': req.ip,
    }).toArray((err, results) => {
      if (err) throw err;
      if (results.length > 0) {
        if (
          results[0].results.identity !== req.body.identity ||
          results[0].results.property !== req.body.property ||
          results[0].results.society !== req.body.society
        ) {
          db.collection('results').update(results[0], {
            $pull: {
              'results.users': {
                ip: req.ip,
              },
            },
          });
          db.collection('results').update({
            'results.identity': req.body.identity,
            'results.property': req.body.property,
            'results.society': req.body.society,
          }, {
            $push: {
              'results.users': user,
            },
          }, {
            upsert: true,
            multi: false,
          });
        }
      } else {
        db.collection('results').update({
          'results.identity': req.body.identity,
          'results.property': req.body.property,
          'results.society': req.body.society,
        }, {
          $push: {
            'results.users': user,
          },
        }, {
          upsert: true,
          multi: false,
        });
      }
    });
  });

  return res.redirect('results');
});

app.get('/results', (req, res) => {
  MongoClient.connect(url, (err1, database) => {
    if (err1) throw err1;
    const db = database.db('3axes');

    db.collection('results').find({}, {
      _id: 0,
    }).toArray((err2, results) => {
      if (err2) throw err2;

      const resultsE = results;
      resultsE.forEach((singleResult) => {
        singleResult.results.count = singleResult.results.users.length;
        singleResult.results.users.forEach((users) => {
          users.ip = '';
          // console.log(singleResult.results);
          // console.log(singleResult.results.users);
        });
      });
      // console.log(resultsE);

      res.render('results', {
        all: JSON.stringify(resultsE),
      });
      res.end();
      database.close();
    });
  });
});

app.post('/results', (req, res) => {
  MongoClient.connect(url, (err1, database) => {
    if (err1) throw err1;
    const db = database.db('3axes');

    db.collection('results').find({
      'results.users.age': {
        $gte: req.body.ageMin,
        $lte: req.body.ageMax,
      },
      'results.users.country': (req.body.country === 'all') ? /^/ : req.body.country,
      'results.users.income': (req.body.income === 'all') ? /^/ : req.body.income,
      'results.users.race': (req.body.race === 'all') ? /^/ : req.body.race,
      'results.users.religion': (req.body.religion === 'all') ? /^/ : req.body.religion,
      'results.users.sex': (req.body.sex === 'all') ? /^/ : req.body.sex,
    }, {
      _id: 0,
    }).toArray((err2, results) => {
      if (err2) throw err2;
      const resultsE = results;
      // console.log(resultsE);

      resultsE.forEach((singleResult) => {
        singleResult.results.count = singleResult.results.users.length;
        singleResult.results.users.forEach((users) => {
          users.ip = '';
          console.log(singleResult.results);
          console.log(singleResult.results.users);
        });
      });

      database.close();
      return res.render('results', {
        all: JSON.stringify(resultsE),
      });
    });
  });
});

app.listen(3000);
