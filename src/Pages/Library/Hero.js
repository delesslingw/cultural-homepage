import RichText from '../../Components/RichText'
import THEME from '../../THEME'
import useBreakpoints from '../../hooks/useBreakpoints'

const Hero = ({ title, description, image, backgroundColor = THEME.blue }) => {
  const { breakpoint } = useBreakpoints()
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',

        backgroundColor,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',

          width: '100vw',
          height: '90vh',
        }}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1440 320'
          style={{ position: 'absolute' }}
        >
          <path
            fill={backgroundColor}
            fillOpacity='1'
            d='M0,288L48,288C96,288,192,288,288,282.7C384,277,480,267,576,224C672,181,768,107,864,74.7C960,43,1056,53,1152,48C1248,43,1344,21,1392,10.7L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
          ></path>
        </svg>
      </div>
      <div
        style={{
          position: 'relative',
          alignSelf: 'flex-end',

          paddingRight: 30,
          paddingLeft: 30,
          ...breakpoint({
            xl: {
              top: -200,
              width: '50%',
            },
            lg: {
              top: 0,

              width: '70%',
            },
            md: {
              top: -50,
            },
            sm: {
              top: -70,
              width: 'auto',
            },
          }),
        }}
      >
        <h2
          style={{
            ...THEME.DMSerif,

            paddingBottom: 25,
            textAlign: 'right',
            position: 'relative',
            ...breakpoint({
              xl: {
                fontSize: 64,
              },
              lg: {
                fontSize: 50,
                top: -150,
              },
              md: {
                fontSize: 40,
                top: -50,
              },
              sm: {
                fontSize: 40,
                top: 0,
              },
              xs: {
                fontSize: 40,
                top: 0,
              },
            }),
          }}
        >
          {title}
        </h2>
        <div
          style={{
            ...THEME.Lato,
            fontSize: 16,
            position: 'relative',
            ...breakpoint({
              xl: {
                fontSize: 24,
                textAlign: 'right',
              },
              lg: {
                top: -70,
                fontSize: 26,
                textAlign: 'right',
              },
              md: {
                textAlign: 'left',
              },
              sm: {
                bottom: -20,
              },
            }),
          }}
        >
          <RichText>{description.content}</RichText>
        </div>
      </div>
    </div>
  )
}

export default Hero
