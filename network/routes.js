const event = require('../components/clicks/controller')

const routes = (app) => {
    app.use('/api/events', event)
}

module.exports = routes