import { Button, ButtonGroup, Stack, Typography } from '@mui/material';
import { grey, lightBlue } from '@mui/material/colors';
import { Dispatch } from 'react';
import { InvoicesStatus } from '../../Types/InvoicesTypes';

export function InvoicesTableStatusControl({
  status,
  setStatus,
}: {
  status: InvoicesStatus;
  setStatus: Dispatch<InvoicesStatus>;
}) {
  return (
    <Stack justifyContent={'space-between'}>
      <Typography noWrap>
        <span style={{ color: grey[500], fontSize: 14 }}>
          Time of last sync:{' '}
        </span>
        <span>24.11.2022 - 07.00.05(24h)</span>
      </Typography>
      <ButtonGroup sx={{ color: grey[500] }} variant='outlined'>
        <Button
          color={status === 'active' ? 'primary' : 'inherit'}
          sx={{
            backgroundColor: status === 'active' ? lightBlue[50] : 'warning',
          }}
          onClick={() => setStatus('active')}
        >
          Active
        </Button>
        <Button
          color={status === 'stopped' ? 'primary' : 'inherit'}
          sx={{
            backgroundColor: status === 'stopped' ? lightBlue[50] : 'warning',
          }}
          onClick={() => setStatus('stopped')}
        >
          Stopped
        </Button>
      </ButtonGroup>
    </Stack>
  );
}
