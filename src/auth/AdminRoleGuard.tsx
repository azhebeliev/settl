import { Alert, AlertTitle, Box, Button, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

export function AdminRoleGuard({
  role,
  children,
}: {
  role: string;
  children: JSX.Element;
}) {
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
          <Button LinkComponent={Link}>Login</Button>
        </Stack>
      </Box>
    );
  } else {
    return children;
  }
}
