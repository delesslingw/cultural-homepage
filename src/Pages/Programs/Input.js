import React, { useState } from 'react'
import THEME from '../../THEME'

const Input = ({ prompt, value, update }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <div
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
      }}
    >
      <h5
        style={{
          ...THEME.Lato,
          fontSize: 16,
          marginBottom: 6,
          lineHeight: 1.2,
        }}
      >
        {prompt}
      </h5>
      <input
        style={{
          height: 32,
          padding: 6,
          border: 'none',
          background: THEME.yellow,
          opacity: isFocused ? 1 : 0.5,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={update}
        value={value}
      ></input>
    </div>
  )
}

export default Input
