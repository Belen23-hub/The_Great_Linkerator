// api index
const express = require('express')
const apiRouter = express.Router()

const {
  createNewLink,
  updateLink,
  foundLink,
  deleteLink
} = require('../data_layer')

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

    const linkReq = await foundLink(id)
    console.log('link req is ', linkReq)
    res.send(linkReq)
  } catch (error) {
    next(error)
  }
})

apiRouter.post('/links', async (req, res, next) => {
  try {
    const newLink = await createNewLink(req.body)
    console.log('new link is', newLink)
    res.send(newLink)
  } catch (error) {
    console.log('cant create a link')
    next(error)
  }
})

apiRouter.patch('/links/:linkId', async (req, res, next) => {
  const { linkId } = req.params
  const { link, comment } = req.body
  const updatedFields = {}

  if (link) {
    updatedFields.link = link
  }
  if (comment) {
    updatedFields.comment = comment
  }

  try {
    const originalLink = await foundLink(linkId)
    if (originalLink.id === linkId) {
      console.log('this is id for update link final', linkId)
      const update = await updateLink(linkId, updatedFields)
      console.log('this is updated link', update)
      res.send({
        message: 'Link has been updated',
        link: update,
      })
    } else {
      console.log('no id found for update')
    }
  } catch (error) {
    console.log('trouble updating link')
    next(error)
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