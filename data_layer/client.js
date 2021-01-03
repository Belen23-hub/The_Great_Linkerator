
let { Client }  = require('pg')

const DATABASE_URL =
  process.env.DATABASE_URL || 'postgres://localhost/linkerator'

const client = new Client(DATABASE_URL)

client.connect()

front+backend
module.exports = client;

module.exports = client, getAllLinks;

