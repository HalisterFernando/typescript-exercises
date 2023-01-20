// 1 iniciando projeto 

// console.log('Express + TS!!')

// 2 iniciando express 

 import express, { NextFunction } from 'express';
 import { Request, Response } from 'express';

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

 // 5 - Interface do express

 app.get('/api/interfaces', (req: Request, res: Response) => {
    return res.send('Utilizando interfaces')
 })

 // 6 - enviando json 

 app.get('/api/json', (req: Request, res: Response) => {
    return res.json({
        name: 'Shirt',
        price: 30,
        color: 'blue'
    })
 })

 // 7 - parametros de rotas

 app.get('/api/product/:id', (req: Request, res: Response) => {
    const { id } = req.params

    if (id === '1') {
       return res.json({
         id: 1, 
         name: 'Boné',
         price: 10

       })
    }

    return res.send('Produto não encontrado')
 }) 

 // 8 -  rotas complexas
 
 app.get('/api/product/:id/review/:reviewId', (req: Request, res: Response) => {
    const { id, reviewId } = req.params

    return res.send(`O usuário está vendo o produto com id ${id}, que possúi a review ${reviewId}`)
 })

 // 9 - router handler

 const getUser = (req: Request, res: Response) => {
    return res.send(`Usuário com id ${req.params.id}`)
 }

 app.get('/api/user/:id', getUser)

 // 10 - middleware

 const checkUser = (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params

    if ( id === '1') return next()

    return res.send('Não pode seguir')
 }

 app.get('/api/user/:id/access', checkUser, (req: Request, res: Response) => {
    return res.json({msg: 'Seja bem-vindo à área administrativa'});
 })

 app.listen(3000, () => {
    console.log("Aplicação de TS + express funcionando!")
 })