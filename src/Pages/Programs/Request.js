import React, { useState } from 'react'
import THEME from '../../THEME'
import Input from './Input'
const Step = ({
  num,
  children,
  showLine = true,
  backgroundColor = THEME.white,
}) => {
  return (
    <div
      style={{
        borderLeft: showLine ? '1px dotted black' : 'none',
        height: 100,
        paddingLeft: 35,
        position: 'relative',
      }}
    >
      <div
        style={{
          width: 50,
          height: 50,
          borderRadius: 50,
          border: '1px solid rgba(0,0,0,0.7)',
          boxShadow: '1px 1px 2px rgba(0,0,0,0.7)',
          position: 'absolute',
          left: -26,
          top: -16,
          backgroundColor,
          display: 'grid',
          placeItems: 'center',
          fontSize: 22,

          ...THEME.Lato,
        }}
      >
        {num}
      </div>
      {children}
    </div>
  )
}
const Request = () => {
  return (
    <>
      <svg
        style={{ backgroundColor: THEME.teal, paddingTop: 50 }}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
      >
        <path
          fill={THEME.white}
          fillOpacity='1'
          d='M0,64L30,53.3C60,43,120,21,180,42.7C240,64,300,128,360,149.3C420,171,480,149,540,144C600,139,660,149,720,176C780,203,840,245,900,261.3C960,277,1020,267,1080,250.7C1140,235,1200,213,1260,181.3C1320,149,1380,107,1410,85.3L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z'
        ></path>
      </svg>
      <div
        style={{
          minHeight: 200,
          backgroundColor: THEME.white,
          position: 'relative',
          top: -5,
        }}
      >
        <div style={{ position: 'relative', top: 0 }}>
          <h3
            style={{
              fontSize: 32,
              ...THEME.DMSerif,
              marginLeft: 10,
              marginBottom: 50,
            }}
          >
            Request a Program
          </h3>
          <div style={{ width: '50%', margin: 'auto', position: 'relative' }}>
            <Step num={1}>Submit Program Request Form</Step>
            <Step num={2}>
              Schedule conversation with our staff to finalize details
            </Step>
            <Step num={3}>Sign and return your agreement.</Step>
            <Step num={4}>Send payment on or before your program date.</Step>
            <Step num={5} showLine={false} backgroundColor={THEME.blue}>
              Enjoy your program!
            </Step>
          </div>
        </div>
      </div>
    </>
  )
}

export default Request
