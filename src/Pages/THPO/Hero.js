import React from 'react'
import THEME from '../../THEME'
import RichText from '../../Components/RichText'
const Hero = ({ title, description, backgroundColor, fill, d, src }) => {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',

        backgroundImage: `url(https:${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          marginTop: '50vh',
        }}
      >
        <svg
          style={{ position: 'relative', top: 5 }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill={THEME.blue}
            fillOpacity='1'
            d='M0,256L48,234.7C96,213,192,171,288,165.3C384,160,480,192,576,208C672,224,768,224,864,192C960,160,1056,96,1152,106.7C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div style={{ backgroundColor: THEME.blue }}>
          <h1
            style={{
              ...THEME.DMSerif,
              textAlign: 'center',
              fontSize: 30,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 30,
            }}
          >
            {title}
          </h1>
          <div style={{ ...THEME.NotoSans, fontSize: 18, padding: 20 }}>
            <RichText>{description.content}</RichText>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Hero
