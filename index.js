require('dotenv').config()
const fs = require('fs')
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
let CONTENT = [],
  HTMLdata

const app = express()
app.get('/api', (req, res) => {
  res.send(CONTENT)
})

const routes = ['/', '/library', '/programs', '/classes', '/thpo']
routes.forEach((route) => {
  app.get(route, (_, res) => res.send(HTMLdata))
})

app.get('/', (req, res) => {
  console.log('get!')
  // console.log(HTMLdata)
  res.send(HTMLdata)
})
app.get('/')
app.use(express.static(path.resolve(__dirname, 'build')))
const PORT = process.env.PORT || 3333

client
  .getEntries()
  .then(({ items }) => {
    // return obj.filter(o => o.sys)
    CONTENT = items.filter((o) => {
      // console.log(o.sys.contentType.sys)
      return o.sys.contentType.sys.id == 'homepage'
    })
    return
  })
  .then(() => {
    console.log('gen HTML')
    // console.log(CONTENT[0])
    const { homepageTitle, homepageDescription, homepageHeroImage } =
      CONTENT[0].fields

    const indexPath = path.resolve(__dirname, 'build', 'index.html')
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('Error during file reading', err)
        return res.status(404).end()
      }
      console.log(homepageDescription.content[0])
      const richTextToString = (obj) => {
        if (obj.value) {
          // console.log(obj.value)
          return obj.value
        } else {
          return obj.content.reduce((acc, curr) => {
            console.log(acc)
            return `${acc}${richTextToString(curr)}`
          }, '')
        }
      }
      let description = richTextToString(homepageDescription)
      description = description.replaceAll('"', '')

      const config = {
        __META_OG_TITLE__: homepageTitle,
        __META_OG_IMAGE__: `https:${homepageHeroImage[0].fields.file.url}`,
        __META_DESCRIPTION__: description,
        __META_OG_DESCRIPTION__: description,
      }
      HTMLdata = Object.keys(config).reduce((acc, curr) => {
        return acc.replace(curr, config[curr])
      }, htmlData)

      // HTMLdata = htmlData.replace('__META_OG_TITLE__', homepageTitle)
      app.listen(PORT, (e) => {
        if (e) {
          console.error(e)
          return
        }

        console.log(`Listening on http://localhost:${PORT}`)
      })
    })
  })
  .catch(console.error)
