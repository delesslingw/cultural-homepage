import { useEffect, useState } from 'react'
import THEME from '../THEME'

import useWindowSize from '../hooks/useWindowSize'
import { ReactComponent as Menu } from '../assets/menu.svg'
import useAPI from '../hooks/useAPI'
const Links = () => {
  const { content } = useAPI()

  return content[0].fields.homepageLinks.map((link, i) => (
    <a
      href={link.fields.linkUrl}
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: THEME.white,
        borderRadius: 50,
        textDecoration: 'none',
        color: THEME.navy,
        ...THEME.Lato,
        boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        fontSize: 20,
      }}
    >
      {link.fields.linkTitle}
    </a>
  ))
}
const Header = () => {
  const { height } = useWindowSize()

  const [hidden, setHidden] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset
      console.log(height)
      if (position >= height - 50) {
        setHidden(false)
      }
      if (position < height - 50) {
        setHidden(true)
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [height])
  return (
    <header
      style={{
        backgroundColor: hidden ? 'transparent' : THEME.navy,
        minHeight: 50,
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 10,
        width: '100%',
        top: hidden ? -100 : 0,
        transition: 'top .5s',
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <img
          style={{ height: 50, display: hidden && 'none' }}
          alt=''
          src='./icon.png'
        />

        <h1
          style={{
            display: hidden && 'none',
            color: THEME.white,
            ...THEME.DMSerif,
            fontSize: 20,
          }}
        >
          Catawba Cultural Center
        </h1>
      </div>
      <div
        style={{
          position: 'absolute',

          height: '100%',
          width: '100%',
          right: 0,
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            height: 50,
            width: 50,
            borderRadius: 50,
            backgroundColor: THEME.white,
            display: 'grid',
            placeItems: 'center',
            marginRight: 15,
            transform: `rotate(${showMenu ? 0 : -90}deg)`,
          }}
          onMouseDown={() => setShowMenu((bool) => !bool)}
        >
          <Menu />
        </div>
        <div
          style={{
            flex: 1,
            display: showMenu ? 'flex' : 'none',
            justifyContent: 'space-around',
            backgroundColor: THEME.navy,
            position: 'relative',
          }}
        >
          <Links />
        </div>
      </div>
    </header>
  )
}

export default Header
