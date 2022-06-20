import COLORS from './COLORS'

const Header = () => {
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
        }}
      >
        Catawba Cultural Center
      </h1>
    </header>
  )
}

export default Header
