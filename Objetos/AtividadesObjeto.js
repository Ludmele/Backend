//1
let apartamento = {
    quartos: 2,
    tipo: 'Apartamento',
    endereco: "Avenida Principal, 456 - Centro",
    andar: 7
}

console.log(`${apartamento.tipo} com ${apartamento.quartos} quartos, localizado no ${apartamento.endereco} com ${apartamento.andar} andares`)

//2

let pordutoEmbalado = {
    nome: "Laptop HP",
    categoria: 'Eletrônicos',
    peso: 1.5,
    preco: 3500
}

console.log(`O produto ${pordutoEmbalado.nome}, da categoria ${pordutoEmbalado.categoria}, pesando ${pordutoEmbalado.peso} e está a venda ${pordutoEmbalado.preco.toLocaleString('pt-BR', {style:"currency", currency: 'BRL'})}.`)

//3

class Imovel {
    constructor (quartos, tipo, endereco) {
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereco = endereco }

    exibirInformacao(){
        return `${this.tipo} com ${this.quartos} quartos, localizado(a) na ${this.endereco}`;
    }
}

let casa = new Imovel(3,"Sobrado", "Rua da dores, bairro programador, nº 1012");
console.log(casa.exibirInformacao());

let ap = new Imovel(2, "Apartamento", "Rua da depressão, bairro da solitude, nº 8547");
console.log(ap.exibirInformacao());



//casa.quartos = 2;
//casa.tipo = "Sobrado";
//casa.endereco = "Endereco";

//console.log(casa);
//console.log(`Quartos: ${casa.quartos} \nTipo: ${casa.tipo} \nEndereco: ${casa.endereco}`)

//4

class Veiculo {
    constructor(marca, modelo, ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;}

        exibirDetalhes(){
            return `O veículo da marca: ${this.marca}, modelo ${this.modelo} e ano ${this.ano}`;
        }
    
}

let carro = new Veiculo("Toyota","Corolla", "2022");
console.log(carro.exibirDetalhes());

let moto = new Veiculo("Honda", "CBR 600RR", "2021");
console.log(moto.exibirDetalhes());


import entradaDados from 'readline-sync';
let nome =  entradaDados.question("Informe seu nome: ");
console.log(`Olá", ${nome}!`);