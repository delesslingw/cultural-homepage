import React, { useState } from 'react'
import THEME from '../../THEME'
import Hero from './Hero'
import Request from './Request'

const Programs = () => {
  return (
    <section>
      <Hero />
      <Request />
      <svg
        style={{
          backgroundColor: THEME.white,
          position: 'relative',
          top: -5,
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.navy}
          fillOpacity='1'
          d='M0,320L30,282.7C60,245,120,171,180,128C240,85,300,75,360,58.7C420,43,480,21,540,32C600,43,660,85,720,96C780,107,840,85,900,106.7C960,128,1020,192,1080,208C1140,224,1200,192,1260,197.3C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
        ></path>
      </svg>
    </section>
  )
}

export default Programs
