import React from 'react'
import THEME from '../THEME'
export const Variants = [
  'M0,192L48,202.7C96,213,192,235,288,202.7C384,171,480,85,576,85.3C672,85,768,171,864,176C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z',
]
const Svg = ({ d = Variants[0], style = {}, fill = THEME.white }) => {
  return (
    <svg
      style={{
        position: 'relative',

        ...style,
      }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <path fill={fill} fillOpacity='1' d={d}></path>
    </svg>
  )
}

export default Svg
