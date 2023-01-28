const viewsController = require('../views/controller.views')
const usersController = require('../users/controller.users')

const router = (app) => {
  app.use('/', viewsController)
  app.use('/users', usersController)
}

module.exports = router