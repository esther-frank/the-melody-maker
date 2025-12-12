import { useState } from 'react'
import FormConfirmation from '../components/FormConfirmation'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  return submitted ? (
    <FormConfirmation />
  ) : (
    <ContactForm onSubmitSuccess={() => setSubmitted(true)} />
  )
}

export default Contact
