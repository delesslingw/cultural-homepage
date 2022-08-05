import React from 'react'
import THEME from '../../THEME'

const Hero = () => {
  const title = 'Public Programs',
    description =
      'For millenia Catawbas have honored and cultivated a rich culture of storytelling. One way we honor that tradition today is through our many Public Programs which bring the experience of Catawba history and culture to our neighbors and other visitors to our home.'

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        // backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: THEME.orange,
      }}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        style={{ position: 'absolute' }}
      >
        <path
          fill={THEME.teal}
          fillOpacity='1'
          d='M0,288L48,288C96,288,192,288,288,282.7C384,277,480,267,576,224C672,181,768,107,864,74.7C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          paddingBottom: 50,
          paddingRight: 50,
          zIndex: 5,
        }}
      >
        <h2 style={{ ...THEME.DMSerif, fontSize: 40, paddingBottom: 25 }}>
          {title}
        </h2>
        <p
          style={{
            width: '40%',
            ...THEME.Lato,
            fontSize: 16,
            textAlign: 'right',
          }}
        >
          {description}
        </p>
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
