import { useState } from 'react'
import Svg from '../../Components/Svg'
import THEME from '../../THEME'

const Request = () => {
  const [active, setActive] = useState(false)
  return (
    <div
      style={{
        backgroundColor: THEME.yellow,
      }}
    >
      <Svg
        fill={THEME.yellow}
        fillOpacity='1'
        d='M0,160L48,181.3C96,203,192,245,288,240C384,235,480,181,576,160C672,139,768,149,864,170.7C960,192,1056,224,1152,224C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        style={{ backgroundColor: THEME.orange }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '80%',
          margin: 'auto',
        }}
      >
        <p style={{ textAlign: 'center', ...THEME.Lato, fontSize: 24 }}>
          Looking for a specific book? Trying to find answers to a research
          question or just want to learn more about a topic? Submit a reference
          question and we'll do our best to help.
        </p>
        <a
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          style={{
            textDecoration: 'none',
            color: THEME.black,
            ...THEME.NotoSans,
            fontSize: 18,
            display: 'grid',
            placeItems: 'center',
            backgroundColor: THEME.blue,
            padding: 30,
            boxShadow: '1px 1px 2px rgba(0,0,0,0.6)',
            borderRadius: 10,
            margin: 30,
            opacity: active ? 1 : 0.9,
            textAlign: 'center',
          }}
          href='https://forms.office.com/Pages/ResponsePage.aspx?id=uqGWFzDYEESBxFHXOU47Sh9Dq-QenBlMi92axkI9AT9UQ0NIVDY1TVoxNENYTzZMVko3RUZWV0M1QS4u'
        >
          SUBMIT A QUESTION
        </a>
      </div>
    </div>
  )
}

export default Request
