import THEME from '../../THEME'
import useAPI from '../../hooks/useAPI'

import RichText from '../../Components/RichText'

import { useEffect, useState } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import Svg from '../../Components/Svg'
const Link = ({ data, i }) => {
  const link = data
  const rate = i * 0.05 + 0.5
  const [show, setShow] = useState(false)
  const [active, setActive] = useState(false)
  const toggle = () => setActive((bool) => !bool)
  useEffect(() => {
    setShow(true)
  }, [])
  return (
    <a
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      href={link.fields.linkUrl}
      style={{
        backgroundColor: active ? THEME.yellow : THEME.white,
        borderRadius: 50,
        textDecoration: 'none',
        color: THEME.navy,
        ...THEME.Lato,
        boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 10,
        marginRight: 10,
        position: 'relative',
        opacity: show ? 1 : 0,
        bottom: show ? 0 : -50,
        transition: `opacity ${
          rate - 0.2
        }s ease-in, bottom ${rate}s ease-in, background-color 0.1s ease-in`,
      }}
    >
      <div
        style={{
          backgroundImage: `url(https:${link.fields.linkImage.fields.file.url})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 40,
          width: 40,

          borderRadius: 40,
        }}
      ></div>
      <span style={{ marginLeft: 5, marginRight: 15, fontSize: 20 }}>
        {link.fields.linkTitle}
      </span>
    </a>
  )
}
const Links = () => {
  const { content } = useAPI()

  return content[0].fields.homepageLinks.map((link, i) => {
    return <Link data={link} key={i} i={i} />
  })
}

const Greeting = () => {
  const { content } = useAPI()
  const { width } = useWindowSize()
  const images = content[0].fields.homepageHeroImage
  const [imageUrl, setImageUrl] = useState(images[0].fields.file.url)
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    setLoaded(true)
    const int = setInterval(() => {
      let curr = images.shift()
      // console.log(curr)
      images.push(curr)
      setImageUrl(images[0].fields.file.url)
    }, 5000)
    return () => clearInterval(int)
  }, [images])

  return (
    <section>
      <div
        style={{
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(http://${imageUrl})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            transition: 'background 0.8s ease-in',
          }}
        >
          <div>
            <Svg
              fill={THEME.navy}
              d='M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,250.7C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
            />
            <div
              style={{
                backgroundColor: THEME.navy,

                display: 'flex',
                alignItems: width < 1200 ? 'flex-start' : 'center',
                position: 'relative',
              }}
            >
              <img
                style={{ width: '10vw', marginLeft: 30 }}
                alt=''
                src='./icon.png'
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h1
                  style={{
                    ...THEME.DMSerif,
                    fontSize: '7vw',
                    color: THEME.white,

                    padding: 10,
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    position: 'relative',
                    right: loaded ? 0 : -1500,
                    transition: 'right 0.5s ease-in',
                  }}
                >
                  Catawba Cultural Center
                </h1>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-around',

                    marginBottom: 20,
                    flexWrap: 'wrap',
                  }}
                >
                  <Links />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: THEME.blue,
          width: '100%',
          minHeight: 300,
          textAlign: 'center',
          fontSize: 25,
          ...THEME.NotoSans,
          lineHeight: 1.5,
          display: 'grid',
          placeItems: 'center',
        }}
      >
        <Svg
          style={{ backgroundColor: THEME.navy, position: 'relative', top: -5 }}
          fill={THEME.blue}
          d='M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,202.7C672,235,768,245,864,245.3C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        />

        <div style={{ width: '80%' }}>
          <RichText>{content[0].fields.homepageDescription.content}</RichText>
        </div>
      </div>
    </section>
  )
}
export default Greeting
