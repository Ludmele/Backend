//cada par de nome e valor deve ser separado por uma vírgula"

//nome separado por dois pontos e valor é por vírgula" 

//Objeto literal = criar um objeto de forma direta

    // Poderia criar variaveis mas é demorado

    // var produto = {
    // id: 9,
    // nome: "Bobs dogs"} -> notação literal
    // sintaxe new Object -> classe
        // cria e inicializa o novo objeto
        //var o = new Object(); -> referencia - não armazena valor

        //fuction Carro(marca, modelo){ -> função construtora e também tem dois parametros

            //this.marca = marca -> por causa do "this" é reconhecido que marca é uma propriedade marca armazena o parametro (foca no interno)
            //this.modlo = modelo
            //}
        //let meuCarro = new Carro("Fiat", "Pulse")

        //meuCarro.marca
        //meuCarro.modelo

     // sintaxe Object.create

     // Os objeto sempre são passados por uma referencia
     //O objeto é manipulado --> Referencia
     //Valor é criado uma nova cópia do outro valor
        // let valor = 10
        // let outrovalor = valor --> passagem como valor- passa uma cópia do valor

    // let carro = {
    // cor: "Azul"}

    // let bicicleta = carro // passagem como referencia -- > passa o endereço do objeto da memória
    // console.log("Carro:" + carro.cor)
    // console.log("Bicicleta:" + bicicleta.cor)

    // bicicltea.cor = "Verde"

    //console.log("Carro:" + carro.cor)
    //console.log("Bicicleta:" + bicicleta.cor)

    //Os dois apontam para o mesmo local  

    // nome inválido

    //console.log(carro["a cor"])

    // nome valido

    //console.log(carro.cor)

    //Objeto é {}
    //Array é []

    //Classe é um padrão comum para múltiplos objetos

    //constructor -> é obrigatório
