import THEME from '../THEME'
import Svg from './Svg'

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        height: 50,
        backgroundColor: THEME.navy,
        color: THEME.white,
        ...THEME.Lato,
        fontSize: 20,
        textAlign: 'center',
      }}
    >
      <h3 style={{ minHeight: 50, display: 'grid', placeItems: 'center' }}>
        The Catawba Cultural Center and its programs and facilities are managed
        by the Cultural Division of Catawba Nation
      </h3>
    </footer>
  )
}

export default Footer
