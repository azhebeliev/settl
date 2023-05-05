import { Outlet } from 'react-router-dom';
import { NavBar } from '../components/NavBar';

export function Layout({
  isAuthenticated,
  role,
  handleLogout,
}: {
  isAuthenticated: boolean;
  role: string;
  handleLogout: () => Promise<void>;
}) {
  return (
    <>
      <NavBar
        handleLogout={handleLogout}
        isAuthenticated={isAuthenticated}
        isAdmin={role === 'admin'}
      />
      <Outlet />
    </>
  );
}
