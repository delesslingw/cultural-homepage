import COLORS from './COLORS'
import Polaroid from './Polaroid'
import RichText from './RichText'
import useAPI from './useAPI'

const Visit = () => {
  const { content } = useAPI()
  console.log(content[0].fields)
  const { visitDescription, visitImage, visitHours, visitAddress } =
    content[0].fields
  return (
    <section
      style={{
        backgroundColor: COLORS.yellow,
        minHeight: 500,
        padding: 20,
        display: 'flex',
        justifyContent: 'center',
        fontFamily: "'Noto Sans', sans-serif",
        lineHeight: 1.2,
      }}
    >
      <div style={{ maxWidth: 500, paddingRight: 20 }}>
        <h2
          style={{
            fontFamily: "'DM Serif Text', serif",
            fontSize: 50,
            marginBottom: 20,
          }}
        >
          Plan a Visit
        </h2>
        <RichText>{visitDescription.content}</RichText>
      </div>
      <div style={{}}>
        <Polaroid
          style={{
            transform: 'rotate(0deg)',
            position: 'relative',
            display: 'flex',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          imgURL={`http:${visitImage.fields.file.url}`}
        >
          Cultural Center
        </Polaroid>
        <div
          style={{
            textAlign: 'center',
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
            rowGap: 10,
            paddingTop: 20,
          }}
        >
          <RichText>{visitHours.content}</RichText>
          <RichText>{visitAddress.content}</RichText>
        </div>
      </div>
    </section>
  )
}

export default Visit
