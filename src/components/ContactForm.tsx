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

import privacyPolicy from '/privacy-policy.pdf?url'

const ContactForm = ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) => {
  const inputGroupStyles = 'flex flex-col gap-1'
  const inputStyles = 'border-2 rounded-lg p-2 border-primary'
  const landlineStyles = 'hidden'

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

  // Registered as an ariakit validator (rather than set ad hoc from an
  // onChange handler) so the error survives ariakit's automatic
  // revalidation, which runs on every field change/blur and would
  // otherwise immediately wipe an error set outside of this hook.
  form.useValidate(() => {
    const { email, emailConfirm } = form.getState().values
    if (emailConfirm && email && email !== emailConfirm) {
      form.setError(form.names.emailConfirm, 'Email addresses do not match')
    }
  })

  const handleSubmit = async (state: any) => {
    try {
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
    } catch (error) {
      // Re-throw so ariakit's form store records this as a failed submission
      // instead of a successful one, which otherwise triggers an automatic
      // reset of all entered values.
      alert('There was an error submitting the form. Please try again.')
      throw error
    }
  }

  form.useSubmit(handleSubmit)

  return (
    <Form
      store={form}
      aria-labelledby="contact-title"
      className="flex flex-col gap-4"
      resetOnSubmit={false}
    >
      <div>
        <h1 id="contact-title">Get in touch</h1>
        <p className="pt-2">
          To make a booking or if you’d like more information please fill in the
          form below or give me a call on <a href='tel:07941809506'>07941 809506</a>
        </p>
        <p className="pt-2">
          Fields marked <span className="text-red-900">*</span> are required.
        </p>
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.careHome}>
          Name of care home <span className="text-red-900">*</span>
        </FormLabel>
        <FormInput
          name={form.names.careHome}
          placeholder="Care Home Name"
          className={inputStyles}
          required
        />
        <FormError name={form.names.careHome} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.address}>
          Care home address <span className="text-red-900">*</span>
        </FormLabel>
        <FormInput
          name={form.names.address}
          placeholder="Care Home Address"
          className={inputStyles}
          required
          render={<textarea rows={3} />}
        />
        <FormError name={form.names.address} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.name}>
          Contact name <span className="text-red-900">*</span>
        </FormLabel>
        <FormInput
          name={form.names.name}
          placeholder="John Smith"
          className={inputStyles}
          required
        />
        <FormError name={form.names.name} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.email}>
          Email <span className="text-red-900">*</span>
        </FormLabel>
        <FormInput
          name={form.names.email}
          type="email"
          placeholder="john.smith@example.com"
          className={inputStyles}
          required
        />
        <FormError name={form.names.email} className="error text-red-900" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.emailConfirm}>
          Confirm Email <span className="text-red-900">*</span>
        </FormLabel>
        <FormInput
          name={form.names.emailConfirm}
          type="email"
          placeholder="john.smith@example.com"
          className={inputStyles}
          required
          onPaste={(e) => e.preventDefault()}
          onChange={() => form.setFieldTouched(form.names.emailConfirm, true)}
        />
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
        <FormLabel name={form.names.message}>
          Message <span className="text-red-900">*</span>
        </FormLabel>
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
            <a href={privacyPolicy} target="_blank" className="underline">
              privacy policy
            </a>{' '}
            <span className="text-red-900">*</span>
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
