import React, { useEffect } from 'react'
import THEME from '../../THEME'
const Entry = ({ q, a }) => {
  return (
    <div
      style={{
        ...THEME.Lato,
        fontSize: 18,
        lineHeight: 1.1,
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <h3 style={{ fontWeight: 'bold' }}>{q}</h3>
      <div
        style={{
          width: 150,
          height: 0,
          border: '1px solid black',
          marginTop: 5,
          marginBottom: 5,
        }}
      ></div>
      <p>{a}</p>
    </div>
  )
}
const FAQ = () => {
  return (
    <div
      style={{ position: 'relative', top: -30, backgroundColor: THEME.white }}
    >
      <svg
        style={{ backgroundColor: THEME.orange }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.white}
          fillOpacity='1'
          d='M0,288L48,250.7C96,213,192,139,288,144C384,149,480,235,576,240C672,245,768,171,864,165.3C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          backgroundColor: THEME.white,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '80vw' }}>
          <h2 style={{ ...THEME.DMSerif, fontSize: 36, marginBottom: 36 }}>
            Frequently Asked Questions
          </h2>
          <Entry
            q={`Q: What does THPO stand for?`}
            a={`A: It is a mystery that we will never expose.`}
          />
          <Entry
            q={`Q: What does THPO stand for?`}
            a={`A: It is a mystery that we will never expose.`}
          />
          <Entry
            q={`Q: What does THPO stand for?`}
            a={`A: It is a mystery that we will never expose.`}
          />
        </div>
      </div>
    </div>
  )
}

export default FAQ
