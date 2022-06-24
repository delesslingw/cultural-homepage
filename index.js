require('dotenv').config()
const path = require('path')
const express = require('express')
const contentful = require('contentful')
const client = contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: process.env.CONTENTFUL_SPACE,
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: process.env.CONTENTFUL_TOKEN,
})
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
let CONTENT = []

const app = express()
app.use(express.static(path.join(__dirname, '/build')))
app.get('/api', (req, res) => {
  res.send(CONTENT)
})
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/build/index.html'))
})
const PORT = process.env.PORT || 3333

client
  .getEntries()
  .then(({ items }) => {
    // return obj.filter(o => o.sys)
    CONTENT = items.filter((o) => {
      // console.log(o.sys.contentType.sys)
      return o.sys.contentType.sys.id == 'homepage'
    })
  })
  .then(() => {
    app.listen(PORT, (e) => {
      if (e) {
        console.error(e)
        return
      }

      console.log(`Listening on http://localhost:${PORT}`)
    })
  })
  .catch(console.error)
