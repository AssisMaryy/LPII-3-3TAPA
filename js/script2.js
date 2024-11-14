
function showAlertAndRedirect() {
    // Exibe o alerta
    alert("Você será redirecionado para outra página.");

    // Redireciona após o alerta ser fechado
    window.location.href = "carrinho.html";
}

function senha(){
    s1 = document.orcamento.senha1.value;
    s2 = document.orcamento.senha2.value;

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

