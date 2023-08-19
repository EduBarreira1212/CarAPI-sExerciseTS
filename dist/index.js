"use strict";
class Car {
    constructor(marca, modelo, categoria, ano, quilometragem, valor) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Categoria = categoria;
        this.Ano = ano;
        this.Quilometragem = quilometragem;
        this.Valor = valor;
    }
}
let carro = new Car("Mercedes", "G63", "SUV", 2021, 50000, 800000);
let decisao = parseInt(prompt("1-GET/2-GETbyID/3-POST/4-PATCH/5-DELETE"));
switch (decisao) {
    case 1:
        Get();
        break;
    case 2:
        let idGet = parseInt(prompt("Qual o id para buscar?"));
        GETbyID(idGet);
        break;
    case 3:
        let marca = prompt("Qual a marca?");
        let modelo = prompt("Qual o modelo?");
        let categoria = prompt("Qual a categoria");
        let ano = parseInt(prompt("Qual o ano?"));
        let km = parseInt(prompt("Quantos KM?"));
        let valor = parseInt(prompt("Qual o valor?"));
        let carro = new Car(marca, modelo, categoria, ano, km, valor);
        postData(carro)
            .then((data) => {
            console.log(data);
        });
        break;
    case 4:
        let id = parseInt(prompt("Qual o id para alterar valor"));
        let novoValor = parseInt(prompt("Qual o novo valor do carro"));
        patchData(id, novoValor)
            .then((data) => {
            console.log(data);
        });
        break;
    case 5:
        let idExluir = parseInt(prompt("ID para excluir?"));
        deleteData(idExluir)
            .then((data) => {
            console.log(data);
        });
        break;
    default:
        break;
}
//!!!!GET!!!!
function Get() {
    return fetch(`https://apigenerator.dronahq.com/api/EPWLA80Q/Cars`)
        .then((response) => response.json())
        .then((data) => console.log(data));
}
//!!!!!GETbyID!!!!
function GETbyID(id) {
    return fetch(`https://apigenerator.dronahq.com/api/EPWLA80Q/Cars/${id}`)
        .then((response) => response.json())
        .then((data) => {
        console.log(data.Marca);
        console.log(data.Modelo);
        console.log(data.Ano);
        console.log(data.Valor);
    });
}
//!!!!!POST!!!!!!
async function postData(car) {
    const response = await fetch("https://apigenerator.dronahq.com/api/EPWLA80Q/Cars", {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(car)
    });
    return response.json();
}
//!!!!!DELETE!!!!!!!!
async function deleteData(id) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/EPWLA80Q/Cars/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        //body: JSON.stringify(car)
    });
    return response.json();
}
//!!!!!PATCH!!!!
async function patchData(id, valor) {
    const response = await fetch(`https://apigenerator.dronahq.com/api/EPWLA80Q/Cars/${id}`, {
        method: 'PATCH',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify({
            "valor": valor
        })
    });
    return response.json();
}
//# sourceMappingURL=index.js.map