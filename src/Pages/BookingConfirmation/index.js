import React, { useEffect } from 'react'
import THEME from '../../THEME'

const BookingConfirmation = () => {
  useEffect(() => {
    var queryString = window.location.search
    var urlParams = new URLSearchParams(queryString)

    // Note: Available Parameters
    var eventTypeName = urlParams.get('event_type_name')
    var eventTypeUuid = urlParams.get('event_type_uuid')
    console.log(eventTypeName)
    console.log(eventTypeUuid)
  }, [])
  return (
    <section
      style={{
        marginTop: '10vh',
        minHeight: '90vh',
        backgroundColor: THEME.white,
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <h1>HAWU!</h1>
      <p>Tanake __________,</p>
      <p>
        Thank you for booking a time to meet with us. You should receive a
        calendar invite shortly from the email address that you registered with
        (_______). This email will include the day, time, and zoom link. Just in
        case we have included the zoom link below
      </p>
      <p>zoom link</p>
    </section>
  )
}

export default BookingConfirmation
