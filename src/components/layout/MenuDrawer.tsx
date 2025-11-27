import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomNavLink from '../CustomNavLink'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

interface MenuDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const MenuDrawer = ({ isOpen, onClose }: MenuDrawerProps) => {
  if (!isOpen) return null

  return (
    <>
      {/* Backdrop overlay */}
      <div className="fixed inset-0 z-30 md:hidden" onClick={onClose} />

      {/* Drawer */}
      <div className="fixed top-0 right-0 bottom-0 w-64 bg-secondary text-primary shadow-lg z-30 flex flex-col md:hidden">
        <div className="flex justify-end w-full pt-4 pr-4">
          <FontAwesomeIcon icon={faTimes} size="2x" onClick={onClose} />
        </div>
        <div className="flex flex-col gap-6 p-6">
          <CustomNavLink to="/about" text="About" isLight />
          <CustomNavLink to="/care-homes" text="Care Homes" isLight />
          <CustomNavLink to="/contact" text="Contact" isLight />
          <CustomNavLink to="/portfolio" text="Portfolio" isLight />
        </div>
      </div>
    </>
  )
}

export default MenuDrawer
