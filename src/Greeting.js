import COLORS from './COLORS'
import useAPI from './useAPI'

import RichText from './RichText'
import useWindowSize from './useWindowSize'
import Polaroid from './Polaroid'

const Greeting = () => {
  const { content } = useAPI()
  const { width } = useWindowSize()
  const images = content[0].fields.homepageHeroImage
  const img = images[2]
  console.log('image?')
  console.log(img)
  return (
    <section>
      <div
        style={{
          minHeight: 600,

          display: 'grid',
          placeItems: 'center',
          position: 'relative',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(http://${img.fields.file.url})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: 'white',
          width: '100%',
          minHeight: 300,
          textAlign: 'center',
          fontSize: 25,
          fontFamily: "'Noto Sans', sans-serif",
          lineHeight: 1.5,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <div style={{ width: '80%' }}>
          <RichText>{content[0].fields.homepageDescription.content}</RichText>
        </div>
      </div>
    </section>
  )
}
export default Greeting
