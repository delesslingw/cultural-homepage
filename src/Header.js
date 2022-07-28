import { useEffect, useState } from 'react'
import COLORS from './COLORS'
import useWindowSize from './useWindowSize'

const Header = () => {
  const { height, width } = useWindowSize()
  const [top, setTop] = useState(-50)
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    console.log(height)
    if (position >= height - 50) {
      setTop(0)
    }
    if (position < height - 50) {
      setTop(-50)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header
      style={{
        backgroundColor: COLORS.navy,
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        top,
        transition: 'top .5s',
      }}
    >
      <img style={{ height: 50 }} alt='' src='./icon.png' />
      <h1
        style={{
          color: COLORS.white,
          fontFamily: "'DM Serif Text', serif",
          fontSize: 20,
        }}
      >
        Catawba Cultural Center
      </h1>
    </header>
  )
}

export default Header
