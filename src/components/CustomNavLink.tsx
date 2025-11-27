import { NavLink } from 'react-router'
type CustomNavLinkProps = {
  to: string
  text: string,
  isLight?: boolean
}

const CustomNavLink = ({ to, text, isLight }: CustomNavLinkProps) => {
  const activeStyles = isLight
    ? 'text-secondary bg-primary px-8 py-4 rounded-lg'
    : 'text-primary bg-secondary px-8 py-4 rounded-lg'
  const inactiveStyles = isLight
    ? 'text-primary px-8 py-4 rounded-lg'
    : 'text-secondary px-8 py-4 rounded-lg'

  return (
    <NavLink
      className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default CustomNavLink
