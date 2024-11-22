const form = document.getElementById('form')
const email = document.getElementById('email')
const password = document.getElementById('password')

form.addEventListener("submit", (Event) =>{
  Event.preventDefault();

  checkForm();
})

email.addEventListener("blur", () =>{
  checkInputEmail();
})

password.addEventListener("blur", () =>{
  checkInputPassword();
})

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue === ""){
    errorInput(email, "Email obrigatório!")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }
}

function checkInputPassword(){
  const passwordValue = password.value;

  if(passwordValue === ""){
    errorInput(password, "Senha obrigatória!")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-content"
  }
}

function checkForm(){
  checkInputEmail();
  checkInputPassword();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("Sucesso");

  }
}

function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"
}
