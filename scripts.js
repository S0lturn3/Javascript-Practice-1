var nome = [];
var idade = [];
var profissao = [];

// Criado um objeto que armazena as informações
let dados = {nome, idade, profissao};

// As informações do objeto são convertidas para o Array abaixo
var tablerow = dados;

//#region Funções
try {
    // Recebe os dados inseridos nos campos de input e os guarda nops Arrays inicializados anteriormente;
    function sendData() {

        // Valores dos inputs serão guardados nas variáveis
        var nomein = document.getElementById('name').value;
        var idadein = document.getElementById("age").value;
        var profissaoin = document.getElementById("profession").value;

        // Verificação se todos os campos foram preenchidos
        if (nomein == "" || idadein == "" || profissaoin == "") {
            alert("Preencha todos os campos de dados para prosseguir!");
        } 
        else {
            // O statement "<array/object>.push(<variavel>);" serve para adicionar o valor da variável no array
            this.nome.push(nomein);                     // Adiciona os valores na Coluna 'nome' do Objeto 'tablerow'
            this.idade.push(idadein);                   // Adiciona os valores na Coluna 'idade' do Objeto 'tablerow'
            this.profissao.push(profissaoin);           // Adiciona os valores na Coluna 'profissao' do Objeto 'tablerow'
            
            // Ao clicar no botão de 'Submit' os valores serão salvos e os campos serão limpos para armazenar os próximos dados mais rapidamente
            document.getElementById('name').value = '';
            document.getElementById('age').value = '';
            document.getElementById('profession').value = '';
        }
        
        // showData(tablerow);
        console.log(tablerow);
        return false;
    }
} catch (err) {
    alert("Não foi possível realizar a operação!");
}


// Mostra os dados do Form na tabela ao lado
// function showData(tablerow) {}

//#endregion

