import React from 'react'
import THEME from '../../THEME'
const ServiceArea = () => {
  return (
    <div>
      <svg
        style={{ backgroundColor: THEME.blue }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.yellow}
          fillOpacity='1'
          d='M0,32L48,74.7C96,117,192,203,288,240C384,277,480,267,576,245.3C672,224,768,192,864,192C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          backgroundColor: THEME.yellow,
          position: 'relative',
          top: -3,
          padding: 150,
        }}
      >
        <h2 style={{ ...THEME.DMSerif, fontSize: 36, marginBottom: 12 }}>
          Where do we provide consultations and oversight?
        </h2>
        <p style={{ ...THEME.Lato }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  )
}

export default ServiceArea
