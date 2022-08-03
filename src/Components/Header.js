import { useEffect, useState } from 'react'
import THEME from '../THEME'

import useWindowSize from '../hooks/useWindowSize'
import { ReactComponent as Menu } from '../assets/menu.svg'
import useAPI from '../hooks/useAPI'
import { useLocation, useNavigate } from 'react-router-dom'

const Link = ({ data, i, showMenu }) => {
  const link = data
  const rate = i * 0.05 + 0.2
  const [active, setActive] = useState(false)
  const toggle = () => setActive((bool) => !bool)
  return (
    <a
      onMouseEnter={toggle}
      onMouseLeave={toggle}
      href={link.fields.linkUrl}
      style={{
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: active ? THEME.yellow : THEME.white,
        borderRadius: 50,
        textDecoration: 'none',
        color: THEME.navy,
        ...THEME.Lato,
        boxShadow: '1px 1px 2px rgba(0,0,0,0.5)',
        fontSize: 20,
        position: 'relative',
        top: showMenu ? 0 : -100,
        opacity: showMenu ? 1 : 0,
        transition: `top ${rate}s ease-in, opacity 0.3s ease-in, background-color 0.1s ease-in`,
      }}
    >
      {link.fields.linkTitle}
    </a>
  )
}
const Links = ({ showMenu }) => {
  const { content } = useAPI()

  return content[0].fields.homepageLinks.map((link, i) => {
    return <Link data={link} key={i} i={i} showMenu={showMenu} />
  })
}
const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'

  const { height } = useWindowSize()
  const navigate = useNavigate()
  const [hidden, setHidden] = useState(isHome ? true : false)
  const [showMenu, setShowMenu] = useState()
  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        const position = window.pageYOffset

        if (position >= height - 150) {
          setHidden(false)
        }
        if (position < height - 150) {
          setHidden(true)
        }
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isHome, height])
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
        transition: 'top .5s ease',
        paddingTop: 15,
        paddingBottom: 15,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onMouseDown={() => navigate('/')}
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
          width: showMenu ? '100%' : '70%',
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
            transform: `rotate(${showMenu ? 0 : 90}deg)`,
            transition: 'transform 0.2s ease-in',
            cursor: 'pointer',
          }}
          onMouseDown={() => setShowMenu((bool) => !bool)}
        >
          <Menu />
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: showMenu ? THEME.navy : 'transparent',
            transition: 'background-color 0.2s ease-in',
          }}
        >
          <Links showMenu={showMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header
