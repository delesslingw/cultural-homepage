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
const stringFromRichText = (rt) => {
  const richTextToString = (obj) => {
    if (obj.value) {
      // console.log(obj.value)
      return obj.value
    } else {
      return obj.content.reduce((acc, curr) => {
        // console.log(acc)
        return `${acc}${richTextToString(curr)}`
      }, '')
    }
  }
  return richTextToString(rt).replaceAll('"', '')
}
const genHTML = (config) => {
  return Object.keys(config).reduce((acc, curr) => {
    return acc.replaceAll(curr, config[curr])
  }, HTMLdata)
}
const app = express()
app.get('/api', (req, res) => {
  res.send(CONTENT)
})

app.get('/thpo', (req, res) => {
  const { thpoTitle, thpoDescription, thpoImage } = CONTENT[0].fields

  const description = stringFromRichText(thpoDescription)

  res.send(
    genHTML({
      __META_TITLE__: thpoTitle,
      __META_IMAGE__: `https:${thpoImage.fields.file.url}`,
      __META_DESCRIPTION__: description,
    })
  )
})
app.get('/classes', (req, res) => {
  const { classesTitle, classesDescription, classesImage } = CONTENT[0].fields
  // console.log(CONTENT[0].fields)
  const description = stringFromRichText(classesDescription)

  res.send(
    genHTML({
      __META_TITLE__: classesTitle,
      __META_IMAGE__: `https:${classesImage.fields.file.url}`,
      __META_DESCRIPTION__: description,
    })
  )
})
app.get('/programs', (req, res) => {
  const { programsTitle, programsDescription, programsImage } =
    CONTENT[0].fields
  // console.log(CONTENT[0].fields)
  const description = stringFromRichText(programsDescription)

  res.send(
    genHTML({
      __META_TITLE__: programsTitle,
      __META_IMAGE__: `https:${programsImage.fields.file.url}`,
      __META_DESCRIPTION__: description,
    })
  )
})
app.get('/library', (req, res) => {
  const { libraryTitle, libraryDescription, libraryImage } = CONTENT[0].fields
  // console.log(CONTENT[0].fields)
  const description = stringFromRichText(libraryDescription)

  res.send(
    genHTML({
      __META_TITLE__: libraryTitle,
      __META_IMAGE__: `https:${libraryImage.fields.file.url}`,
      __META_DESCRIPTION__: description,
    })
  )
})

app.get('/', (req, res) => {
  const { homepageTitle, homepageDescription, homepageHeroImage } =
    CONTENT[0].fields
  const description = stringFromRichText(homepageDescription)

  res.send(
    genHTML({
      __META_TITLE__: homepageTitle,
      __META_IMAGE__: `https:${homepageHeroImage[0].fields.file.url}`,
      __META_DESCRIPTION__: description,
    })
  )
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
    const indexPath = path.resolve(__dirname, 'build', 'index.html')
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
      if (err) {
        console.error('Error during file reading', err)
        return res.status(404).end()
      }
      // console.log(homepageDescription.content[0])
      HTMLdata = htmlData

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
