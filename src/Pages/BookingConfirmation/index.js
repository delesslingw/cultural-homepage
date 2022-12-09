import React, { useEffect, useState } from 'react'

import THEME from '../../THEME'

const BookingConfirmation = () => {
  const [data, setData] = useState({ name: '', email: '', loaded: false })
  useEffect(() => {
    var queryString = window.location.search
    var urlParams = new URLSearchParams(queryString)

    // Note: Available Parameters
    var inviteeName = urlParams.get('invitee_full_name')
    var inviteeEmail = urlParams.get('invitee_email')
    setData({ name: inviteeName, email: inviteeEmail, loaded: true })
  }, [])
  return (
    <section
      style={{
        marginTop: '10vh',

        backgroundColor: THEME.white,
      }}
    >
      <div style={{ padding: 50, display: 'flex', flexDirection: 'column' }}>
        <h1
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            fontStyle: 'italic',
            ...THEME.DMSerif,
            textAlign: 'center',
            color: THEME.black,
            paddingBottom: 40,
          }}
        >
          You have successfully booked a Program Request meeting!
        </h1>
        <p style={{ ...THEME.Lato, fontSize: 20, paddingBottom: 10 }}>
          Tanake {data.name},
        </p>
        <p style={{ ...THEME.Lato, fontSize: 20, paddingBottom: 10 }}>
          Thank you for booking a time to meet with the Cultural Programs team.
          You should receive a calendar invite shortly to your email address(
          {data.email}).
        </p>
        <p style={{ fontWeight: 'bold', ...THEME.Lato, fontSize: 20 }}>
          If you do not see the calendar invite first check your Spam and Trash
          folders. If you still cannot find it please email or call us.
        </p>
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            backgroundColor: THEME.yellow,
            alignSelf: 'center',
            marginTop: 50,
            fontStyle: 'italic',
            display: 'grid',
            placeItems: 'center',
            fontSize: 25,
            ...THEME.DMSerif,
            transform: data.loaded ? 'scale(1)' : 'scale(0)',
            transition: 'all 1s ease',
          }}
        >
          <span
            style={{
              transform: data.loaded ? 'rotate(360deg)' : 'rotate(0deg)',
              transition: 'all 1s ease',
            }}
          >
            hawu!
          </span>
        </div>
      </div>
      <svg
        style={{
          backgroundColor: THEME.white,
          position: 'relative',
          top: 5,
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          style={{ position: 'relative', top: 10 }}
          fill={THEME.navy}
          fillOpacity='1'
          d='M0,320L30,282.7C60,245,120,171,180,128C240,85,300,75,360,58.7C420,43,480,21,540,32C600,43,660,85,720,96C780,107,840,85,900,106.7C960,128,1020,192,1080,208C1140,224,1200,192,1260,197.3C1320,203,1380,245,1410,266.7L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
        ></path>
      </svg>
    </section>
  )
}

export default BookingConfirmation
