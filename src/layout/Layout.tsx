import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { NavBar } from '../components/NavBar';

export function Layout() {
  const { isAuthenticated, role, logout } = useContext(AuthContext);
  return (
    <>
      <div style={{ padding: '0 20px 20px 20px' }}>
        <NavBar
          logout={logout}
          isAuthenticated={isAuthenticated}
          isAdmin={role === 'admin'}
        />
        <Outlet />
      </div>
    </>
  );
}
