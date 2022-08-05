import React from 'react'
import THEME from '../../THEME'

const Hero = ({ title, description, backgroundColor, fill, d, src }) => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor,
      }}
    >
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320' style={{}}>
        <path fill={fill} fillOpacity='1' d={d}></path>
      </svg>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 50,
          paddingRight: 50,
          zIndex: 5,
          backgroundColor: fill,
        }}
      >
        <div style={{ width: '60%', position: 'relative', top: -50 }}>
          <h2
            style={{
              ...THEME.DMSerif,
              fontSize: 48,
              paddingBottom: 25,
              textAlign: 'left',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              ...THEME.Lato,
              fontSize: 16,
              textAlign: 'left',
            }}
          >
            {description}
          </p>
        </div>
        {/* <p
              style={{
                width: '40%',
                ...THEME.Lato,
                fontSize: 16,
                textAlign: 'right',
              }}
            >
              <RichText>{description.content}</RichText>
            </p> */}
      </div>
    </div>
  )
}
export default Hero
