const handleFormSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('age', document.getElementById('age').value);
  localStorage.setItem('country', document.getElementById('country').value);
  localStorage.setItem('income', document.getElementById('income').value);
  localStorage.setItem('race', document.getElementById('race').value);
  localStorage.setItem('religion', document.getElementById('religion').value);
  localStorage.setItem('sex', document.getElementById('sex').value);

  window.location.href = 'quiz';
};

const form = document.getElementById('demographic-form');
form.addEventListener('submit', handleFormSubmit);
