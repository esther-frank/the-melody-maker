import logo from '../assets/logo-dark.png'
import CustomNavLink from '../components/CustomNavLink'

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-4">
      <img src={logo} alt="The Melody Maker Logo" className="w-7/10" />
      <h1>Welcome to The Melody Maker</h1>
      <div className='flex flex-row gap-4 justify-center items-center'>
        <CustomNavLink to="/about" text="Find out more" hasBackground />
        <CustomNavLink to="/contact" text="Book now" hasBackground/>
      </div>
    </div>
  )
}

export default Landing
