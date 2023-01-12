const socket = io()

const input = document.querySelector('#message')

document.querySelector('#send').addEventListener('click', (event) => {
    event.preventDefault()

    socket.emit('message_chat', input.value)
})

socket.on('message_chat', (data) => {
    const messages = data.map(msg => {
        return `Socket: ${msg.socketid} -> ${msg.message}`
    }).join('<br>')
    document.querySelector('p').innerHTML = messages
})