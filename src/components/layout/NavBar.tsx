import { Link } from 'react-router'
import CustomNavLink from '../CustomNavLink'
import logo from '../../assets/logo-light.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MenuDrawer from './MenuDrawer'

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center p-4 bg-primary text-secondary">
        <Link to="/">
          <img src={logo} className="w-20 h-auto" />
        </Link>
        <div className="flex-row gap-4 hidden md:flex">
          <CustomNavLink to="/about" text="About" />
          <CustomNavLink to="/care-homes" text="Care Homes" />
          <CustomNavLink to="/contact" text="Contact" />
          <CustomNavLink to="/portfolio" text="Portfolio" />
        </div>
        <div className="flex flex-row gap-4 md:hidden">
          <button onClick={() => setIsDrawerOpen(true)}>
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="text-secondary"
            />
          </button>
        </div>
      </div>
      <MenuDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  )
}
export default NavBar
