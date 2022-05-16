// @ts-check
const { MongoClient } = require('mongodb')

async function handler(
  request,
  response,
) {
  const client = new MongoClient(process.env.MONGODB_URI)

  await client.connect()

  const db = client.db('sample_mflix')
  const movies = db.collection('movies')

  const films = await movies.find({}).limit(10).toArray()

  response.status(200).json({ hello: 1, films });
}

module.exports = handler
module.exports.default = handler
module.exports.handler = handler
