resultado.style.visibility = 'hidden'
function livro(){
    livros.innerHTML = null
    resposta.innerHTML = null
        
        let livro01 = (livro1.value)
        let preco01 = 44.90
        let total1 = livro01 * preco01
    
        let livro02 = (livro2.value)
        let preco02 = 35.83
        let total2 = livro02 * preco02
    
        let livro03 = (livro3.value)
        let preco03 = 36.22
        let total3 = livro03 * preco03
    
        let livro04 = (livro4.value)
        let preco04 = 61.50
        let total4 = livro04 * preco04
    
        let livro05 = (livro5.value)
        let preco05 = 33.95
        let total5 = livro05 * preco05
        
        let livro06 = (livro6.value)
        let preco06 = 24
        let total6 = livro06 * preco06
        
        let geral = (total1 + total2 + total3 + total4 + total5 + total6)
    
        if(livro01 > 0) {
            livros.innerHTML += `<li>Você adicionou no seu carrinho , ${livro01} livro(s) chamados "Diário de uma paixão" = R$ ${total1.toFixed(2)}</li>`
        }
         if(livro02 > 0) {
            livros.innerHTML += `<li>Você adicionou no seu carrinho  ,${livro02} livro(s)  chamados "É assim que acaba" = R$ ${total2.toFixed(2)}</li>`
        }
         if(livro03 > 0){
            livros.innerHTML += `<li>Você adicionou no seu carrinho  ,${livro03} livro(s) chamados "Eu e esse meu coração" = R$ ${total3.toFixed(2)}</li>`
        }
         if(livro04> 0){ 
            livros.innerHTML += `<li>Você adicionou no seu carrinho ,${livro04} livro(s)  chamados "O fabricante de lágrimas" = R$ ${total4.toFixed(2)}</li>`
        }
         if(livro05 > 0){
            livros.innerHTML += `<li>Você adicionou no seu carrinho  ,${livro05} livro(s)  chamados "Por lugares incriveis" = R$ ${total5.toFixed(2)}</li>`
        }
         if(livro06 > 0){
            livros.innerHTML += `<li>Você adicionou no seu carrinho  ,${livro06} livro(s) chamados "Vermelho,branco,sangue e azul" = R$ ${total6.toFixed(2)}</li>`
        }
        
        resposta.innerHTML  = `<span id="cor">O valor total será de R$ ${geral.toFixed(2)}<span>`
        resultado.style.visibility = 'visible'
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
    
        if(campo == "telefone"){
            if(digito.length>13){
                document.orcamento.pagamento.focus();
            }
    }
    }

    function validar () {
        let nome = document.nome.value;
        let email = document.email.value;
        let tel = document.telefone.value;
        console.log(`${nome}`);
    }