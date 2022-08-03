import React from 'react'
import useAPI from '../../hooks/useAPI'
import FAQ from './FAQ'
import Feature from './Feature'
import Hero from './Hero'
import Resources from './Resources'
const Library = () => {
  const { content } = useAPI()
  const { libraryTitle, libraryDescription, libraryImages } = content[0].fields
  // console.log(content[0].fields)
  return (
    <section>
      <Hero
        image={`https:${libraryImages[0].fields.file.url}`}
        title={libraryTitle}
        description={libraryDescription}
      />
      <Feature />
      <Resources />
      <FAQ />
    </section>
  )
}

export default Library
