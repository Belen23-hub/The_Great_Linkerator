const client = require("./client");
const sync = require("./sync");

async function createNewLink(url, comment) {
  try {
    const data = await client.query(
      `
    INSERT INTO links(link, comment)
    VALUES ($1, $2)
    RETURNING *;
`,
      [url, comment]
    );
  } catch (error) {
    throw error;
  }
}

async function updateLink(id) {
  try {
    const linkUpdated = await client.query(
      `
    UPDATE links
    SET clickCount = 0 + 1
    WHERE id=${id}; 
    `,
      [comment]
    );
  } catch (error) {
    throw error;
  }
}

//find the link 
//get the data (find the date inside)
async function foundLink(id) {
  try {
    const saveTheDate = await client.query(`
    SELECT *
    FROM links
    WHERE id=${id}
    RETURNING *;
    `)

  } catch (error) {
    throw error;
  }
} 

//should delete only the selected link
async function deleteLink(id) {
  try {
const deletedLink = await client.query(`
DELETE FROM links WHERE id=${id}
`)
  }catch (error) {
    throw error;
  }
}

module.exports = {
  sync,
  createNewLink,
  updateLink,
  foundLink,
  deleteLink
};

