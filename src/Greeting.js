import COLORS from './COLORS'
import useAPI from './useAPI'

import RichText from './RichText'
import useWindowSize from './useWindowSize'
import { useEffect, useState } from 'react'

const Polaroid = ({ children, imgURL, style }) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(Math.random() - 0.5)
  }, [])
  return (
    <div
      style={{
        backgroundColor: COLORS.white,
        width: 3.5 * 75,
        height: 4.2 * 75,
        borderRadius: 3,
        boxShadow: `1px 1px 2px #333`,
        transform: `rotate(${rotation * 20}deg)`,
        position: 'absolute',
        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.black,
          width: 3.1 * 75,
          height: 3.1 * 75,
          margin: 0.2 * 75,
          borderRadius: 1,
          backgroundImage: `url('${imgURL}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Lato', sans-serif",
          fontStyle: 'italic',
          fontWeight: 'bolder',
          fontSize: 30,
        }}
      >
        {children}
      </h3>
    </div>
  )
}
const Polaroids = () => {
  const { content } = useAPI()
  return content[0].fields.homepageHeroImage.reduce(
    (acc, img) => [
      <Polaroid imgURL={`http://${img.fields.file.url}`}>Tαnakɛ!</Polaroid>,
      ...acc,
    ],

    []
  )
}
const Greeting = () => {
  const { content } = useAPI()
  console.log(content[0].fields.homepageHeroImage)
  const { width } = useWindowSize()
  return (
    <section
      style={{
        minHeight: 400,

        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: width < 800 ? 'column' : 'row',
        justifyContent: 'stretch',

        alignItems: 'stretch',
        backgroundColor: COLORS.white,
      }}
    >
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          margin: 50,
          // width: 3.5 * 75,
          flex: 1,
          position: 'relative',
        }}
      >
        <Polaroid style={{ position: 'relative' }} />
        <Polaroids />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 3,
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            zIndex: 10,
            position: 'relative',
            width: '80%',
            textAlign: 'center',
            fontSize: 20,
            fontFamily: "'Noto Sans', sans-serif",
            lineHeight: 1.2,
          }}
        >
          <RichText>{content[0].fields.homepageDescription.content}</RichText>
        </div>
      </div>
    </section>
  )
}
export default Greeting
