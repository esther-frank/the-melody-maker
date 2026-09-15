import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses'

const ses = new SESClient({ region: 'eu-west-2' })

export const handler = async (event) => {
  let body
  try {
    body = JSON.parse(event.body || '{}')
  } catch (e) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON body' })
    }
  }

  const { name, email, careHome, address, message, landline } = body
  const phone = body.phone || ''

  if (landline) {
    return { statusCode: 200 }
  }

  if (!name || !email || !careHome || !address || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing required fields' })
    }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid email address' })
    }
  }

  const formDetails = { name, email, phone, careHome, address, message }
  const subject = 'Thanks for contacting The Melody Maker!'

  try {
    await sendMail(subject, email, formDetails)
    return {
      statusCode: 200,
      body: JSON.stringify({ result: 'Success' })
    }
  } catch (e) {
    console.error('sendMail failed:', e)
    return {
      statusCode: 500,
      body: JSON.stringify({ result: `Failure: ${e.message}` })
    }
  }
}

async function sendMail(subject, email, formDetails) {
  const emailBody = `Here is a copy of your enquiry.\nName of care home: ${formDetails.careHome}\nCare home address: ${formDetails.address}\nContact name: ${formDetails.name}\nEmail: ${formDetails.email}\nPhone: ${formDetails.phone || 'Not provided'}\nMessage: ${formDetails.message}\n\nYou can view the booking policy here: https://tmm-stg-env.netlify.app/assets/booking-policy-DVd83XKw.pdf`

  const emailParams = {
    Destination: {
      ToAddresses: [email],
      BccAddresses: ['andrew@themelodymaker.co.uk']
    },
    Message: {
      Body: {
        Text: { Data: emailBody }
      },
      Subject: { Data: subject }
    },
    ReplyToAddresses: ['andrew@themelodymaker.co.uk'],
    Source: 'contactform@themelodymaker.co.uk'
  }

  const command = new SendEmailCommand(emailParams)
  await ses.send(command)
}
