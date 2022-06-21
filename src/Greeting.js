import COLORS from './COLORS'
import useAPI from './useAPI'
import Dot from './Dot'
import RichText from './RichText'
import useWindowSize from './useWindowSize'
const Dots = () => {
  const { content } = useAPI()
  const { width } = useWindowSize()
  console.log(width)
  return (
    <>
      <Dot
        r={681}
        style={{
          position: 'absolute',
          left: -150,
          bottom: -200,
          backgroundColor: COLORS.navy,
        }}
      />
      <Dot
        r={680}
        style={{
          position: 'absolute',
          left: -150,
          bottom: -200,
          backgroundColor: COLORS.orange,
        }}
      />
      <Dot
        r={666}
        style={{
          position: 'absolute',
          left: -150,
          bottom: -200,
          backgroundColor: COLORS.navy,
        }}
      />
      <Dot
        r={665}
        style={{
          position: 'absolute',
          left: -150,
          bottom: -200,
          backgroundColor: COLORS.yellow,
        }}
      />
      <Dot
        r={651}
        style={{
          position: 'absolute',
          left: -150,
          bottom: -200,
          backgroundColor: COLORS.navy,
        }}
      />
      <Dot
        r={650}
        imgURL={`http:${content[0].fields.homepageHeroImage.fields.file.url}`}
        style={{
          position: 'absolute',
          left: -150,
          bottom: -200,
        }}
      />
    </>
  )
}
const Greeting = () => {
  const { content } = useAPI()
  console.log(content)
  return (
    <section
      style={{
        height: 400,

        overflow: 'hidden',
        position: 'relative',
        display: 'grid',
        placeItems: 'stretch',
      }}
    >
      <Dots />
      <div
        style={{
          paddingLeft: 300,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <h3
          style={{
            fontSize: 100,
            textAlign: 'center',
            position: 'relative',

            fontFamily: "'Noto Sans', sans-serif",
            fontStyle: 'italic',
            fontWeight: 'bolder',
          }}
        >
          Tαnakɛ!
        </h3>
        <div
          style={{
            zIndex: 10,
            position: 'relative',
            width: '50%',
            textAlign: 'center',
            fontSize: 20,
            fontFamily: "'Noto Sans', sans-serif",
          }}
        >
          <RichText>{content[0].fields.homepageDescription.content}</RichText>
        </div>
      </div>
    </section>
  )
}
export default Greeting
