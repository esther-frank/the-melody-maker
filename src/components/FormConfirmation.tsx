import { NavLink } from 'react-router'

const FormConfirmation = () => {
  return (
    <div className="flex flex-col gap-4 items-start">
      <h1>Thank you for contacting The Melody Maker!</h1>
      <p>We have received your message and will get back to you shortly.</p>
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
