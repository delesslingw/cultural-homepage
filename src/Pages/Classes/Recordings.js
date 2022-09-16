import { useState } from 'react'

import RichText from '../../Components/RichText'
import useAPI from '../../hooks/useAPI'
import useBreakpoints from '../../hooks/useBreakpoints'
import THEME from '../../THEME'

const Recordings = () => {
  const { content } = useAPI()
  const { classesRecordingsDescription, classesRecordingsLink } =
    content[0].fields
  const [active, setActive] = useState(false)
  const { breakpoint } = useBreakpoints()
  return (
    <div style={{ backgroundColor: THEME.teal }}>
      <svg
        style={{ backgroundColor: THEME.white }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.teal}
          fillOpacity='1'
          d='M0,0L48,42.7C96,85,192,171,288,170.7C384,171,480,85,576,69.3C672,53,768,107,864,138.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            ...THEME.Lato,
            fontSize: 32,
            width: '75vw',
            textAlign: 'center',
            ...breakpoint({
              sm: {
                width: '90%',
                margin: 'auto',
                fontSize: 24,
              },
              xs: {
                width: '90%',
                margin: 'auto',
                fontSize: 22,
              },
            }),
          }}
        >
          <RichText>{classesRecordingsDescription.content}</RichText>
        </div>

        <a
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          href={classesRecordingsLink}
          style={{
            textDecoration: 'none',
            color: THEME.black,
            boxShadow: `1px 1px 2px rgba(0,0,0,${active ? 1 : 0.6})`,
            ...THEME.NotoSans,
            backgroundColor: THEME.blue,
            borderRadius: 15,
            opacity: active ? 0.9 : 1,
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            paddingRight: 50,
            paddingLeft: 50,
            paddingTop: 40,
            paddingBottom: 40,
            marginTop: 75,
            marginLeft: 75,
            marginRight: 75,
            display: 'grid',
            placeItems: 'center',
            fontSize: 36,
            marginBottom: 10,
            textAlign: 'center',
            ...breakpoint({
              sm: {
                fontSize: 32,
                marginTop: 50,
                marginRight: 50,
                marginLeft: 50,
              },
              xs: {
                fontSize: 24,
                marginTop: 50,
                marginLeft: 50,
                marginRight: 50,
              },
            }),
          }}
        >
          CATAWBA ARCHIVES
        </a>
      </div>
    </div>
  )
}

export default Recordings
