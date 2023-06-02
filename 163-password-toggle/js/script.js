const togglePassword=document.querySelector('#togglePassword');
const password=document.querySelector('#password');

togglePassword.addEventListener('click',(e)=>{
  const type=password.getAttribute('type')==='password'?'text':'password';
  password.setAttribute('type',type);

  e.target.classList.toggle('bi-eye');
})

const form=document.querySelector('form');
form.addEventListener('submit',(e)=>{
  e.preventDefault();
})