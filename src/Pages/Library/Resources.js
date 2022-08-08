import React from 'react'
import RichText from '../../Components/RichText'
import useAPI from '../../hooks/useAPI'
import useBreakpoints from '../../hooks/useBreakpoints'
import THEME from '../../THEME'

const Resources = () => {
  const { content } = useAPI()
  const { breakpoint } = useBreakpoints()
  const { libraryResources } = content[0].fields
  return (
    <div style={{ backgroundColor: THEME.teal }}>
      <svg
        style={{ backgroundColor: THEME.yellow }}
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
        }}
      >
        <h3
          style={{
            ...THEME.DMSerif,
            fontSize: 48,
            marginLeft: 65 - 50,
            marginBottom: 65,
          }}
        >
          Resources
        </h3>
        <div
          style={{
            display: 'flex',

            flexDirection: 'column',
            justifyContent: 'flex-start',
            ...breakpoint({
              md: {},
            }),
          }}
        >
          {libraryResources.map((link, i) => {
            return (
              <a
                key={link.fields.resourceLink}
                href={link.fields.resourceLink}
                style={{
                  textDecoration: 'none',
                  color: THEME.black,
                  backgroundColor: THEME.white,
                  borderRadius: 50,
                  position: 'relative',
                  display: 'flex',
                  boxShadow: `1px 1px 2px rgba(0,0,0,0.5)`,

                  marginBottom: 65,
                  marginLeft: 65,
                  marginRight: 65,
                  ...breakpoint({
                    md: {
                      maxWidth: 'none',
                    },
                  }),
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
                      textAlign: 'left',
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
    </div>
  )
}

export default Resources
