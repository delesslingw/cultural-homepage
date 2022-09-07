// About THPO, Statutes, Obligations, etc
// All the states and counties we have ancestral linkage
// FAQ
// THPO Contact: wenonah.haire@catawba.com
import React from 'react'
import THEME from '../../THEME'
import ContactUs from './ContactUs'
import FAQ from './FAQ'

import useAPI from '../../hooks/useAPI'

import Hero from './Hero'

const THPO = () => {
  const { content } = useAPI()
  const { thpoTitle, THPOfaq, thpoDescription, thpoImage } = content[0].fields
  // console.log(content)
  return (
    <section>
      <Hero
        src={thpoImage.fields.file.url}
        title={thpoTitle}
        description={thpoDescription}
      />

      <ContactUs />
      <FAQ data={THPOfaq} />
      <svg
        style={{ backgroundColor: THEME.white, position: 'relative', top: -30 }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.navy}
          fillOpacity='1'
          d='M0,320L48,314.7C96,309,192,299,288,288C384,277,480,267,576,250.7C672,235,768,213,864,181.3C960,149,1056,107,1152,128C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
    </section>
  )
}

export default THPO
