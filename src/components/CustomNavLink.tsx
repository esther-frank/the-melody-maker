import { NavLink } from 'react-router'
type CustomNavLinkProps = {
  to: string
  text: string
  onClose?: () => void
  isLight?: boolean
  hasBackground?: boolean
  isHomepageButton?: boolean
}

const CustomNavLink = ({
  to,
  text,
  onClose,
  isLight,
  hasBackground,
  isHomepageButton = false
}: CustomNavLinkProps) => {
  const additionalStyles = isHomepageButton ? 'text-center' : ''
  const activeStyles = isLight
    ? 'text-secondary bg-primary px-8 py-4 rounded-lg'
    : 'text-primary bg-secondary px-8 py-4 rounded-lg'
  const inactiveStyles = isLight
    ? `text-primary ${hasBackground ? 'bg-secondary' : ''} px-8 py-4 rounded-lg`
    : `text-secondary ${hasBackground ? 'bg-primary' : ''} px-8 py-4 rounded-lg`

  return (
    <NavLink
      className={(({ isActive }) =>
        isActive ? `${activeStyles} ${additionalStyles}` : `${inactiveStyles} ${additionalStyles}`)
      }
      to={to}
      onClick={onClose}
    >
      {text}
    </NavLink>
  )
}

export default CustomNavLink
