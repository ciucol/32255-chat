const express = require('express')
const handlebars = require('express-handlebars')
const { Server } = require('socket.io')
const router = require('./router')

const port = 3000

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')

router(app)

const httpServer = app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})

const io = new Server(httpServer)

const messages = []

io.on('connection', socket => {
  console.log(`Client with id ${socket.id} is connected`)

  socket.on('newUser', user => {
    socket.broadcast.emit('userConnected', user)

    socket.emit("messageLogs", messages)
  })

  socket.on('message', data => {
    messages.push(data)
    io.emit("messageLogs", messages)
  })
})


module.exports = io
