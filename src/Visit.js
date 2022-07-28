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
    <>
      <section
        style={{
          backgroundColor: COLORS.yellow,
        }}
      >
        <svg
          style={{ backgroundColor: COLORS.white }}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
        >
          <path
            fill={COLORS.yellow}
            fill-opacity='1'
            d='M0,96L48,112C96,128,192,160,288,192C384,224,480,256,576,261.3C672,267,768,245,864,224C960,203,1056,181,1152,186.7C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div
          style={{
            minHeight: 500,
            padding: 20,
            display: 'flex',
            justifyContent: 'center',
            fontFamily: "'Noto Sans', sans-serif",
            lineHeight: 1.2,
          }}
        >
          <div
            style={{
              maxWidth: 500,
              paddingRight: 20,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
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
            <div
              style={{
                height: 1,
                backgroundColor: COLORS.black,
                width: 250,
                marginTop: 50,
                marginBottom: 50,
              }}
            ></div>
            <div
              style={{
                textAlign: 'center',
                width: '100%',
                display: 'grid',
                justifyContent: 'center',
                rowGap: 10,
              }}
            >
              <RichText>{visitAddress.content}</RichText>
              <RichText>{visitHours.content}</RichText>
            </div>
          </div>
          <div style={{}}>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.0594197892415!2d-80.88701754928113!3d34.90162877984202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885680c46ea15685%3A0x36d4ef2c29c58f17!2sCatawba%20Cultural%20Center!5e1!3m2!1sen!2sus!4v1659030414523!5m2!1sen!2sus'
              style={{ width: 600, height: 450, border: 0 }}
              allowfullscreen=''
              loading='lazy'
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
        </div>
      </section>
    </>
  )
}

export default Visit
