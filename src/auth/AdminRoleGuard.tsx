import { Alert, AlertTitle, Box, Button, Stack } from '@mui/material';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export function AdminRoleGuard({ children }: { children: JSX.Element }) {
  const { role } = useContext(AuthContext);
  const navigate = useNavigate();
  if (role !== 'admin') {
    return (
      <Box mt={10}>
        <Alert severity='warning'>
          <AlertTitle>Warning</AlertTitle>You aren't authorized for this page
        </Alert>
        <Stack mt={20}>
          <Button onClick={() => navigate('/invoices', { replace: true })}>
            Cancel
          </Button>
          <Button href='/login' LinkComponent={Link}>
            Login
          </Button>
        </Stack>
      </Box>
    );
  } else {
    return children;
  }
}
