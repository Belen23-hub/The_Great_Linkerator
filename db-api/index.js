// api index
const express = require('express')
const apiRouter = express.Router()

const {
  client,
  createLink,
  getAllLinks,
  getLinkById,
  updateLink,
  deleteLink,
} = require('../data_layer')

apiRouter.get('/api/links', async (req, res) => {
  try {
    const allLinks = await getAllLinks()

    res.send(allLinks)
  } catch (error) {
    throw error
  }
})

apiRouter.get('/api/links/:id', async (req, res) => {
  try {
    const { id } = req.params
    console.log('id is required for update', id)

    const linkReq = await getLinkById(id)
    console.log('link req is ', linkReq)
    res.send(linkReq)
  } catch (error) {
    throw error
  }
})

apiRouter.post('/api/links', async (req, res) => {
  console.log('hitting api')
  console.log('this is link from req.body', req.body)
  try {
    // const { link, comment } = req.body
    
    const newLink = await createLink(req.body)

    res.send({newLink})
   
  } catch (error) {
    console.log('cant create a link')
    throw error
  }
})

apiRouter.patch('/api/links/:linkId', async (req, res) => {
  try {
    const { linkId } = req.params
    const { comment, clickCount } = req.body

    const updateFields = {}
    let updateTheLink = false

    if (typeof comment === 'string') {
      updateTheLink = true
      updateFields.comment = comment.trim()
    }
    if (typeof clickCount === 'number' && clickCount >= 0) {
      updateTheLink = true
      updateFields.clickCount = clickCount
    }

    if (updateTheLink) {
      const updatedLink = await updateLink(linkId, updateFields)
    }

    res.sendStatus(202)
  } catch (error) {
    throw error
  }
})

apiRouter.delete('/api/links/:id', async (req, res) => {
  try {
    const del = await deleteLink(req.params.id)
    // res.send()
  } catch (error) {
    throw error
  }
})

module.exports = apiRouter
