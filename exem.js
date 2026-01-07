function validarFormulario(){
    console.log("Iniciando validação do formulário...")

    let nome = document.getElementById("nome");
    let email =document.getElementById("email");
    let senha =document.getElementById("senha");
    let confirmarSenha =document.getElementById("confirmar-senha");
    let telefone =document.getElementById("telefone");
    let dataNascimento =document.getElementById("data-nascimento");
    let termos =document.getElementById("termos");
    let estado =document.getElementById("estado");

    let nomeErro =document.getElementById("nome-error");
    let emailErro =document.getElementById("email-error");
    let senhaErro =document.getElementById("senha-error");
    let confirmarErro =document.getElementById("confirmar-error");
    let telefoneErro =document.getElementById("telefone-error");
    let dataNascimentoErro =document.getElementById("data-error");
    let termosErro =document.getElementById("termos-error");
    let estadoErro= document.getElementById("estado-error");

    let formularioValido = true;

    if(nome.value.trim()===""){
        nomeErro.textContent="O nome é obrigatório."
        nome.style.border= "2px solid red"
        formularioValido = false;
    }else{
        nomeErro.textContent="";
        nome.style.border= "2px solid green"
    }

    if(email.value.trim()===""){
        emailErro.textContent="Digite um email válido";
        email.style.border="2px solid red";
        formularioValido= false;
    }else if (email.value.indexOf("@") === -1 || email.value.indexOf(".") === -1) {
        //Então, esse if serve para verificar se o email é inválido, de forma bem simples.
        // Validação simples sem regex
        emailErro.textContent = "Digite um e-mail válido.";
        email.style.border = "2px solid red";
        formularioValido = false;}
    else{
        emailErro.textContent="";
        email.style.border="2px solid green";
    }

    if(senha.value.trim()===""){
        senhaErro.textContent= "A senha é obrigatória.";
        senha.style.border="2px solid red";
        formularioValido = false;
    }else if(senha.value.length<6){
        senhaErro.textContent="A senha deve conter 6 caracteres.";
        senha.style.border="2px solid red";
        formularioValido= false;
    }else{
        senhaErro.textContent= "";
        senha.style.border= "2px solid green"
    }

    if(confirmarSenha.value.trim()===""){
        confirmarErro.textContent="Confirme sua senha.";
        confirmarSenha.style.border="2px solid red";
        formularioValido= false;
    }else if(confirmarSenha.value !== senha.value){
        confirmarErro.textContent=" As senhas não coincidem";
        confirmarSenha.style.border="2px solid red";
        formularioValido= false;
    }else{
        confirmarErro.textContent="";
        confirmarSenha.style.border="2px solid green";
    }

    if(telefone.value.trim()===""){
        telefoneErro.textContent="O telefone é obrigatório."
        telefone.style.border="2px solid red";
        formularioValido= false;
    }else if(telefone.value.length<11){
        telefoneErro.textContent="O telefone deve conter 11 numeros."
        telefone.style.border="2px solid red";
        formularioValido= false;
    }else{
        telefoneErro.textContent="";
        telefone.style.border=" 2px solid green";
    }

    if(dataNascimento.value.trim()===""){
        dataNascimentoErro.textContent="Informe uma data de nascimento.";
        dataNascimento.style.border="2px solid red";
        formularioValido= false;
    }else{
        dataNascimentoErro.textContent="";
        dataNascimento.style.border="2px solid green";
    }

    if(!termos.checked){
        termosErro.textContent="Você deve aceitar os termos";
        formularioValido= false;
    }else{
        termosErro.textContent="";
    }

    if (estado.value.trim() === "") {
    estadoErro.textContent = "O estado é obrigatório.";
    estado.style.border = "2px solid red";
    formularioValido = false;
    } else {
    estadoErro.textContent = "";
    estado.style.border = "2px solid green";
    }


    if(!formularioValido){
        console.log("formulario inválido.")
        return false;
    }else{
        console.log("Formulário válido e enviado com sucesso!")
        alert(" Cadastro realizado com sucesso!")
    }

}

