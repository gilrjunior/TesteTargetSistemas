//Atenção: O node é o mongoDB devem estar instalados
//A aplicação deve ser executada pelo node

const day = require("./schema/DadosSchema")
var menorV = 0 // O menor valor de faturamento ocorrido em um dia do mês;
var maiorV = 0 //O maior valor de faturamento ocorrido em um dia do mês;
var media = 0 //média mensal.
var n = 0 //Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

day.find().then((days) => {

    for(var i = 0; i < days.length; i++){

        if(days[i].valor < menorV && days[i].valor != 0 || menorV == 0){ //Menor valor de faturamento, logo o zero não conta

            menorV = days[i].valor

        }

        if(days[i].valor > maiorV || maiorV == 0 ){

            maiorV = days[i].valor

        }

        media += days[i].valor

    }

    media = media/30

    for(var i = 0; i < days.length; i++){

        if(days[i].valor > media){
            n++
        }

    }

    console.log(`O menor faturamento no mês foi de ${menorV}`)
    console.log(`O maior faturamento no mês foi de ${maiorV}`)
    console.log(`O número de dias no mês em que o valor de faturamento diário foi superior à média mensal é ${n}`)


}).catch((err) => {

    console.log(err)

})