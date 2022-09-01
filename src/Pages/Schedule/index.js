import React, { useState } from 'react'
import useAPI from '../../hooks/useAPI'
import THEME from '../../THEME'
const Link = ({ profile }) => {
  const [active, setActive] = useState(false)
  const { profileName, profileJobTitle, profileEmail, profileCalendly } =
    profile.fields
  return (
    <a
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      style={{
        borderRadius: active ? 10 : 0,
        borderLeft: '1px dashed #000',
        borderTop: `1px dashed rgba(0,0,0,${active ? 1 : 0})`,
        borderRight: `1px dashed rgba(0,0,0,${active ? 1 : 0})`,
        borderBottom: `1px dashed rgba(0,0,0,${active ? 1 : 0})`,
        textDecoration: 'none',
        color: THEME.black,
        minWidth: '40vw',
        transition: 'all ease 0.2s',
        backgroundColor: active ? THEME.yellow : THEME.white,
      }}
      href={profileCalendly}
    >
      <div
        style={{
          position: 'relative',
        }}
      >
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            backgroundColor: active ? THEME.teal : THEME.blue,
            position: 'absolute',
            left: -25,
            top: -25,
            display: 'grid',
            placeItems: 'center',
            transition: 'all 0.2s ease',
            boxShadow: `1px 1px 2px rgba(100,100,100, ${active ? 1 : 0})`,
          }}
        >
          <h1 style={{ ...THEME.Lato }}>
            {profileName
              .split(' ')
              .map((el) => el[0])
              .join('.')
              .toUpperCase()}
          </h1>
        </div>

        <div style={{ padding: 25, paddingBottom: 50 }}>
          <h2 style={{ ...THEME.DMSerif, fontSize: 24 }}>{profileName}</h2>
          <h3
            style={{
              ...THEME.Lato,
              fontSize: 16,
              fontStyle: 'italic',
            }}
          >
            {profileJobTitle}
          </h3>
          <h4>{profileEmail}</h4>
          <div style={{ width: '100%', display: 'grid', placeItems: 'center' }}>
            <div
              style={{
                width: '75%',
                borderRadius: 50,
                border: `1px ${active ? 'solid' : 'dashed'} #000`,
                display: 'grid',
                placeItems: 'center',
                marginTop: 25,
                paddingLeft: 25,
                paddingRight: 25,
                paddingBottom: 15,
                paddingTop: 15,
                backgroundColor: active ? THEME.teal : THEME.white,
                transition: 'all 0.2s ease',
                boxShadow: `1px 1px 2px rgba(100,100,100, ${active ? 1 : 0})`,
              }}
            >
              <h1>SCHEDULE MEETING</h1>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

const Schedule = () => {
  const { directory } = useAPI()
  const bg = THEME.white
  return (
    <section style={{ paddingTop: 100 }}>
      <div style={{ backgroundColor: bg }}>
        <svg
          style={{ backgroundColor: THEME.navy }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill={bg}
            fillOpacity='1'
            d='M0,32L34.3,37.3C68.6,43,137,53,206,58.7C274.3,64,343,64,411,85.3C480,107,549,149,617,154.7C685.7,160,754,128,823,133.3C891.4,139,960,181,1029,186.7C1097.1,192,1166,160,1234,133.3C1302.9,107,1371,85,1406,74.7L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
          ></path>
        </svg>
        <div style={{ marginLeft: 25, marginRight: 25 }}>
          <h1 style={{ ...THEME.DMSerif, fontSize: 32, marginBottom: 20 }}>
            Staff Scheduling Page
          </h1>
          <p style={{ ...THEME.NotoSans, fontSize: 16 }}>
            Use the links below to schedule time with one of our staff members.
            For non-staff, please only use this page at the invitation of staff.
            Staff retain the right to reject or cancel scheduling requests.
          </p>
          <div
            style={{
              paddingTop: 50,
              paddingLeft: 50,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
            }}
          >
            {directory.map((profile) => (
              <Link key={profile.fields.profileEmail} profile={profile}></Link>
            ))}
          </div>
        </div>
      </div>
      <div>
        <svg
          style={{ backgroundColor: bg }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill={THEME.navy}
            fillOpacity='1'
            d='M0,96L34.3,90.7C68.6,85,137,75,206,112C274.3,149,343,235,411,234.7C480,235,549,149,617,128C685.7,107,754,149,823,144C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,128C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z'
          ></path>
        </svg>
      </div>
    </section>
  )
}

export default Schedule
