import { useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  useFormStore,
  Form,
  FormLabel,
  FormInput,
  FormError,
  FormReset,
  FormSubmit
} from '@ariakit/react'

const ContactForm = ({ onSubmitSuccess }: { onSubmitSuccess: () => void }) => {
  const inputGroupStyles = 'flex flex-col gap-1'
  const inputStyles = 'border-2 rounded-lg p-2 border-primary'
  const landlineStyles = 'hidden'
  const [searchParams, setSearchParams] = useSearchParams()
  const PACKAGES = [
    'The Beatles',
    '80s music',
    'Rock',
    'Pop',
    'Jazz',
    'Classical'
  ]
  const hasInitialized = useRef(false)

  const form = useFormStore({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      careHome: '',
      address: '',
      package: '',
      message: '',
      landline: ''
    }
  })

  // Set package from query param and remove it from URL
  useEffect(() => {
    if (!hasInitialized.current) {
      const packageParam = searchParams.get('package')
      if (packageParam && PACKAGES.includes(packageParam)) {
        form.setValue('package', packageParam)
        // Remove the query param from URL
        setSearchParams({})
      }
      hasInitialized.current = true
    }
  }, [searchParams, setSearchParams, form, PACKAGES])

  const endpoint =
    'https://tjx2ypis75o2amdcohrr5umgg40acpap.lambda-url.eu-west-2.on.aws/'

  form.useSubmit(async (state) => {
    try {
      const data = { ...state.values }
      console.log(data)
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
      alert('There was an error submitting the form. Please try again.')
    }
  })

  return (
    <Form
      store={form}
      aria-labelledby="contact-title"
      className="flex flex-col gap-4"
    >
      <div>
        <h1 id="contact-title">Contact</h1>
        <p>
          Some text here about why to contact and that we'll get back to you
          soon etc. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Porro ab nobis labore possimus suscipit aliquam eos minus provident.
          Soluta dignissimos consectetur praesentium voluptatum, quibusdam hic
          eligendi dolorem distinctio consequatur expedita.
        </p>
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.careHome}>Name of care home</FormLabel>
        <FormInput
          name={form.names.careHome}
          placeholder="Care Home Name"
          className={inputStyles}
        />
        <FormError name={form.names.careHome} className="error" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.address}>Care home address</FormLabel>
        <FormInput
          name={form.names.address}
          placeholder="Care Home Address"
          className={inputStyles}
        />
        <FormError name={form.names.address} className="error" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.name}>Contact name</FormLabel>
        <FormInput
          name={form.names.name}
          placeholder="John Doe"
          className={inputStyles}
          required
        />
        <FormError name={form.names.name} className="error" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.email}>Email</FormLabel>
        <FormInput
          name={form.names.email}
          placeholder="john.doe@example.com"
          className={inputStyles}
          required
        />
        <FormError name={form.names.email} className="error" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.phone}>Phone</FormLabel>
        <FormInput
          name={form.names.phone}
          placeholder="01234 567890"
          className={inputStyles}
        />
        <FormError name={form.names.phone} className="error" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.package}>Music Package</FormLabel>
        <FormInput
          name={form.names.package}
          className={inputStyles}
          render={
            <select defaultValue="">
              <option value="">Select a package...</option>
              {PACKAGES.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          }
        />
        <FormError name={form.names.package} className="error" />
      </div>
      <div className={inputGroupStyles}>
        <FormLabel name={form.names.message}>
          Message - If enquiring about making a booking, please include which
          package and which date(s) you’d prefer.
        </FormLabel>
        <FormInput
          name={form.names.message}
          placeholder="Your message"
          className={inputStyles}
          required
          render={<textarea rows={3} />}
        />
        <FormError name={form.names.message} className="error" />
      </div>
      <div className={inputGroupStyles + ' ' + landlineStyles}>
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
