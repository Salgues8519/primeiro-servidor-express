import express, { Request, Response } from 'express'

const servidor =express()

const controlador:any = (requisacao: Request, resposta:Response) => {
    return resposta.send('Meu primeiro servidor Node.js com express e typescript ')
}  

servidor.get('/home', controlador)

servidor.listen(3000)





