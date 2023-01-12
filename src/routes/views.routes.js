import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    res.render('index', {
        title: 'Desafio Websocket'
    })
})

router.get('/chat', (req, res) => {
    res.render('chat', {
        title: 'Chat Desafio'
    })   
})

export default router