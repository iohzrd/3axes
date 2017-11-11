const doc = window.document;

let maxIdentity = 0;
let maxProperty = 0;
let maxCulture = 0;
let idty = 0;
let prop = 0;
let cult = 0;
let qn = 0;
let previousAnswer = null;

for (let i = 0; i < questions.length; i++) {
  maxIdentity += Math.abs(questions[i].effect.idty);
  maxProperty += Math.abs(questions[i].effect.prop);
  maxCulture += Math.abs(questions[i].effect.cult);
}


function post(path, params, method) {
  method = method || 'post';
  const form = document.createElement('form');
  form.setAttribute('method', method);
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
  return Math.round(((100 * (max + score)) / (2 * max)).toFixed(1));
}

function results() {
  localStorage.setItem('i', calcScore(idty, maxIdentity));
  localStorage.setItem('p', calcScore(prop, maxProperty));
  localStorage.setItem('c', calcScore(cult, maxCulture));

  const age = localStorage.getItem('age');
  const sex = localStorage.getItem('sex');
  const country = localStorage.getItem('country');
  const i = localStorage.getItem('i');
  const p = localStorage.getItem('p');
  const c = localStorage.getItem('c');

  post('/quiz', {
    age, sex, country, i, p, c,
  });
}

function initQuestion() {
  doc.getElementById('question-text').innerHTML = questions[qn].question;
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
  idty += mult * questions[qn].effect.idty;
  prop += mult * questions[qn].effect.prop;
  cult += mult * questions[qn].effect.cult;
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
  idty -= previousAnswer * questions[qn].effect.idty;
  prop -= previousAnswer * questions[qn].effect.prop;
  cult -= previousAnswer * questions[qn].effect.cult;
  previousAnswer = null;
  initQuestion();
}

initQuestion();
