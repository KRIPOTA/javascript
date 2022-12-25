import { Outlet, NavLink } from 'react-router-dom'


export const navigate = [
  {
    id: 1,
    name: 'Main',
    to: '/'
  },
  {
    id: 2,
    name: 'Profile',
    to: '/profile'
  },
  {
    id: 3,
    name: 'Chat',
    to: '/chats'
  },
]

export function Header() {

  return (
    <>
      <header>
        <nav style={{ padding: '15px 0' }}>
          <ul style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
            {navigate.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.to}
                  style={({ isActive }) => ({
                    color: isActive ? 'green' : 'blue'
                  })}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  )
}