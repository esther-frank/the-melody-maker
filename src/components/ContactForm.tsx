import {
  useFormStore,
  Form,
  FormLabel,
  FormInput,
  FormError,
  FormReset,
  FormSubmit,
  FormCheckbox
} from '@ariakit/react'
import { useState, type ChangeEvent } from 'react'

import bookingPolicy from '../../public/booking-policy.pdf'

const ContactForm = ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) => {
  const inputGroupStyles = 'flex flex-col gap-1'
  const inputStyles = 'border-2 rounded-lg p-2 border-primary'
  const landlineStyles = 'hidden'
  const [emailConfirmError, setEmailConfirmError] = useState('')
  const [email, setEmail] = useState('')

  const confirmEmailOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value && email && email !== e.currentTarget.value) {
      setEmailConfirmError('Email addresses do not match')
    } else {
      setEmailConfirmError('')
    }
  }

  const form = useFormStore<{
    name: string
    email: string
    emailConfirm: string
    phone: string
    careHome: string
    address: string
    message: string
    landline: string
    acceptPolicy: boolean
  }>({
    defaultValues: {
      name: '',
      email: '',
      emailConfirm: '',
      phone: '',
      careHome: '',
      address: '',
      message: '',
      landline: '',
      acceptPolicy: false
    }
  })

  const endpoint =
    'https://tjx2ypis75o2amdcohrr5umgg40acpap.lambda-url.eu-west-2.on.aws/'

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (emailConfirmError) {
      e.preventDefault()
      return
    }
  }

  const handleSubmit = async (state: any) => {
    // Prevent submission if email validation failed
    if (state.values.email !== state.values.emailConfirm) {
      setEmailConfirmError('Email addresses do not match')
      return
    }

    try {
      setEmailConfirmError('')
      const { emailConfirm, ...data } = state.values

      const response = await fetch(endpoint, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data)
      })
      const status = await response.status
      if (status !== 200) {
        throw new Error('Failed to submit form')
      }
      onSubmitSuccess()
      form.reset()
      setEmail('')
    } catch (error) {
      alert('There was an error submitting the form. Please try again.')
    }
  }

  form.useSubmit(handleSubmit)

  return (
    <Form
      store={form}
      aria-labelledby="contact-title"
      className="flex flex-col gap-4"
      onSubmit={handleFormSubmit}
    >
      <div>
        <h1 id="contact-title">Get in touch</h1>
        <p className="pt-2">
          To make a booking or if you’d like more information please fill in the
          form below or give me a call on 07941 809506
        </p>
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.careHome}>Name of care home</FormLabel>
        <FormInput
          name={form.names.careHome}
          placeholder="Care Home Name"
          className={inputStyles}
        />
        <FormError name={form.names.careHome} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.address}>Care home address</FormLabel>
        <FormInput
          name={form.names.address}
          placeholder="Care Home Address"
          className={inputStyles}
          render={<textarea rows={3} />}
        />
        <FormError name={form.names.address} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.name}>Contact name</FormLabel>
        <FormInput
          name={form.names.name}
          placeholder="John Smith"
          className={inputStyles}
          required
        />
        <FormError name={form.names.name} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.email}>Email</FormLabel>
        <FormInput
          name={form.names.email}
          placeholder="john.smith@example.com"
          className={inputStyles}
          required
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <FormError name={form.names.email} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.emailConfirm}>Confirm Email</FormLabel>
        <FormInput
          name={form.names.emailConfirm}
          placeholder="john.smith@example.com"
          className={inputStyles}
          required
          onPaste={(e) => e.preventDefault()}
          onChange={(e) => confirmEmailOnChange(e)}
        />
        {emailConfirmError && (
          <div className="error text-red-900">{emailConfirmError}</div>
        )}
        <FormError
          name={form.names.emailConfirm}
          className="error text-red-900"
        />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.phone}>Phone</FormLabel>
        <FormInput
          name={form.names.phone}
          placeholder="01234 567890"
          className={inputStyles}
        />
        <FormError name={form.names.phone} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.message}>Message</FormLabel>
        <FormInput
          name={form.names.message}
          placeholder="Your message"
          className={inputStyles}
          required
          render={<textarea rows={3} />}
        />
        <FormError name={form.names.message} className="error text-red-900" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-1">
          <FormCheckbox name={form.names.acceptPolicy} required={true} />
          <FormLabel name={form.names.acceptPolicy}>
            I have read and agree to the{' '}
            <a href={bookingPolicy} target="_blank" className="underline">
              privacy policy
            </a>
          </FormLabel>
        </div>
        <FormError
          name={form.names.acceptPolicy}
          className="error text-red-900"
        />
      </div>
      <div className={inputGroupStyles + ' ' + landlineStyles} tabIndex={-1}>
        <FormLabel name={form.names.landline}>Landline number</FormLabel>
        <FormInput
          name={form.names.landline}
          placeholder="01234 567890"
          className={inputStyles}
        />
      </div>
      <div className="flex flex-row gap-4 w-full justify-center">
        <FormReset className="text-primary px-8 py-4 rounded-lg">
          Reset
        </FormReset>
        <FormSubmit
          className="text-secondary bg-primary px-8 py-4 rounded-lg"
          render={(props) => (
            <button {...props}>
              {props['aria-disabled'] ? 'Sending...' : 'Send message'}
            </button>
          )}
        />
      </div>
    </Form>
  )
}

export default ContactForm
