import COLORS from './COLORS'
import { useEffect, useState } from 'react'

const Polaroid = ({ children, imgURL, style }) => {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    setRotation(Math.random() - 0.5)
  }, [])
  return (
    <div
      style={{
        backgroundColor: COLORS.white,
        width: 3.5 * 75,
        height: 4.2 * 75,
        borderRadius: 3,
        boxShadow: `1px 1px 2px #333`,
        transform: `rotate(${rotation * 20}deg)`,
        position: 'absolute',

        ...style,
      }}
    >
      <div
        style={{
          backgroundColor: COLORS.black,
          width: 3.1 * 75,
          height: 3.1 * 75,
          margin: 0.2 * 75,
          borderRadius: 1,
          backgroundImage: `url('${imgURL}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>
      <h3
        style={{
          textAlign: 'center',
          fontFamily: "'Lato', sans-serif",
          fontStyle: 'italic',
          fontWeight: 'bolder',
          fontSize: 30,
        }}
      >
        {children}
      </h3>
    </div>
  )
}

export default Polaroid
