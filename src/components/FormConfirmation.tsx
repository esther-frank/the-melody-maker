import { NavLink } from 'react-router'

const FormConfirmation = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1>Thank you for getting in touch</h1>
      <p>I aim to reply by email or phone within 1 - 2 business days.</p>
      <NavLink
        to="/"
        className="text-secondary bg-primary px-8 py-4 rounded-lg"
      >
        Return to homepage
      </NavLink>
    </div>
  )
}

export default FormConfirmation
