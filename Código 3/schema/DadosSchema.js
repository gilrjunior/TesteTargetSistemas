const mongoose = require("../connection/MongoDB")

const daySchema = mongoose.Schema({ //Schema criado no modelo dos dados fornecidos no arquivo

    dia: {

        type: Number

    },
    valor: {

        type: Number

    }


})

day = mongoose.model("dados", daySchema)

module.exports = day