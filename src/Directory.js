import COLORS from './COLORS'
import Polaroid from './Polaroid'
import RichText from './RichText'
import useAPI from './useAPI'
import { IoMdArrowForward } from 'react-icons/io'
import { useState } from 'react'
const Link = ({ children }) => {
  const link = children
  const [active, setActive] = useState(false)
  return (
    <a
      href={link.fields.linkUrl}
      style={{ color: COLORS.black, textDecoration: 'none' }}
    >
      <div
        style={{ padding: 20, cursor: 'pointer' }}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <Polaroid
          style={{
            position: 'relative',
            transform: 'rotate(0deg)',
            fontSize: 10,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          imgURL={`http:${link.fields.linkImage.fields.file.url}`}
        >
          {link.fields.linkTitle}
        </Polaroid>
        <div
          style={{
            width: 3.5 * 75,

            textAlign: 'center',
            fontFamily: "'Lato', sans-serif",
            lineHeight: 1.2,
            display: 'grid',
            placeItems: 'center',
          }}
        >
          <div style={{ marginTop: 15, marginBottom: 15 }}>
            <RichText>{link.fields.linkDescription.content}</RichText>
          </div>
          <div
            style={{
              height: 40,
              width: '100%',
              borderRadius: 25,
              display: 'grid',
              placeItems: 'center',
              // border: `1px solid black`,
              boxShadow: '1px 1px 2px #666',
              margin: 5,
              backgroundColor: active ? COLORS.blue : COLORS.white,
            }}
          >
            <IoMdArrowForward size={25} />
          </div>
        </div>
      </div>
    </a>
  )
}
const Directory = () => {
  const { content } = useAPI()
  console.log(content[0].fields.homepageLinks)
  return (
    <section
      style={{
        minHeight: 500,
        backgroundColor: COLORS.white,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 20,
      }}
    >
      {content[0].fields.homepageLinks.map((link) => (
        <Link>{link}</Link>
      ))}
    </section>
  )
}

export default Directory
