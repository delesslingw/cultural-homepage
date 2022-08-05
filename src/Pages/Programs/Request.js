import React, { useState } from 'react'
import THEME from '../../THEME'
import Input from './Input'
const prompts = {
  'Name of Group Requesting a Program': '',
  'Name of Group Contact Person': '',
  "Contact Person's Email": '',
  'Contact Phone': '',
  "What date(s) are you considering for a program? We'll do our best to accomodate your schedule but can't guarantee we'll be available on any given day.":
    '',
  'How long would you like the program to last? Most of our programs last about an hour.':
    '',
  'How many students or participants do you expect to be a part of your program? Please include chaperones, educators, parents, and anyone else attending.':
    '',
  'We provide our programs on a compensation sliding-scale to ensure that all kinds of organizations can access this educational resource. Typically we receive $250 per 1 hour program. What is your budget for this Cultural Center program? This is only an initial estimate. We will finalize payment and other details prior to signing any agreement.':
    '',
  "Finally, tell us what you would like to see from this program! If you aren't sure then tell us a little bit about your group, why y'all are interested in a Cultural program, and what your group's interests are.":
    '',
}
const Submit = ({ handleClick }) => {
  return (
    <div
      style={{
        backgroundColor: THEME.blue,
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        height: 50,
        borderRadius: 25,
        marginTop: 25,
        fontSize: 24,
        ...THEME.DMSerif,
        cursor: 'pointer',
        boxShadow: '1px 1px 2px rgba(0,0,0,0.8)',
      }}
      onMouseDown={handleClick}
    >
      SUBMIT
    </div>
  )
}
const Request = () => {
  const [value, setValue] = useState(prompts)
  const update = (property, value) => {
    setValue((obj) => {
      return {
        ...obj,
        [property]: value,
      }
    })
  }
  const handleSubmit = () => {
    console.log('Submit', value)
  }
  return (
    <>
      <svg
        style={{ backgroundColor: THEME.teal }}
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
        <div style={{ position: 'relative', top: -150 }}>
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
          {/* <p style={{ width: '50%', paddingLeft: 20, marginBottom: 30 }}>
            Steps to booking a program: 1. Fill out this form; 2: Use the link
            emailed to you to schedule a meeting to discuss your program. 3.
            Once your program details are finalized, sign and return the Program
            Agreement. This will officially "book" your program.{' '}
          </p> */}
          
          {/* <div
            style={{
              width: '50%',
              margin: 'auto',
            }}
          >
            {Object.keys(value).map((prop) => {
              return (
                <Input
                  key={prop}
                  prompt={prop}
                  value={value[prop]}
                  update={(e) => update(prop, e.target.value)}
                />
              )
            })}
            <Submit handleClick={handleSubmit} />
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Request
