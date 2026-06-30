function mostrarReceita(tipo){

    let receita = document.getElementById("receita");

    if(tipo === "oniguiri"){
        receita.innerHTML = `
        <h3>🍙 Oniguiri</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>2 xícaras de arroz japonês cozido</li>
            <li>Sal a gosto</li>
            <li>Folhas de alga nori</li>
            <li>Recheio de sua preferência</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Cozinhe o arroz.</li>
            <li>Molhe as mãos e coloque sal.</li>
            <li>Modele o arroz.</li>
            <li>Adicione o recheio.</li>
            <li>Finalize com alga nori.</li>
        </ol>`;
    }

    else if(tipo === "lasanha"){
        receita.innerHTML = `
        <h3>🍝 Lasanha</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>Massa para lasanha</li>
            <li>500g de carne moída</li>
            <li>Molho de tomate</li>
            <li>Presunto</li>
            <li>Queijo mussarela</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Prepare o molho com carne.</li>
            <li>Monte camadas de massa.</li>
            <li>Adicione queijo e presunto.</li>
            <li>Repita as camadas.</li>
            <li>Asse por 40 minutos.</li>
        </ol>`;
    }

    else if(tipo === "macarrao"){
        receita.innerHTML = `
        <h3>🎀 Macarrão de Gravata</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>macarrão gravata</li>
            <li>Molho de tomate</li>
            <li>500g de carne moida</li>
            <li>Alho e cebola</li>
            <li>200g Queijo ralado</li>
            <li>200g de presunto</li>
            <li>1 caixa de creme de leite</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Refogue alho e cebola.</li>
            <li>Faça a carne moida.</li>
            <li>Cozloque o macarrão.</li>
            <li>coloque agua até cobrir tudo com um dedo de altura</li>
            <li>Adicione o molho.</li>
            <li>Misture tudo.</li>
            <li>Finalize com queijo e presunto.</li>
        </ol>`;
    }

    else if(tipo === "feijoada"){
        receita.innerHTML = `
        <h3>🫘 Feijoada</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>500g de feijão preto</li>
            <li>Carne seca</li>
            <li>Linguiça calabresa</li>
            <li>Bacon</li>
            <li>Alho e cebola</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Deixe o feijão de molho.</li>
            <li>Cozinhe o feijão até ficar macio.</li>
            <li>Refogue as carnes.</li>
            <li>Misture tudo e cozinhe.</li>
            <li>Sirva com arroz e farofa.</li>
        </ol>`;
    }
    
    else if(tipo === "strogonoff"){
    receita.innerHTML = `
    <h3>🍛 Strogonoff</h3>
    <h4>Ingredientes:</h4>
    <ul>
        <li>500g de frango em cubos</li>
        <li>1 caixa de creme de leite</li>
        <li>Molho de tomate</li>
        <li>Ketchup e mostarda</li>
        <li>Batata palha</li>
    </ul>
    <h4>Passo a passo:</h4>
    <ol>
        <li>Refogue o frango.</li>
        <li>Adicione molho e temperos.</li>
        <li>Misture o creme de leite.</li>
        <li>Cozinhe até engrossar.</li>
        <li>Sirva com arroz e batata palha.</li>
    </ol>`;
    }

    else if(tipo === "brigadeiro"){
    receita.innerHTML = `
    <h3>🍫 Brigadeiro</h3>
    <h4>Ingredientes:</h4>
    <ul>
        <li>1 lata de leite condensado</li>
        <li>2 colheres de chocolate em pó</li>
        <li>1 colher de manteiga</li>
        <li>Chocolate granulado</li>
    </ul>
    <h4>Passo a passo:</h4>
    <ol>
        <li>Misture tudo na panela.</li>
        <li>Cozinhe até desgrudar.</li>
        <li>Deixe esfriar.</li>
        <li>Faça bolinhas e passe no granulado.</li>
    </ol>`;
    }

    else if(tipo === "cookies"){
        receita.innerHTML = `
        <h3>🍪 Cookies</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>2 xícaras de farinha</li>
            <li>1 ovo</li>
            <li>Chocolate em gotas</li>
            <li>Manteiga</li>
            <li>Açúcar</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Misture os ingredientes.</li>
            <li>Modele os cookies.</li>
            <li>Leve ao forno.</li>
            <li>Asse até dourar.</li>
        </ol>`;
    }

    else if(tipo === "bolo"){
        receita.innerHTML = `
        <h3>🥕 Bolo de Cenoura</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>Cenoura</li>
            <li>Ovos</li>
            <li>Farinha de trigo</li>
            <li>Açúcar</li>
            <li>Chocolate para cobertura</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Bata os ingredientes no liquidificador.</li>
            <li>Leve ao forno.</li>
            <li>Faça a cobertura de chocolate.</li>
            <li>Sirva.</li>
        </ol>`;
    }

    else if(tipo === "suspiro"){
        receita.innerHTML = `
        <h3>☁️ Suspiro</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>Claras de ovo</li>
            <li>Açúcar</li>
            <li>Essência de baunilha</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Bata as claras em neve.</li>
            <li>Adicione açúcar aos poucos.</li>
            <li>Modele os suspiros.</li>
            <li>Asse em fogo baixo.</li>
        </ol>`;
    }

    else if(tipo === "brownie"){
        receita.innerHTML = `
        <h3>🍫 Brownie</h3>
        <h4>Ingredientes:</h4>
        <ul>
            <li>Chocolate meio amargo</li>
            <li>Manteiga</li>
            <li>Ovos</li>
            <li>Açúcar</li>
            <li>Farinha de trigo</li>
        </ul>
        <h4>Passo a passo:</h4>
        <ol>
            <li>Derreta o chocolate.</li>
            <li>Misture os ingredientes.</li>
            <li>Asse até ficar úmido por dentro.</li>
            <li>Espere esfriar e sirva.</li>
        </ol>`;
    }
}

let likes = 0;
let deslikes = 0;
let comentarios = 0;

function curtir(){
    likes++;
    document.getElementById("likes").innerText = likes;
}

function descurtir(){
    deslikes++;
    document.getElementById("deslikes").innerText = deslikes;
}

function comentar(){
    comentarios++;
    document.getElementById("comentarios").innerText = comentarios;

    let texto = prompt("Digite seu comentário:");

    if(texto){
        alert("Comentário enviado: " + texto);
    }
}
