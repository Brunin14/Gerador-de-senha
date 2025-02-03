let Slider = document.querySelector("#slider");
let Button = document.querySelector("#botao");

let TamanhoSenha = document.querySelector("#valor");
let Senha = document.querySelector("#senha");

let ContainerSenha = document.querySelector("#container-senha");

let abc = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*';
let novaSenha = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
}


function GerarSenha(){

  let pass = '';
  for(let i = 0, n = abc.length; i < slider.value; ++i){
    pass += abc.charAt(Math.floor(Math.random() * n));
  }
  
  console.log(pass)
  ContainerSenha.classList.remove("hide");
  Senha.innerHTML = pass;
  novaSenha = pass;
}

function CopiarSenha(){
  alert("Senha copiada com sucesso!")
  navigator.clipboard.writeText(novaSenha);
}