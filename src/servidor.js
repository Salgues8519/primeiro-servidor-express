import express from 'express'

const servidor =express()

const controlador = (requisacao, resposta) => {
    return resposta.send('A vida é contada por um comediante triste')
}

servidor.get('/', controlador)

servidor.listen(3000)