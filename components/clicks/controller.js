const express = require('express')
const router = express.Router()
const response = require('../../network/responses');
const { saveEvent } = require('./service');

router.post('/AddToCart', async (req, res) => {
  console.log('entro');

  const data = req.body
  let errorMessage = 'Unexpected error has ocurred'

  // console.log("🚀 ~ router.post ~ data:", data)
  try {

    const saveEventRequest = await saveEvent(data)
    if (saveEventRequest.error) {
      throw new Error(saveEventRequest.error)
    }

    response.success(req, res, 'Event created', 200)
  } catch (error) {
    response.error(req, res, errorMessage, 500, error.message)
  }
})

module.exports = router