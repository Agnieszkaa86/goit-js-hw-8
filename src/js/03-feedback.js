import throttle from 'lodash.throttle';

const key = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
updateOutput();
form.addEventListener('input', throttle(saveRecords, 500));

const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

function saveRecords(evt) {
  const record = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(key, JSON.stringify (record));
  updateOutput();
  form.reset();
}

function updateOutput() {
  if (JSON.parse(localStorage.getItem(key) === null)) {
    return;
  } else {
    record.email = JSON.parse(localStorage.getItem(key)).email || "";
    record.message = Json.parse(localStorage.getItem(key)).message || "";
  }
}
updateOutput();
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(load(key));
  localStorage.removeItem('key');
  form.reset();
}
/*function saveRecords () {
    const records = {
        email: email.value,
        message: message.value,
    };

     localStorage.setItem('feedback-form-state', JSON.stringify(records))
  
}
function getRecords() {
  let object = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (object === null){
        return;
    } else {
      email.value = object.email;
      message.value = object.message; 
    }
}
getRecords();

form.addEventListener('submit', submitForm);

function submitForm(evt) {
    evt.preventDefault();
    form.reset();
    console.log(localStorage.getItem('feedback-form-state'));
     localStorage.removeItem('feedback-form-state');
}
*/