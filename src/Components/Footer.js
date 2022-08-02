import THEME from '../THEME'

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
      <svg
        style={{ backgroundColor: THEME.yellow }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.navy}
          fill-opacity='1'
          d='M0,320L48,288C96,256,192,192,288,176C384,160,480,192,576,218.7C672,245,768,267,864,256C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
        ></path>
      </svg>
      <h3 style={{ minHeight: 50, display: 'grid', placeItems: 'center' }}>
        The Catawba Cultural Center and its programs and facilities are managed
        by the Cultural Division of Catawba Nation
      </h3>
    </footer>
  )
}

export default Footer
