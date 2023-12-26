const form = document.querySelector('.feedback-form');
const savedFeedback = localStorage.getItem('feedback-form-state');
const parsedFeedback = JSON.parse(savedFeedback);

if (savedFeedback !== null) {
  form.elements.email.value = parsedFeedback.email;
  form.elements.message.value = parsedFeedback.message;
}

form.addEventListener('input', evt => {
  const localStorageObj = JSON.stringify({
    email: evt.currentTarget.elements.email.value.trim(),
    message: evt.currentTarget.elements.message.value.trim(),
  });

  localStorage.setItem('feedback-form-state', localStorageObj);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();

  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;
  const obj = {
    email: email.trim(),
    message: message.trim(),
  };

  if (email !== '' && message !== '') {
    console.log(obj);
    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
  } else {
    alert(
      'It looks like you missed filling in some inputs. Please, fill in all the inputs!'
    );
  }
});
