const AddToCart = require('./model')
require('dotenv').config()

const saveEvent = async (data) => {
  let response = {
    created: false
  }
  try {

    const saveEvent = new AddToCart(data)
    await saveEvent.save()

    response.created = true
  } catch (error) {
    response.error = error
  }
  return response
}

module.exports = {
  saveEvent
}