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
  getAllTags,
  getLinkByTagName,

} = require('../data_layer')

apiRouter.get('/api/links', async (req, res) => {
  try{
    const allLinks = await getAllLinks();
    res.send(allLinks)

  } catch(error){
    throw error
  }
  
})
// get link by id route
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


apiRouter.get('/api/tags', async (req, res, next) => {
  try {
    const tags = await getAllTags();
  
    res.send({
      "tags": tags
    });
    next();
  } catch(error) {
    console.log("Error requesting tags");
    next(error);
  }
});

  apiRouter.get('/api/tags/:tagName/links', async (req, res, next) => {
    const { tagName } = req.params
    try {
      console.log("Requesting link by tag name");
      const links = getLinkByTagName(tagName);

      res.send({ links });
    } catch(error) {
      console.log("Error requesting link by tag name");
      next(error);
    }
  })

  apiRouter.patch('/api/links/:linkId', async (req, res) => {
    console.log('this is req body',req.body)
    console.log('this is id ', req.params.linkId)
    try {
      const { linkId } = req.params
      const { comment, clickCount, tags } = req.body
  
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

      if (tags && tags.length > 0) {
        updateFields.tags = tags;
      }
  
      if (updateTheLink) {
        const updatedLink = await updateLink(linkId, updateFields)
        console.log(updatedLink)
      }
  
      res.sendStatus(202)
    } catch (error) {
      throw error
    }
  })

apiRouter.delete('/api/links/:id', async (req, res) => {
  try {
    const del = await deleteLink(req.params.id)
    res.send("link is deleted")
  } catch (error) {
    throw error
  }
})

module.exports = apiRouter
