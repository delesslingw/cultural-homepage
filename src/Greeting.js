import COLORS from './COLORS'
import useAPI from './useAPI'

import RichText from './RichText'
import useWindowSize from './useWindowSize'
import Polaroid from './Polaroid'

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
        backgroundColor: COLORS.yellow,
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
