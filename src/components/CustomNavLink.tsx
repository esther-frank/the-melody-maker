import { NavLink } from 'react-router'
type CustomNavLinkProps = {
  to: string
  text: string
}

const CustomNavLink = ({ to, text }: CustomNavLinkProps) => {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive
          ? 'text-primary bg-secondary px-8 py-4 rounded-lg'
          : 'text-secondary px-8 py-4 rounded-lg'
      }
      to={to}
    >
      {text}
    </NavLink>
  )
}

export default CustomNavLink
