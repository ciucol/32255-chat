const { Router } = require('express');
const io = require('../index');
const socket = require('../index');

const router = Router();

router.post('/', (req, res) => {
  socket.emit('newClient', req.body.user)
  res.json({ message: `New User: ${req.body.user}` })
})

module.exports = router;