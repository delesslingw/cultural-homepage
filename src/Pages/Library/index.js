import React from 'react'
import RichText from '../../Components/RichText'

import useAPI from '../../hooks/useAPI'
import THEME from '../../THEME'
import Feature from './Feature'
import Hero from './Hero'
import Resources from './Resources'
const Library = () => {
  const { content } = useAPI()
  const { libraryFAQ, libraryTitle, libraryDescription, libraryImages } =
    content[0].fields
  console.log(content[0].fields)
  return (
    <section>
      <Hero
        image={`https:${libraryImages[0].fields.file.url}`}
        title={libraryTitle}
        description={libraryDescription}
      />
      <Feature />
      <Resources />
      <>
        <svg
          style={{
            backgroundColor: THEME.teal,
            position: 'relative',
            top: -60,
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill={THEME.orange}
            fill-opacity='1'
            d='M0,160L48,160C96,160,192,160,288,149.3C384,139,480,117,576,101.3C672,85,768,75,864,96C960,117,1056,171,1152,160C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div
          style={{
            backgroundColor: THEME.orange,
            minHeight: '50vh',
            position: 'relative',
            top: -200,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <h3
            style={{
              fontSize: 32,
              ...THEME.DMSerif,
              position: 'relative',
              top: -50,
            }}
          >
            Frequently Asked Questions
          </h3>
          <div style={{ width: '50vw', margin: 'auto' }}>
            {libraryFAQ.map((data, i) => {
              const { question, answer } = data.fields
              return (
                <div
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
                      marginBottom: 10,
                    }}
                  >
                    {question}
                  </h4>
                  <div style={{ ...THEME.NotoSans, fontSize: 16 }}>
                    <RichText>{answer.content}</RichText>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <svg
          style={{
            backgroundColor: THEME.orange,
            position: 'relative',
            top: -200,
          }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill={THEME.navy}
            fill-opacity='1'
            d='M0,32L48,74.7C96,117,192,203,288,208C384,213,480,139,576,101.3C672,64,768,64,864,85.3C960,107,1056,149,1152,160C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </>
    </section>
  )
}

export default Library
