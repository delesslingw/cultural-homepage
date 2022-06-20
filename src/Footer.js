import { COLORS } from './App'

const Footer = () => {
  return (
    <footer
      style={{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 50,
        display: 'grid',
        placeItems: 'center',
        backgroundColor: COLORS.navy,
        color: COLORS.white,
        fontFamily: "'Lato', sans-serif",
      }}
    >
      The Catawba Cultural Center and its programs and facilities are managed by
      the Cultural Division of Catawba Nation
    </footer>
  )
}

export default Footer
