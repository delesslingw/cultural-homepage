import React from 'react'
import RichText from '../../Components/RichText'
import Svg from '../../Components/Svg'
import useAPI from '../../hooks/useAPI'
import THEME from '../../THEME'
import Hero from './Hero'
const Feature = () => {
  const { content } = useAPI()
  const {
    libraryFeatureBooks,
    libraryTitle,
    libraryDescription,
    libraryImages,
  } = content[0].fields
  return (
    <>
      <svg
        style={{
          backgroundColor: THEME.blue,
          position: 'relative',
        }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.yellow}
          fill-opacity='1'
          d='M0,32L48,69.3C96,107,192,181,288,186.7C384,192,480,128,576,101.3C672,75,768,85,864,80C960,75,1056,53,1152,69.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'stretch',
          backgroundColor: THEME.yellow,
          position: 'relative',
          top: -5,
        }}
      >
        <h2
          style={{
            position: 'absolute',
            top: -150,
            right: 250,
            textAlign: 'center',
            ...THEME.DMSerif,
            fontStyle: 'italic',
            fontSize: 36,
          }}
        >
          Catawba Book Club is currently reading...
        </h2>
        <div
          style={{
            width: 8.5 * 30,
            height: 11 * 30,
            backgroundColor: THEME.blue,
            marginRight: 30,
            backgroundImage: `url(https:${libraryFeatureBooks[0].fields.bookImage.fields.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            borderRadius: 10,
            boxShadow: `1px 1px 2px rgba(0, 0, 0, 0.5)`,
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
          <h2
            style={{
              ...THEME.DMSerif,
              fontSize: 32,
              paddingBottom: 20,
              fontStyle: 'italic',
            }}
          >
            {libraryFeatureBooks[0].fields.bookTitle}
          </h2>
          <div
            style={{
              ...THEME.NotoSans,
              fontSize: 16,
              width: 400,
              lineHeight: 1.2,
            }}
          >
            <RichText>
              {libraryFeatureBooks[0].fields.bookDescription.content}
            </RichText>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature
