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
  updateClickCount,
} = require('../data_layer')

apiRouter.get('/', (req, res, next) => {
  res.send({ message: 'Welcome to The Great Linkerator' })
})

apiRouter.get('/links', async (req, res, next) => {
  try {
    const allLinks = await getAllLinks()

    res.send(allLinks)
  } catch (error) {
    next(error)
  }
})

apiRouter.get('/links/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    console.log('id is required for update', id)

    const linkReq = await getLinkById(id)
    console.log('link req is ', linkReq)
    res.send(linkReq)
  } catch (error) {
    next(error)
  }
})

apiRouter.post('/links', async (req, res, next) => {
  try {
    const newLink = await createLink(req.body)
    console.log('new link is', newLink)
    res.send(newLink)
  } catch (error) {
    console.log('cant create a link')
    next(error)
  }
})

apiRouter.patch('/links/:linkId', async (req, res) => {
  try {
    const { linkId } = req.params
    const { link, comment, clickCount } = req.body

    const updateFields = {}
    let updateTheLink = false

    if (typeof comment === 'string') {
      updatedLink = true
      updateFields.comment = comment.trim()
    }
    if (typeof clickCount === 'number' && clickCount >= 0) {
      updatedLink = true
      updateFields.clickCount = clickCount
    }
    if (updateLink) {
      const updatedLink = await updateLink(linkId, updateFields)
    }

    // const originalLink = getLinkById(linkId)
    // console.log('this is original link', originalLink)
    // console.log('original link id', originalLink.id)

    // console.log('this is for update', id)
    // console.log('original link id', originalLink.id)

    // const updatedLink = await updateLink(linkId, updateFields)
    res.sendStatus(204)
  } catch (error) {
    throw error
  }
})

apiRouter.delete('/links/:id', async (req, res, next) => {
  try {
    const del = await deleteLink(req.params.id)
    res.send(del)
  } catch (error) {
    next(error)
  }
})

module.exports = apiRouter
