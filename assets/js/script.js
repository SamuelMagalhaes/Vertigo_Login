/* VARIABLES */
let email = document.querySelector('#email')

let eye = document.querySelector('.eye-button')
let input = document.querySelector('#password')

let btn_signin = document.querySelector('#btn-signin')
let email_error = document.querySelector('#email-error')

/* EVENTS */
eye.addEventListener('click', ()=>{
  if(input.type == 'password'){
    input.setAttribute('type', 'text')
    eye.setAttribute('src', '../assets/img/eye-off.svg')
  } else {
    input.setAttribute('type', 'password')
    eye.setAttribute('src', '../assets/img/eye.svg')
  }
})

btn_signin.addEventListener('click', (e)=>{
  e.preventDefault();

  let user = email.value.substring(0, email.value.indexOf("@"))
  let domain = email.value.substring(email.value.indexOf("@")+1, email.value.length) 

  if(
    (!email.value) ||
    (user.length < 3) ||
    (user.search(" ") > -1) ||
    (domain.length < 3) ||
    (domain.search(".") < 0)
  ){
    email_error.classList.add('visible')
  } else {
    console.log(user)
    console.log(domain)
    email_error.classList.remove('visible')
  }
})

/* FUNCTIONS */
