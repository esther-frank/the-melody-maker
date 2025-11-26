import { Link } from 'react-router'
import CustomNavLink from '../CustomNavLink'
const NavBar = () => {
  return (
    <div className="w-full flex flex-row justify-between items-center p-4 bg-primary text-secondary">
      <Link to="/" className="bg-secondary rounded-full text-primary p-2">
        <p>Logo</p>
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
