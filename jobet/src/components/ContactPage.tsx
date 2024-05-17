import React from 'react'
import ContactDetails from '../components/ContactDetails'

export default function ContactPage() {
  return (
    <div>
      <h1>Contact Page</h1>
      <ContactDetails succeeded={false} />
    </div>
  )
}