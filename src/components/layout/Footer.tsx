import bookingPolicy from '/booking-policy.pdf?url'
import privacyPolicy from '/privacy-policy.pdf?url'

const Footer = () => {
  return (
    <div className="w-full py-4 flex flex-row flex-wrap divide-x justify-center items-center bg-primary text-secondary">
      <a href={bookingPolicy} target="_blank" className="px-4">
        Booking policy
      </a>
      <a href={privacyPolicy} target="_blank" className="px-4">
        Privacy policy
      </a>
      <p className="px-4">The Melody Maker 2026</p>
    </div>
  )
}

export default Footer
