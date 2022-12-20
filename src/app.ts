// 1 iniciando projeto 

// console.log('Express + TS!!')

// 2 iniciando express 

 import express from 'express';

 const app = express()
 app.use(express.json())

 app.get('/', (req, res) => {
    return res.status(200).send('Hello Express')
 })

 // 3 - Rota com post 

 app.post('/api/product', (req, res) => {
    console.log(req.body)
    return res.send('Produto adicionado')
 })

 // 4 - Rota para qualquer verbo

 app.all('/api/product/check', (req, res) => {
    if (req.method === 'POST') return res.send('Inseriu algum registro')
    if (req.method === 'GET') return res.send('Leu algum registro')
    
    return res.send('Não podemos realizar esta operação')
 })

 app.listen(3000, () => {
    console.log("Aplicação de TS + express funcionando!")
 })