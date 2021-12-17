var nome = [];
var idade = [];
var profissao = [];

//  Criado um objeto que armazena as informações
// let dados = [
//     {nome:[], idade:[], profissao:[]}
// ];

//  As informações do objeto são convertidas para o Array abaixo
var tablerow = [{ nome, idade, profissao }];


//  #region Funções
//  Recebe os dados inseridos nos campos de input e os guarda nops Arrays inicializados anteriormente;
function sendData() {
    //  Valores dos inputs serão guardados nas variáveis
    var nomein = document.getElementById('name').value;
    var idadein = document.getElementById('age').value;
    var profissaoin = document.getElementById("profession").value;
    //  Verificação se todos os campos foram preenchidos
    if (nomein == "" || idadein == "" || profissaoin == "") {
        alert("Preencha todos os campos de dados para prosseguir!");
    }
    else {
        //  O statement "<array/object>.push(<variavel>);" serve para adicionar o valor da variável no array
        tablerow.nome.push(nomein);
        tablerow.idade.push(idadein);
        tablerow.profissao.push(profissaoin);
        //  dados.nome.push(nomein);                     Adiciona os valores na Coluna 'nome' do Objeto 'tablerow'
        //  dados.idade.push(idadein);                   Adiciona os valores na Coluna 'idade' do Objeto 'tablerow'
        //  dados.profissao.push(profissaoin);           Adiciona os valores na Coluna 'profissao' do Objeto 'tablerow'
        
        //  Ao clicar no botão de 'Submit' os valores serão salvos e os campos serão limpos para armazenar os próximos dados mais rapidamente
        // document.getElementById('name').value = '';
        // document.getElementById('age').value = '';
        // document.getElementById('profession').value = '';
        //  Alerta confirmando que as informações foram salvas
        // alert("Informações inseridas!");
    }
    
    // showData(tablerow);
    console.log(dados);
    return false;
}



//  Mostra os dados do Form na tabela ao lado
let btnGet = document.querySelector('button');
let myTable = document.querySelector('#table');

let headers = ['Nome', 'Idade', 'Profissão'];

btnGet.addEventListener('click', () => {
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');

    //#region Este pedaço cria os Headers
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);

        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);
    //#endregion

    //#region Este pedaço cria os Rows com dados
    tablerow.forEach(info => {
        let row = document.createElement('tr');

        Object.values(info).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);

            cell.appendChild(textNode);
            row.appendChild(cell);
        });

        table.appendChild(row);
    });
    //#endregion

    myTable.appendChild(table);
});

//  #endregion
