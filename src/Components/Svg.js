import React from 'react'

const Svg = ({
  fill,
  minX = 0,
  minY = 0,
  width = 1000,
  height = 300,
  style,
  d,
}) => {
  return (
    <svg
      style={{ position: 'relative', bottom: -5, ...style }}
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`${minX} ${minY} ${width} ${height}`}
    >
      <path fill={fill} fill-opacity='1' d={d}></path>
    </svg>
  )
}

export default Svg
