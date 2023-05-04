import { Navigate, useLocation } from 'react-router-dom';

export function AuthGuard({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  } else {
    return children;
  }
}
