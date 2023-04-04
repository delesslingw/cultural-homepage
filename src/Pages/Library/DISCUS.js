import Svg, { Variants } from '../../Components/Svg'
import THEME from '../../THEME'

const DISCUS_URL = 'https://www.scdiscus.org/home'
const DISCUS_LOGO = 'https://www.scdiscus.org/sites/default/files/logo_1.png'
const Logo = () => {
  return (
    <div
      style={{
        borderRadius: 50,
        width: 100,
        height: 100,
        backgroundColor: THEME.white,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <img
        src={DISCUS_LOGO}
        alt='DISCUS logo'
        height={90}
        style={{ position: 'relative', left: 15, top: 5 }}
      />
    </div>
  )
}
const DISCUS = () => {
  return (
    <div style={{ backgroundColor: THEME.teal, overflow: 'hidden' }}>
      <Svg
        d={Variants[0]}
        fill={THEME.teal}
        style={{ backgroundColor: THEME.yellow }}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Logo />

        <div
          style={{
            ...THEME.DMSerif,
            fontSize: 50,
            display: 'flex',
            alignItems: 'center',

            backgroundColor: 'transparent',
          }}
        >
          How to Access DISCUS
        </div>
      </div>
    </div>
  )
}
export default DISCUS
