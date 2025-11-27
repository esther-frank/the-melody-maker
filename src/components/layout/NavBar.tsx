import { Link } from 'react-router'
import CustomNavLink from '../CustomNavLink'
import logo from '../../assets/logo-light.png'
const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center p-4 bg-primary text-secondary">
      <Link to="/">
        <img src={logo} className="w-20 h-auto" />
      </Link>
      <div className="flex flex-row gap-4">
        <CustomNavLink to="/about" text="About" />
        <CustomNavLink to="/care-homes" text="Care Homes" />
        <CustomNavLink to="/contact" text="Contact" />
        <CustomNavLink to="/portfolio" text="Portfolio" />
      </div>
    </div>
  )
}
export default NavBar
