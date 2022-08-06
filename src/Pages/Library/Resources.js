import React from 'react'
import RichText from '../../Components/RichText'
import useAPI from '../../hooks/useAPI'
import THEME from '../../THEME'

const Resources = () => {
  const { content } = useAPI()

  const { libraryResources } = content[0].fields
  return (
    <>
      <svg
        style={{ backgroundColor: THEME.yellow, position: 'relative', top: -5 }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.teal}
          fillOpacity='1'
          d='M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,176C672,181,768,203,864,218.7C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          minHeight: '50vh',
          backgroundColor: THEME.teal,
          position: 'relative',
          top: -57,
        }}
      >
        {/* <h3
          style={{
            ...THEME.DMSerif,
            fontSize: 48,
            position: 'relative',
            left: 100,
            marginBottom: 150,
          }}
        >
          Resources
        </h3> */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {libraryResources.map((link, i) => {
            return (
              <a
                key={link.fields.resourceLink}
                href={link.fields.resourceLink}
                style={{
                  minWidth: '30vw',
                  maxWidth: '40vw',
                  borderRadius: 50,
                  backgroundColor: THEME.white,
                  marginBottom: '5vw',
                  textDecoration: 'none',
                  color: THEME.black,
                  display: 'flex',
                  position: 'relative',
                  boxShadow: `1px 1px 2px rgba(0,0,0,0.5)`,
                }}
              >
                <div
                  style={{
                    backgroundImage: `url(https://${link.fields.resourceImage.fields.file.url})`,
                    height: 100,
                    width: 100,
                    borderRadius: 100,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: -40,
                    left: -40,
                    boxShadow: `1px 1px 2px rgba(0,0,0,0.5)`,
                    cursor: 'pointer',
                  }}
                ></div>
                <div
                  style={{ padding: 50, paddingTop: 50, textAlign: 'justify' }}
                >
                  <h4
                    style={{
                      textAlign: 'center',
                      ...THEME.DMSerif,
                      fontSize: 32,
                      marginBottom: 12,
                    }}
                  >
                    {link.fields.resourceTitle}
                  </h4>
                  <div style={{ ...THEME.NotoSans, lineHeight: 1.1 }}>
                    <RichText>
                      {link.fields.resourceDescription.content}
                    </RichText>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Resources
