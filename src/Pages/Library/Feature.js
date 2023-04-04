import React from 'react'
import RichText from '../../Components/RichText'
import Svg from '../../Components/Svg'

import useAPI from '../../hooks/useAPI'
import useBreakpoints from '../../hooks/useBreakpoints'
import THEME from '../../THEME'

const Feature = () => {
  const { content } = useAPI()
  const { libraryFeatureBooks } = content[0].fields

  const { breakpoint } = useBreakpoints()
  // overflow: 'hidden' is hacky but it works!
  return (
    <div style={{ backgroundColor: THEME.yellow, overflow: 'hidden' }}>
      <Svg
        style={{
          backgroundColor: THEME.blue,
          position: 'relative',
        }}
        fill={THEME.yellow}
        d='M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,101.3C672,75,768,85,864,80C960,75,1056,53,1152,69.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            ...THEME.DMSerif,
            fontStyle: 'italic',

            position: 'relative',
            placeSelf: 'center',
            fontSize: 30,
            width: breakpoint({
              xs: '80%',
              sm: '80%',
              md: '80%',
              lg: '60%',
              xl: '50%',
            }),
            marginBottom: 20,
          }}
        >
          Catawba Book Club will begin meeting again in May. Please contact the
          Tribal Librarian to sign up!
        </h2>
        {/* <div
          style={{
            display: 'flex',
            alignItems: 'center',
            ...breakpoint({
              sm: { flexDirection: 'column' },
              xs: { flexDirection: 'column' },
            }),
          }}
        >
          <div
            style={{
              backgroundColor: THEME.blue,
              marginRight: 30,
              backgroundImage: `url(https:${libraryFeatureBooks[0].fields.bookImage.fields.file.url})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              borderRadius: 10,
              boxShadow: `1px 1px 2px rgba(0, 0, 0, 0.5)`,
              width: 8.5 * 35,
              height: 11 * 35,
              margin: 20,
              ...breakpoint({
                md: {
                  width: 8.5 * 30,
                  height: 11 * 30,
                },
                sm: {
                  width: 8.5 * 28,
                  height: 11 * 28,
                  margin: 20,
                },
                xs: {
                  width: 8.5 * 28,
                  height: 11 * 28,
                  margin: 20,
                },
              }),
            }}
          ></div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'stretch',
              alignItems: 'stretch',
            }}
          >
            <h3
              style={{
                ...THEME.DMSerif,

                paddingBottom: 20,

                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <span
                style={{
                  fontStyle: 'italic',
                  fontSize: 32,
                  ...breakpoint({
                    md: { fontSize: 24 },
                    sm: { textAlign: 'center' },
                    xs: { textAlign: 'center' },
                  }),
                }}
              >
                {libraryFeatureBooks[0].fields.bookTitle}
              </span>
              <span
                style={{
                  fontSize: 24,
                  ...THEME.Lato,
                  color: 'rgba(0,0,0,0.8)',
                  ...breakpoint({
                    md: {
                      fontSize: 18,
                    },
                    sm: {
                      textAlign: 'center',
                    },
                    xs: {
                      textAlign: 'center',
                    },
                  }),
                }}
              >
                {libraryFeatureBooks[0].fields.bookAuthor}
              </span>
            </h3>
            <div
              style={{
                ...THEME.NotoSans,
                fontSize: 16,
                width: 400,
                lineHeight: 1.2,
                paddingBottom: 20,
                ...breakpoint({
                  md: {
                    fontSize: 14,
                  },
                  sm: {
                    textAlign: 'center',
                    width: 'auto',
                    paddingLeft: 30,
                    paddingRight: 30,
                  },
                  xs: {
                    textAlign: 'center',
                    width: 'auto',
                    paddingLeft: 30,
                    paddingRight: 30,
                  },
                }),
              }}
            >
              <RichText>
                {libraryFeatureBooks[0].fields.bookDescription.content}
              </RichText>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Feature
