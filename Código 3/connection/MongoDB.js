const mongoose = require('mongoose')

//Instalar o mongoDB e criar uma database local com o nome de Anexo 1
//Depois crie uma coleção chamada dados
//Por fim carregue os dados que estão no arquivo dados.json, disponíveis no git, na mesma pasta do código

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/Anexo1', {

    useNewUrlParser: true

}).then(() => {

    console.log("Conected!")

}).catch((err) => {

    console.log("Error" + err)

})

module.exports = mongoose