const doc = window.document;

let maxIdentity = 0;
let maxProperty = 0;
let maxSociety = 0;
let i = 0;
let p = 0;
let s = 0;
let qn = 0;
let previousAnswer = null;

for (let i = 0; i < questions.length; i++) {
  maxIdentity += Math.abs(questions[i].e.i);
  maxProperty += Math.abs(questions[i].e.p);
  maxSociety += Math.abs(questions[i].e.s);
}


function post(path, params) {
  const form = document.createElement('form');
  form.setAttribute('method', 'post');
  form.setAttribute('action', path);

  for (const key in params) {
    if (params.hasOwnProperty(key)) {
      const hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);
      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}


function calcScore(score, max) {
  let n = (100 * (max + score)) / (2 * max);
  if (n < 50) n -= 1;
  return Math.round((n) / 10) * 10;
}

function results() {
  localStorage.setItem('i', calcScore(i, maxIdentity));
  localStorage.setItem('p', calcScore(p, maxProperty));
  localStorage.setItem('c', calcScore(s, maxSociety));

  const age = localStorage.getItem('age');
  const country = localStorage.getItem('country');
  const income = localStorage.getItem('income');
  const race = localStorage.getItem('race');
  const religion = localStorage.getItem('religion');
  const sex = localStorage.getItem('sex');
  const identity = localStorage.getItem('i');
  const property = localStorage.getItem('p');
  const society = localStorage.getItem('c');

  post('/quiz', {
    age, country, income, race, religion, sex, identity, property, society,
  });
}

function initQuestion() {
  doc.getElementById('question-text').innerHTML = questions[qn].q;
  doc.getElementById('question-number').innerHTML = `Question ${qn + 1} of ${questions.length}`;
  if (previousAnswer == null) {
    doc.getElementById('back_button').style.display = 'none';
    doc.getElementById('back_button_off').style.display = 'block';
  } else {
    doc.getElementById('back_button').style.display = 'block';
    doc.getElementById('back_button_off').style.display = 'none';
  }
}

function nextQuestion(mult) {
  i += mult * questions[qn].e.i;
  p += mult * questions[qn].e.p;
  s += mult * questions[qn].e.s;
  qn += 1;
  previousAnswer = mult;
  if (qn < questions.length) {
    initQuestion();
  } else {
    results();
  }
}

function prevQuestion() {
  if (previousAnswer == null) {
    return;
  }
  qn -= 1;
  i -= previousAnswer * questions[qn].e.i;
  p -= previousAnswer * questions[qn].e.p;
  s -= previousAnswer * questions[qn].e.s;
  previousAnswer = null;
  initQuestion();
}

initQuestion();
