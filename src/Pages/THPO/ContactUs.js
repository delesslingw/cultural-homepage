import React from 'react'
import THEME from '../../THEME'

const ContactUs = () => {
  return (
    <div style={{ position: 'relative', top: -5 }}>
      <svg
        style={{ backgroundColor: THEME.yellow }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.orange}
          fillOpacity='1'
          d='M0,320L48,282.7C96,245,192,171,288,160C384,149,480,203,576,208C672,213,768,171,864,144C960,117,1056,107,1152,90.7C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          backgroundColor: THEME.orange,
          position: 'relative',
          top: -3,
          padding: 100,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            backgroundColor: THEME.white,
            padding: 20,
            borderRadius: 5,
            boxShadow: `1px 1px 2px rgba(0,0,0,0.5)`,
            display: 'inline-block',
          }}
        >
          <h2 style={{ ...THEME.DMSerif, fontSize: 36, marginBottom: 24 }}>
            Contact Us
          </h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-start',

              flexWrap: 'wrap',
              ...THEME.Lato,
              fontSize: 16,
              lineHeight: 1.1,
            }}
          >
            <div style={{ padding: 10 }}>
              <h3 style={{ fontWeight: 'bold' }}>
                Tribal Historic Preservation Officer
              </h3>
              <p>Wenonah George Haire, DMD</p>
              <p>wenonah.haire@catawba.com</p>
              <p>(803) 328-2427 ext 224</p>
            </div>
            <div style={{ padding: 10 }}>
              <h3 style={{ fontWeight: 'bold' }}>
                <b>Tribal Historic Preservation Officer Assistant</b>
              </h3>
              <p>Caitlin Rogers</p>
              <p>caitlin.rogers@catawba.com</p>
              <p>(803) 328-2427 ext 226</p>
            </div>
          </div>
          <h2
            style={{
              ...THEME.DMSerif,
              fontSize: 36,
              marginBottom: 24,
              marginTop: 36,
            }}
          >
            Submit Review Packets To:
          </h2>
          <div
            style={{
              ...THEME.Lato,
              textAlign: 'center',
              lineHeight: 1.2,
              fontSize: 22,
              padding: 20,
            }}
          >
            <h3 style={{ fontWeight: 'bold' }}>ATTN: THPO</h3>

            <p>1536 Tom Steven Road</p>
            <p>Rock Hill, SC 29730</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
