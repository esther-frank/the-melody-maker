import logo from '../assets/logo-dark.png'
import CustomNavLink from '../components/CustomNavLink'

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-6">
      <img src={logo} alt="The Melody Maker Logo" className="w-7/10" />
      <div className="flex flex-col items-center justify-start gap-2">
        <h1>Welcome to The Melody Maker</h1>
        <h2>Melodies for your Memories</h2>
      </div>
      <div className="flex flex-row gap-4 justify-center items-center">
        <CustomNavLink to="/about" text="Find out more" hasBackground isHomepageButton />
        <CustomNavLink to="/contact" text="Book now" hasBackground isHomepageButton />
      </div>
    </div>
  )
}

export default Landing
