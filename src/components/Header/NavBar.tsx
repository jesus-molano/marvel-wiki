import { NavLink } from 'react-router-dom'
export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul>
        <li>
          <NavLink
            to='/comics'
            className={({ isActive }) => `nav-link ${(isActive ? 'active-link' : '')}`}
          >
            Comics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/characters'
            className={({ isActive }) =>`nav-link ${(isActive ? 'active-link' : '')}`}
          >
            Characters
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/series'
            className={({ isActive }) => `nav-link ${(isActive ? 'active-link' : '')}`}
          >
            Series
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
