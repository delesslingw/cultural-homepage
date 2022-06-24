import COLORS from './COLORS'
import useWindowSize from './useWindowSize'

const Header = () => {
  const { width } = useWindowSize()
  return (
    <header
      style={{
        backgroundColor: COLORS.navy,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img style={{ height: 75, marginRight: 30 }} alt='' src='./icon.png' />
      <h1
        style={{
          color: COLORS.white,
          fontFamily: "'DM Serif Text', serif",
          fontSize: 30,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        Catawba Cultural Center
      </h1>
    </header>
  )
}

export default Header
