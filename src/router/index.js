const viewsController = require('../views/controller.views')

const router = (app) => {
  app.use('/', viewsController)
}

module.exports = router