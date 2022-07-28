import COLORS from './COLORS'
import useAPI from './useAPI'

import RichText from './RichText'
import useWindowSize from './useWindowSize'

import { useEffect, useState } from 'react'
const Wave = ({ fill }) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill={fill}
        fill-opacity='1'
        d='M0,288L48,272C96,256,192,224,288,218.7C384,213,480,235,576,245.3C672,256,768,256,864,250.7C960,245,1056,235,1152,240C1248,245,1344,267,1392,277.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
      ></path>
    </svg>
  )
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
      console.log(curr)
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
          <Wave fill={COLORS.navy} />
          <div
            style={{
              backgroundColor: COLORS.navy,

              display: 'flex',
              alignItems: 'center',
              position: 'relative',
              paddingTop: 20,
            }}
          >
            <img
              style={{ height: 130, marginRight: 30, marginLeft: 30 }}
              alt=''
              src='./icon.png'
            />
            <h1
              style={{
                fontFamily: "'DM Serif Text', serif",
                fontSize: 100,
                color: COLORS.white,

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
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: COLORS.blue,
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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          style={{ backgroundColor: COLORS.navy }}
        >
          <path
            fill={COLORS.blue}
            fill-opacity='1'
            d='M0,224L48,197.3C96,171,192,117,288,117.3C384,117,480,171,576,202.7C672,235,768,245,864,245.3C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
        <div style={{ width: '80%' }}>
          <RichText>{content[0].fields.homepageDescription.content}</RichText>
        </div>
      </div>
    </section>
  )
}
export default Greeting
