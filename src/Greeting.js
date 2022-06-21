import COLORS from './COLORS'
import useAPI from './useAPI'
import Dot from './Dot'
import RichText from './RichText'
import useWindowSize from './useWindowSize'
const Dots = () => {
  const { content } = useAPI()
  const { width } = useWindowSize()
  console.log(width)
  const r = width / 5

  return (
    <div
      style={{
        height: '100%',

        display: 'grid',
        placeItems: 'center',
        padding: 20,
      }}
    >
      <Dot
        r={r + 31}
        style={{
          backgroundColor: COLORS.navy,
        }}
      >
        <Dot
          r={r + 30}
          style={{
            backgroundColor: COLORS.orange,
          }}
        >
          <Dot
            r={r + 16}
            style={{
              backgroundColor: COLORS.navy,
            }}
          >
            <Dot
              r={r + 15}
              style={{
                backgroundColor: COLORS.yellow,
              }}
            >
              <Dot
                r={r + 1}
                style={{
                  backgroundColor: COLORS.navy,
                }}
              >
                <Dot
                  r={r}
                  imgURL={`http:${content[0].fields.homepageHeroImage.fields.file.url}`}
                  style={{}}
                ></Dot>
              </Dot>
            </Dot>
          </Dot>
        </Dot>
      </Dot>
    </div>
  )
}
const Greeting = () => {
  const { content } = useAPI()
  console.log(content)
  const { width } = useWindowSize()
  return (
    <section
      style={{
        minHeight: 400,

        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: width < 800 ? 'column' : 'row',
        justifyContent: 'space-around',

        alignItems: 'stretch',
      }}
    >
      <Dots />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          flex: 1,
          paddingBottom: 20,
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
            margin: 20,
          }}
        >
          Tαnakɛ!
        </h3>
        <div
          style={{
            zIndex: 10,
            position: 'relative',
            width: '80%',
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
