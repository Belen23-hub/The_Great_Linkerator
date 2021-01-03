 front+backend
const sync = require('./sync')
const client = require('./client')

// get all links

async function getAllLinks() {
  try {
    const {
      rows: linkIds
    } = await client.query(`
      SELECT id
      FROM links;
    
    `)
    const links = await Promise.all(linkIds.map(
      link => getLinkById( link.id )
    ));
  

    console.log('These are the links:', links)

    return links
  } catch (error) {
    throw error
  }
}

// create new link

const createLink = async ({link, comment, tags=[]} ) => {
  console.log('strting to create new link')
  try {
    console.log('this is link', link)
    const {
      rows: [newLink],
    } = await client.query(
      `
      INSERT INTO links (link, comment)
      VALUES($1, $2)
      RETURNING *;
    `,
      [link, comment],
    )
    const tagList = await createTags(tags);
    const newestLink = await addTagsToLink(newLink.id, tagList)
    console.log('creating new Link', newLink)

    return newestLink;
  } catch (error) {
    throw error
  }
}

const getLinkById = async (id) => {
  try {
    const {
      rows: [link],
    } = await client.query(
      `
    SELECT * 
    FROM links
    WHERE id=$1;
    `,
      [id],
    )
    if (!link) {
      return 'No link was found with that id'
    }
    const { rows: tags } = await client.query(`
        SELECT tags.*
        FROM tags
        JOIN link_tags ON tags.id=link_tags.tag_id
        WHERE link_tags.link_id=$1;
      `, [id])
      console.log(1234345678990)

    link.tags = tags;
    link.dateCreated = new Date();
    return link;

    
  } catch (error) {
    console.error(error)
  }
}

const updateLink = async (id, fields = {}) => {
  console.log('this is update fields', fields)
  console.log('this is id for updateee', id)

  const { tags } = fields // might be undefined
  delete fields.tags

  const setString = Object.keys(fields)
    .map((key, index) => `"${key}"=$${index + 2}`)
    .join(', ')
  console.log('this is update fields after setsting', fields)

  console.log('this is setstring', setString)

  try {
    console.log('hitting api for update')

    if (setString.length > 0) {
      const result = await client.query(
        `
      UPDATE links
      SET ${setString}
      WHERE id=$1
      RETURNING *;
      `,
        [id, ...Object.values(fields)],
      )
      console.log('this is the updated link thats returend', result)
      
    }
    if (tags === undefined) {
      return await getLinkById(id)
    }

    // make any new tags that need to be made
    const tagList = await createTags(tags)
    const tagListIdString = tagList.map((tag) => `${tag.id}`).join(', ')

    console.log('tag list string', tagListIdString)

    console.log('addtagtolink is done')
   
    await addTagsToLink(id, tagList)


    return await  getLinkById(id)
  } catch (error) {
    throw error
  }
}




async function updateTag(id, fields = {}) {

  const setString = Object.keys(fields).map(
      (key, index) => `"${ key }"=$${ index + 1 }`
    ).join(', ');
  
    if (setString.length === 0) {
      return;
    }
  
    try {
      const { rows: [ tag ] }= await client.query(`
        UPDATE tags
        SET ${ setString }
        WHERE id=${ id }
        RETURNING *;
      `, Object.values(fields));
  
      return tag;
    } catch (error) {
      throw error;
    }
  }

const deleteLink = async (id) => {
  console.log('delete id is', id)
  try {
    const {
      rows: [delLink],
    } = await client.query(
      `
    DELETE FROM links
    WHERE id= $1;
    `,
      [id],
    )
    return 'Link is deleted '
  } catch (error) {
    throw error
  }
}


const createTags = async (tagList) =>{
  console.log('this is taglist', tagList)
  if (tagList.length === 0) {
    return;
  }
  console.log('gheksdn hdsb')

  const insertValues = tagList.map(
    (_, index) => `$${index + 1}`).join('), (');

    console.log('these are inserted values', insertValues)

  const selectValues = tagList.map(
    (_, index) => `$${index + 1}`).join(', ');

    console.log('this is select values', selectValues)

  try {
    await client.query(`
      INSERT INTO tags(tag)
      VALUES(${insertValues})
      ON CONFLICT (tag) DO NOTHING;
    `, tagList);

    console.log('helllo')

    const { rows } = await client.query(`
      SELECT * FROM tags
      WHERE tag
      IN (${selectValues});
    `, tagList)
    console.log('tag rows ', rows)
    return rows;
  } catch (error) {
    throw error;
  }

}


const createLinkTag = async (linkId, tagId) =>{
  try{

    await client.query(`
      INSERT INTO link_tags(link_id, tag_id)
      VALUES ($1, $2)
      ON CONFLICT (link_id, tag_id) DO NOTHING;
    `, [linkId, tagId])

  } catch(error){
    throw error;

  }

}

const addTagsToLink = async(linkId, tagList) =>{
  try {
    const createLinkTagPromises = tagList.map(
       tag => createLinkTag(linkId, tag.id)
    );
    
    await Promise.all(createLinkTagPromises);

    return await getLinkById(linkId);
  } catch (error) {
    throw error;
  }
}

const getAllTags = async () =>{
  try {
    const { rows } = await client.query(`
      SELECT *
      FROM tags;
    `);

    return rows;
  } catch (error) {
    throw error;
  }
}

const getLinkByTagName = async (tagName) =>{
  try {
    const { rows: linkIds } = await client.query(`
      SELECT links.id
      FROM links
      JOIN link_tags ON links.id=link_tags.link_id
      JOIN tags ON tags.id=link_tags.tag_id
      WHERE tags.tag=$1
    `, [tagName]);

    return await Promise.all(linkIds.map(
      link => getLinkById(link.id)
    ));
  } catch (error) {
    throw error;
  }
}





module.exports = {
  sync,
 front+backend
  client,
  getAllLinks,
  createLink,
  getLinkById,
  updateLink,
  deleteLink,
  createTags,
  getLinkByTagName,
  addTagsToLink,
  createLinkTag,
  getAllTags
  
}

