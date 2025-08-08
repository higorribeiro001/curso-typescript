// npm i validator --legacy-peer-deps
// npm i @types/validator -D
import isEmail from "validator/lib/isEmail";

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLInputElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

const submitEnventFn = (event: Event) => { //funcao normal permite utilizar o this por ser do escopo local, se fosse arrow-function o this viria do escopo global
  event.preventDefault();
  const target = event.target as HTMLFormElement;
  hideErrorMessages(target);
  checkFormEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkEqualPasswords(password, password2);
  if (shouldSendForm(target)) console.log('FORMULÁRIO ENVIADO');
}

form.addEventListener('submit', submitEnventFn);

function checkFormEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, 'Este campo não pode ficar vazio');
  })
}

function checkEmail(input: HTMLInputElement): void {
  if (!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkEqualPasswords(password: HTMLInputElement, password2: HTMLInputElement) {
  if (password.value !== password2.value) {
    showErrorMessage(password, 'Senhas não batem');
    showErrorMessage(password2, 'Senhas não batem');
  }
}

function hideErrorMessages(form: HTMLFormElement): void {
  form.querySelectorAll('.'+SHOW_ERROR_MESSAGES).forEach(
    item => item.classList.remove(SHOW_ERROR_MESSAGES)
  );
}
function showErrorMessage(input: HTMLInputElement, msg: string): void {
  // const formFields = document.querySelector('.form-fields') as HTMLDivElement; //vamos tentar puxar pelo pai do input
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLFormElement): boolean {
  let send = true;
  form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(() => send = false);

  return send;
}
