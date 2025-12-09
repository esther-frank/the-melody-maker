import {
  useFormStore,
  Form,
  FormLabel,
  FormInput,
  FormError,
  FormReset,
  FormSubmit
} from '@ariakit/react'

const Contact = () => {
  const inputGroupStyles = 'flex flex-col gap-1'
  const inputStyles = 'border-2 rounded-lg p-2 border-primary'
  const form = useFormStore({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      careHome: '',
      address: '',
      message: ''
    }
  })

  form.useSubmit(async (state) => {
    alert(JSON.stringify(state.values))
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
        <FormLabel name={form.names.message}>Message</FormLabel>
        <FormInput
          name={form.names.message}
          placeholder="Your message"
          className={inputStyles}
          required
        />
        <FormError name={form.names.message} className="error" />
      </div>
      <div className="flex flex-row gap-4 w-full justify-center">
        <FormReset className="text-primary px-8 py-4 rounded-lg">
          Reset
        </FormReset>
        <FormSubmit className="text-secondary bg-primary px-8 py-4 rounded-lg">
          Submit
        </FormSubmit>
      </div>
    </Form>
  )
}

export default Contact
