const { Client } = require('pg')

const DATABASE_URL =
  process.env.DATABASE_URL || 'postgres://localhost/linkerator'

const client = new Client(DATABASE_URL)

async function getAllLinks() {
  try {
    const allLinks = await client.query(`
  SELECT * FROM links
  RETURNING *;
  
  `)
    return allLinks
  } catch (error) {
    throw error
  }
}

client.connect()

module.exports = client, getAllLinks;
