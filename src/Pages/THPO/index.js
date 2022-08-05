// About THPO, Statutes, Obligations, etc
// All the states and counties we have ancestral linkage
// FAQ
// THPO Contact: wenonah.haire@catawba.com
import React from 'react'
import THEME from '../../THEME'
import ContactUs from './ContactUs'
import FAQ from './FAQ'
import Hero from './Hero'
import ServiceArea from './ServiceArea'
const title = 'Tribal Historic Preservation Office',
  description =
    'The National Historic Preservation Act (NHPA) was amended in 1992 to establish tribal historic preservation programs. THPOs assume any and all of the functions of a State Historic Preservation Officer (SHPO) on their tribal lands. There are over 150 THPOs to date.The role of THPOs in the Section 106 process includes, but is not limited to, consultation regarding culturally appropriate methods for the following: Identification of historic properties of religious and cultural significance. Evaluation of such properties for eligibility to the National Register of Historic Places. Assessment of effects to historic properties. Determination of appropriate means to avoid, minimize, or mitigate adverse effects to such properties. Resolution of adverse effects.',
  d =
    'M0,288L48,261.3C96,235,192,181,288,170.7C384,160,480,192,576,186.7C672,181,768,139,864,112C960,85,1056,75,1152,101.3C1248,128,1344,192,1392,224L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
const THPO = () => {
  return (
    <section>
      <Hero
        title={title}
        description={description}
        backgroundColor={THEME.teal}
        fill={THEME.blue}
        d={d}
        src={
          'https://upload.wikimedia.org/wikipedia/commons/c/c7/1911_Britannica-Archaeology-Palaeolithic.png'
        }
      />
      <ServiceArea />
      <ContactUs />
      <FAQ />
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
