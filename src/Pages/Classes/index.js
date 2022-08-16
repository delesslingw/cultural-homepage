import React from 'react'
// import useBreakpoints from '../../hooks/useBreakpoints'
import THEME from '../../THEME'
import Hero from '../Library/Hero'
import useAPI from '../../hooks/useAPI'

import Schedule from './Schedule'
import Recordings from './Recordings'
import FAQ from '../Library/FAQ'
const Classes = () => {
  // const { breakpoint } = useBreakpoints()
  const { content } = useAPI()
  const { classesTitle, classesDescription, classesFAQ, classesImage } =
    content[0].fields
  // console.log(content[0])
  return (
    <section>
      <Hero
        title={classesTitle}
        description={classesDescription}
        image={`https:${classesImage.fields.file.url}`}
        backgroundColor={THEME.yellow}
      />
      <Schedule />
      <Recordings />
      <FAQ data={classesFAQ} bg={THEME.teal} />
      <svg
        style={{
          backgroundColor: THEME.orange,
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.navy}
          fillOpacity='1'
          d='M0,32L48,69.3C96,107,192,181,288,181.3C384,181,480,107,576,106.7C672,107,768,181,864,202.7C960,224,1056,192,1152,154.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </section>
  )
}

export default Classes
