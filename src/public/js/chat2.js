const socket = io()

const input = document.querySelector('#message')

input.addEventListener('input', (event) => {
    //console.log(input.value)
    socket.emit('input', input.value)
})

socket.on('message', (data) => {
    document.querySelector('p').innerHTML = data
})