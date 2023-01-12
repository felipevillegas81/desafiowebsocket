const socket = io()

socket.on('message', (data) => {
    console.log(data)
})

socket.emit('message1', 'Message from client')

