import THEME from '../../THEME'

import Svg from '../../Components/Svg'
import useBreakpoints from '../../hooks/useBreakpoints'
import { AiOutlineMail as EmailIcon } from 'react-icons/ai'
import { BsTelephone as PhoneIcon } from 'react-icons/bs'
import { useState } from 'react'
const Visit = () => {
  const { breakpoint } = useBreakpoints()

  return (
    <>
      <section
        style={{
          backgroundColor: THEME.teal,
        }}
      >
        <Svg
          style={{ backgroundColor: THEME.yellow, top: -5 }}
          fill={THEME.teal}
          d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        />

        <div
          style={{
            paddingLeft: 150,
            paddingRight: 150,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            ...breakpoint({
              xs: {
                paddingLeft: 100,
                paddingRight: 100,
              },
            }),
          }}
        >
          <h2
            style={{
              ...THEME.DMSerif,
              fontSize: 70,
              marginBottom: 30,
              textAlign: 'center',
              ...breakpoint({
                xl: {
                  marginBottom: 75,
                },
                xs: {
                  fontSize: 60,
                },
              }),
            }}
          >
            Contact Us
          </h2>
          <div
            style={{
              width: '100%',
              display: 'grid',

              gridGap: 50,
              ...breakpoint({
                xl: {
                  gridTemplateColumns: '1fr 1fr',
                },
              }),
            }}
          >
            <div
              style={{
                ...breakpoint({
                  xl: {
                    display: 'flex',
                    flexDirection: 'column',
                  },
                  lg: {
                    display: 'grid',
                    gridTemplateColumns: '2fr auto',
                    gridGap: 40,
                    alignItems: 'start',
                  },
                  md: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  sm: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                  xs: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  },
                }),
              }}
            >
              <h3
                style={{
                  ...THEME.NotoSans,
                  fontSize: 25,
                  ...breakpoint({
                    sm: {
                      textAlign: 'center',
                      fontSize: 20,
                    },
                    xs: {
                      textAlign: 'center',
                      fontSize: 18,
                    },
                  }),
                }}
              >
                We look forward to answering your questions or helping you in
                any way we can. Feel free to email us or call during regular
                business hours. We will get back with you as soon as possible.
              </h3>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: 25,
                  ...THEME.NotoSans,
                  ...breakpoint({
                    xl: {
                      marginTop: 30,
                    },
                    lg: {},
                    md: {
                      marginTop: 30,
                    },
                    sm: {
                      marginTop: 30,
                    },
                    xs: {
                      marginTop: 20,
                    },
                  }),
                }}
              >
                <div
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: THEME.yellow,
                    display: 'grid',
                    placeItems: 'center',
                    marginRight: 20,
                    ...breakpoint({
                      xs: {
                        width: 40,
                        height: 40,
                        borderRadius: 40,
                      },
                    }),
                  }}
                >
                  <PhoneIcon
                    style={{
                      color: THEME.navy,
                      fontSize: 25,
                      ...breakpoint({
                        xs: {
                          fontSize: 20,
                        },
                      }),
                    }}
                  />
                </div>
                <p
                  style={{
                    fontSize: 35,
                    ...THEME.Lato,
                    ...breakpoint({
                      xs: {
                        fontSize: 30,
                      },
                    }),
                  }}
                >
                  (803) 328-2427
                </p>
              </div>
            </div>
            <Directory />
          </div>
        </div>
        <Svg
          fill={THEME.navy}
          style={{ backgroundColor: THEME.teal }}
          height={320}
          d='M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,170.7C672,160,768,96,864,96C960,96,1056,160,1152,186.7C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        />
      </section>
    </>
  )
}

export default Visit

function Directory() {
  const { breakpoint } = useBreakpoints()
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        // flexDirection: 'column',
        // alignItems: 'stretch',
        gridTemplateColumns: '1fr',
        gridGap: 10,

        ...breakpoint({
          xl: {
            gridTemplateColumns: '1fr 1fr',
          },
          md: {
            gridTemplateColumns: '1fr 1fr',
          },
          lg: {
            gridTemplateColumns: '1fr 1fr',
          },
        }),
      }}
    >
      <ContactCard email='archives@catawba.com' extension='0000'>
        General Questions
      </ContactCard>
      <ContactCard email='language@catawba.com' extension='0001'>
        Language Questions
      </ContactCard>
      <ContactCard email='tradingpost@catawba.com' extensions='0002'>
        Trading Post Questions
      </ContactCard>
      <ContactCard email='library@catawba.com' extension='0003'>
        Library Questions
      </ContactCard>
      <ContactCard email='thpo@catawba.com' extension='0004'>
        Tribal Historic Preservation Office
      </ContactCard>
      <ContactCard email='culturalprograms@catawba.com' extension='0005'>
        School or Other Public Programs
      </ContactCard>
    </div>
  )
}

function ContactCard({ children, email, extension }) {
  const [isActive, setIsActive] = useState()

  return (
    <div
      style={{
        backgroundColor: THEME.white,
        minHeight: '100px',
        borderRadius: '5px',
        boxShadow: `${isActive ? '2px 2px 2px' : '1px 1px 1px'} rgba(0,0,0,${
          isActive ? 0.5 : 0.3
        })`,
        display: 'flex',
        flexDirection: 'column',
        padding: '10px',
        transition: 'all 0.2s ease',
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <h3
        style={{
          ...THEME.DMSerif,
          fontWeight: 'bold',
          fontSize: 20,
          marginBottom: 10,
        }}
      >
        {children}
      </h3>
      {email == null ? null : (
        <div
          style={{
            ...THEME.Lato,
            paddingLeft: 10,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: 25,
              height: 25,
              borderRadius: 25,
              backgroundColor: THEME.navy,
              display: 'grid',
              placeItems: 'center',
              marginRight: 10,
            }}
          >
            <EmailIcon style={{ color: THEME.white, fontSize: 15 }} />
          </div>
          <p>{email}</p>
        </div>
      )}
      {extension == null ? null : (
        <div
          style={{
            paddingLeft: 10,
            marginTop: 10,
            display: 'flex',
            alignItems: 'center',
            ...THEME.Lato,
          }}
        >
          <div
            style={{
              width: 25,
              height: 25,
              borderRadius: 25,
              backgroundColor: THEME.navy,
              display: 'grid',
              placeItems: 'center',
              marginRight: 10,
            }}
          >
            <PhoneIcon style={{ color: THEME.white, fontSize: 15 }} />
          </div>
          <p>
            <span style={{ fontStyle: 'italic' }}>extension</span>
            {` ${extension}`}
          </p>
        </div>
      )}
    </div>
  )
}
