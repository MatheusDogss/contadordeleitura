// alert("Olá")

let btn = document.getElementById('btn');
// console.log(btn); 
let div = document.getElementById('resultado');
let paginas = document.getElementById('paginas');
let nota = document.getElementById('nota');

let total = 0;



const arrPessoa = []


function cadastrar () {

    let livroInput = document.getElementById('livro').value;
    let nomeautorInput = document.getElementById('nomeautor').value;
    let generoInput = document.getElementById('genero').value;
    let paginasInput = document.getElementById('paginas').value;
    let notaInput = document.getElementById('nota').value;
    

    const pessoa = {

        livro: livroInput,
        nomeautor: nomeautorInput,
        genero: generoInput,
        paginas: paginasInput,
        nota: notaInput,
        tempo: Tempo(paginasInput),
       

    }

    arrPessoa.push(pessoa);

    imprimir();

    console.log(arrPessoa);

}

function Tempo (paginas) {

    total = total +  paginas * 2;

    return paginas * 2;

}

function teste() {

    alert( 'Seu tempo total de leitura é igual a ' + total + ' minutos.')

}

function imprimir() {

    div.innerHTML = '';


    for (let i = 0; arrPessoa.length; i++) {


        div.innerHTML += ` 

            <tr>
            
                <td> ${arrPessoa[i].livro} </td>
                <td> ${arrPessoa[i].nomeautor} </td>
                <td> ${arrPessoa[i].genero} </td>
                <td> ${arrPessoa[i].paginas} </td>
                <td> ${arrPessoa[i].nota} </td>
                <td> ${arrPessoa[i].tempo} minutos </td>

            </tr>

        `
        }

}



btn.addEventListener('click', cadastrar);