/*
Case Sensitive = reconhece letras maiusculas e minusculas

por tag: getElementByTagName()
por id: getElementById()
por nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector ("assunto")
let nomeOk = false
let EmailOk = false
let AssuntoOk = false

nome.style.width = "100%"
email.style.width = "100%"

function validaNome() {

let txtNome = document.querySelector("#textNome")
if (nome.value.lenght <= 3){
   txtNome.innerHTML = "Nome invalido"
   txtNome.style.color = "red"
      } else {
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
      }
      
    }

function validaEmail(){
let txtEmail = Document.querySelector("#email")

if (email.value.indexof("@") == -1 || email.value.indexof(".") ){
txtEmail.innerHTML = "E-mail inválido"
txtEmail.style.color = "red"
} else {
  txtEmail.innerHTML = "E-mail válido"
txtEmail.style.color = "green"
emailOk = true
  }
}

function validaAssunto(){
  let txtAssunto =document.querySelector("#assunto")

  if (assunto.value.lenght >= 100){
    textAssunto.innerHTML = "Texto muito grande, digite no máximo 100 caracteres"
    txtAssunto.style.color = "red"
    textAssunto.style.display = "block"
    assuntoOk = true
  } else {
    txtAssunto.style.display = "none"
    
  }
}

function enviar (){
  if (nomeOk == true && assuntoOk == true ){
    alert ("Formulário enviado com sucesso!")
  } else {
    alert ("Preencha o formulario corretamente antes de enviar")
  }
}
