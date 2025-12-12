import { useState, useEffect } from 'react'
import FormConfirmation from '../components/FormConfirmation'
import ContactForm from '../components/ContactForm'

const Contact = () => {
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [submitted])

  return submitted ? (
    <FormConfirmation />
  ) : (
    <ContactForm onSubmitSuccess={() => setSubmitted(true)} />
  )
}

export default Contact
