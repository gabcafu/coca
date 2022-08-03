/*configurações do servidor - início*/
//carregar o módulo express
const express = require('express')
//executar o módulo express
const app = express()
//definir a pasta dos arquivos ejs
app.set('views','./')
//criar uma instancia local
app.listen(3050,()=>{
    console.log("servidor local em http://localhost:3050")
})
/*configurações do servidor - fim*/

/*comfiguração do banco de dados início */
//importar o módulo mongoose
const mongoose = require('mongoose')
//configurar o script de conexão
const conexao = ()=>{
    mongoose.connect('mongodb+srv://userRevisao:gffc1608@gabonito.th4xf.mongodb.net/revisao?retryWrites=true&w=majority')
}
//configurar o modelo par a coleção alunos
const modelo = new mongoose.Schema({
    nome:String,
    turma:String,
    disciplina:String
})
//definir o modelo para coleção alunos
const alunos = mongoose.model('alunos',modelo)
/*configurações do banco de dados - fim*/

/*rota para requisição/*/
app.get('/',async(req,res)=>{
    conexao()
    //pesquisar os documentos na colection alunos
    const resultado = await alunos.find()
    console.log(resultado)
    //res.send('Funcionado')
    res.render('index.ejs',{resultado })
})