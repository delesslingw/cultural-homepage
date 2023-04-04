import React, { useState } from 'react'
import RichText from '../../Components/RichText'
import Svg from '../../Components/Svg'
import useAPI from '../../hooks/useAPI'
import useBreakpoints from '../../hooks/useBreakpoints'
import THEME from '../../THEME'
const Link = ({ link }) => {
  const [active, setActive] = useState(false)
  const { breakpoint } = useBreakpoints()
  const hasImage = link.fields.resourceImage !== undefined
  return (
    <a
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      key={link.fields.resourceLink}
      href={link.fields.resourceLink}
      style={{
        textDecoration: 'none',
        color: THEME.black,
        backgroundColor: THEME.white,

        position: 'relative',
        display: 'flex',
        borderLeft: '1px dotted black',
        marginLeft: 65,
        marginRight: 65,
        ...breakpoint({
          md: {
            maxWidth: 'none',
          },
        }),
      }}
    >
      <div
        style={{
          // backgroundImage: hasImage
          //   ? `url(https://${link.fields.resourceImage.fields.file.url})`
          //   : '',
          transition: 'all 0.2s ease',
          backgroundColor: active ? THEME.blue : THEME.black,
          height: 20,
          width: 20,
          borderRadius: 20,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'absolute',
          top: -10,
          left: -10,
          boxShadow: hasImage ? `1px 1px 2px rgba(0,0,0,0.5)` : 'none',
          cursor: 'pointer',
        }}
      ></div>
      <div
        style={{
          textAlign: 'justify',
          paddingLeft: 30,
          paddingBottom: 30,
        }}
      >
        <h4
          style={{
            textAlign: 'left',
            ...THEME.DMSerif,
            fontSize: 24,
            marginBottom: 12,
          }}
        >
          {link.fields.resourceTitle}
        </h4>
        <div style={{ ...THEME.NotoSans, lineHeight: 1.1 }}>
          <RichText>{link.fields.resourceDescription.content}</RichText>
        </div>
      </div>
    </a>
  )
}

// TODO: refactor to use
const Resources = () => {
  const { content } = useAPI()
  const { breakpoint } = useBreakpoints()
  const { libraryResources } = content[0].fields
  return (
    <div style={{ backgroundColor: THEME.white }}>
      <Svg
        style={{ backgroundColor: THEME.teal }}
        fill={THEME.white}
        d='M0,32L48,58.7C96,85,192,139,288,160C384,181,480,171,576,176C672,181,768,203,864,218.7C960,235,1056,245,1152,224C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      />
      <div
        style={{
          minHeight: '50vh',
        }}
      >
        <h3
          style={{
            ...THEME.DMSerif,
            fontSize: 48,
            marginLeft: 65 - 50,
            marginBottom: 65,
          }}
        >
          Resources
        </h3>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingBottom: 50,
            ...breakpoint({
              md: {},
            }),
          }}
        >
          {libraryResources.map((link, i) => (
            <Link key={link.fields.resourceTitle} link={link}></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Resources
