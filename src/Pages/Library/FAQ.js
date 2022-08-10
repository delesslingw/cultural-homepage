import React from 'react'
import RichText from '../../Components/RichText'
import useBreakpoints from '../../hooks/useBreakpoints'

import THEME from '../../THEME'
// TODO: refactor & restyle FAQ
const FAQ = ({ data }) => {
  const libraryFAQ = data
  const { breakpoint } = useBreakpoints()
  return (
    <div style={{ backgroundColor: THEME.orange }}>
      <svg
        style={{
          backgroundColor: THEME.white,
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.orange}
          fillOpacity='1'
          d='M0,160L48,160C96,160,192,160,288,149.3C384,139,480,117,576,101.3C672,85,768,75,864,96C960,117,1056,171,1152,160C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          backgroundColor: THEME.orange,

          display: 'grid',
          placeItems: 'center',
        }}
      >
        <h3
          style={{
            fontSize: 32,
            ...THEME.DMSerif,
            marginBottom: 32,
            textAlign: 'center',
          }}
        >
          Frequently Asked Questions
        </h3>
        <div
          style={{
            width: '50vw',
            margin: 'auto',
            ...breakpoint({
              md: {
                width: '90%',
              },
              sm: {
                width: '90%',
              },
              xs: {
                width: '90%',
              },
            }),
          }}
        >
          {libraryFAQ.map((data, i) => {
            const { question, answer } = data.fields
            return (
              <div
                key={i}
                style={{
                  marginBottom: 5,
                  backgroundColor: THEME.white,
                  padding: 20,
                  borderRadius: 2,
                  boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                <h4
                  style={{
                    ...THEME.DMSerif,
                    fontSize: 24,
                    fontStyle: 'italic',
                  }}
                >
                  {question}
                </h4>
                <div
                  style={{
                    height: 0,
                    width: 150,
                    border: '1px solid rgba(0,0,0,0.7)',
                    marginBottom: 10,
                    marginTop: 10,
                  }}
                />
                <div style={{ ...THEME.NotoSans, fontSize: 16 }}>
                  <RichText>{answer.content}</RichText>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default FAQ
