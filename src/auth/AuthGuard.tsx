import { Typography } from '@mui/material';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function AuthGuard({
  //isAuthenticated,
  children,
}: {
  //isAuthenticated: boolean;
  children: JSX.Element;
}) {
  const { isAuthenticated, authInProgress } = useContext(AuthContext);
  const location = useLocation();
  if (authInProgress) return <Typography variant='h5'>AuthChecking</Typography>;

  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  } else {
    return children;
  }
}
