import express from 'express'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.routes.js'
import { Server } from 'socket.io'
import __dirname from './dirname.js'

const app = express()
const httpServer = app.listen(3000, () => console.log(`Server running on port ${3000}`))

const io = new Server(httpServer)

// Handlebars configuration
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}))

app.set('view engine', 'hbs')
app.set('views', `${__dirname}/views`)
app.use(express.static(`${__dirname}/public`))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routers
app.use('/', viewsRouter)

const messages = []

io.on("connection", (socket) => {
    console.log('New client connected')
    socket.emit('message_chat', messages)

socket.on('input', (data) => {
    io.emit('message', data)
})

socket.on('message_chat', (data) => {
    const message = {
        socketid: socket.id,
        message: data
    }
    messages.push(message)
    io.emit('message_chat', messages)
})

})