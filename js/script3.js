

document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha1 = document.getElementById('senha1').value.trim();
    const senha2 = document.getElementById('senha2').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const erroNome = document.getElementById('erroNome');
    const erroEmail = document.getElementById('erroEmail');
    const erroSenha1 = document.getElementById('erroSenha1');
    const erroSenha2 = document.getElementById('erroSenha2');
    const erroTelefone = document.getElementById('erroTelefone');
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroSenha1.textContent = '';
    erroSenha2.textContent = '';
    erroTelefone.textContent = '';


    let formularioValido = true;

    
    if (nome === '') {
        erroNome.textContent = 'O nome é obrigatório.';
        formularioValido = false;
    }

    if (email === '') {
        erroEmail.textContent = 'O email é obrigatório.';
        formularioValido = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        erroEmail.textContent = 'O email deve ser válido.';
        formularioValido = false;
    }

    if (senha1 === '') {
        erroSenha1.textContent = 'A senha é obrigatória.';
        formularioValido = false;
    } else if (senha1.length < 6) {
        erroSenha1.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        formularioValido = false;
    }
    if (senha2 === '') {
        erroSenha2.textContent = 'A senha é obrigatória.';
        formularioValido = false;
    } else if (senha2.length < 6) {
        erroSenha2.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        formularioValido = false;
    }
    if(telefone === ''){
        erroTelefone.textContent ='O telefone é obrigatório.'
        formularioValido = false;
    }else if(telefone.length < 9) {
        erroTelefone.textContent = 'O telefone deve ter 9 digitos.';
        formularioValido = false;
    }
    
    if (formularioValido) {
      
        alert('Formulário enviado com sucesso!');
        window.location.href = "carrinho.html";
        return false;
    }
});
function senha(){
    s1 = document.cadastro.senha1.value;
    s2 = document.cadastro.senha2.value;

    if(s1 != s2){
        document.getElementById('msg').style.display = "block";

    }
    else{
        document.getElementById('msg').style.display = "none";
        
    }
    
    
}
function mascara_cpf(obj){

    if(obj.value.length == 3){
        obj.value += "."
    }
    else if(obj.value.length == 7){
        obj.value += "."
    }
    else if(obj.value.length == 11){
        obj.value += "-"
    }

}

function mascara_tel(obj){
    if(obj.value.length == 0){
        obj.value += "("
    }
    else if(obj.value.length == 3){
        obj.value += ")"
    }
    else if(obj.value.length == 9){
        obj.value += "-"
    }
}

function salto(campo,digito){
    
    if(campo == "cpf"){
        if(digito.length>13){
            document.orcamento.telefone.focus();
        }
    }
    if(campo == "telefone"){
        if(digito.length>13){
            document.orcamento.pagamento.focus();
        }
}
}

function somente_numero(e){
    tecla = (window.event)?event.keyCode:e.which;

    if((tecla >= 48 && tecla <= 57) || (tecla >=96 && tecla <= 105) || (tecla == 8) (tecla == 37) || (tecla == 39) || (tecla == 46)){
        return true;
    }
    else{
        return false;
    }

}