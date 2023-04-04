import { useState } from 'react'
import Svg, { Variants } from '../../Components/Svg'
import useBreakpoints from '../../hooks/useBreakpoints'
import THEME from '../../THEME'

const DISCUS_URL = 'https://www.scdiscus.org/home'
const DISCUS_LOGO = 'https://www.scdiscus.org/sites/default/files/logo_1.png'
const Button = () => {
  const [pressed, setPressed] = useState(false)
  const [active, setActive] = useState(false)
  return (
    <a
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      style={{
        transition: 'all 0.2s ease',
        textDecoration: 'none',
        color: THEME.navy,
        backgroundColor: THEME.white,
        boxShadow: `${pressed ? '0px 1px 1px' : '1px 2px 2px'} rgba(0,0,0,${
          active ? 0.8 : 0.5
        })`,
        width: '80%',
        height: 70,
        borderRadius: 15,
        display: 'grid',
        placeItems: 'center',
        margin: 10,
        ...THEME.NotoSans,
        fontWeight: 700,
        fontSize: active ? 23 : 20,
      }}
      href={DISCUS_URL}
    >
      VISIT DISCUS
    </a>
  )
}
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
        marginRight: 20,
        boxShadow: '1px 1px 1px rgba(0,0,0,0.5)',
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
  const { breakpoint } = useBreakpoints()
  return (
    <div style={{ backgroundColor: THEME.teal, overflow: 'hidden' }}>
      <Svg
        d={Variants[0]}
        fill={THEME.teal}
        style={{ backgroundColor: THEME.yellow }}
      />
      <div style={{ display: 'grid', placeItems: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />

          <div
            style={{
              ...THEME.DMSerif,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'transparent',
              fontSize: breakpoint({ xs: 30, sm: 40, md: 45, lg: 50, xl: 50 }),
            }}
          >
            How to Access DISCUS
          </div>
        </div>
        <div
          style={{
            display: 'grid',
            placeItems: 'center',
            width: breakpoint({ xs: '90vw' }),
          }}
        >
          <div
            style={{
              fontSize: 20,
              ...THEME.Lato,
              marginTop: 30,
              marginBottom: 40,
              textAlign: 'center',
            }}
          >
            Discus provides all South Carolinians with access to an electronic
            library of essential information resources. This set of core
            resources is made available to every citizen through South
            Carolina's school, college and public libraries. Discus ensures
            equal access to information and learning resources regardless of
            race or socio-economic status.
          </div>
          <Button />
          <div
            style={{
              fontSize: 18,
              ...THEME.Lato,
              marginTop: 20,
              marginBottom: 20,
              fontStyle: 'italic',
              width: '80%',
              textAlign: 'center',
            }}
          >
            If you are accessing DISCUS for the first time and need a login
            please contact the Tribal Librarian at{' '}
            <a href='+18033243740'>(803) 324-3740</a> or at{' '}
            <a href='rachel.hooper@catawba.com'>rachel.hooper@catawba.com</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default DISCUS
