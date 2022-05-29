import throttle from 'lodash.throttle';

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

const form = document.querySelector('.feedback-form');
updateOutput();
form.addEventListener('input', throttle(saveRecord, 500))


function saveRecord(ent) {
    const record = {
        email: form.elements.email.value,
        message: form.elements.message.value,
    };

    save('feedback-form-state', record);
  
}
function updateOutput() {
    if(localStorage.getItem('feedback-form-state') === null){
        return;
    } else {
        form.elements.email.value = localStorage.getItem('feedback-form-state').email || '';
        form.elements.message.value = localStorage.getItem('feedback-form-state').message || '';
    }
}

form.addEventListener('submit', submitForm);
function submitForm(event) {
    event.preventDefault();
    form.reset();
    console.log(load('feedback-form-state'));
     localStorage.removeItem('feedback-form-state');
}
