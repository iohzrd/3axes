const handleFormSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('age', document.getElementById('age').value);
  localStorage.setItem('sex', document.getElementById('sex').value);
  localStorage.setItem('country', document.getElementById('country').value);

  window.location.href = 'quiz';
};

const form = document.getElementById('demographic-form');
form.addEventListener('submit', handleFormSubmit);
