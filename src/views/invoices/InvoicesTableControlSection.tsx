import LoadingButton from '@mui/lab/LoadingButton';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { Dispatch } from 'react';
import { InvoiceData } from '../../mock/mockInvoices';
import { InvoicesStatus } from '../../Types/InvoicesTypes';
import { InvoicesTableFilterControl } from './InvoicesTableFilterControl';
import { InvoicesTableStatusControl } from './InvoicesTableStatusControl';

export function InvoicesTableControlSection({
  data,
  status,
  setStatus,
  globalFilter,
  setGlobalFilter,
}: {
  data: InvoiceData[];
  status: InvoicesStatus;
  setStatus: Dispatch<InvoicesStatus>;
  globalFilter: string;
  setGlobalFilter: Dispatch<string>;
}) {
  return (
    <Stack
      justifyContent={'space-between'}
      direction={{ md: 'column-reverse', xl: 'row' }}
      paddingTop={4}
      spacing={1}
    >
      <InvoicesTableStatusControl status={status} setStatus={setStatus} />
      <Stack direction={{ md: 'column', xl: 'row' }} spacing={1}>
        <InvoicesTableFilterControl
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <Stack spacing={1}>
          <Stack direction={'row'} spacing={1}>
            <Typography paddingTop={2} variant='body2'>
              Invoices past due date with more than
            </Typography>
            <FormControl sx={{ marginBottom: 1, minWidth: 120 }} size='small'>
              <InputLabel id='invoices-period-label'>period</InputLabel>
              <Select
                labelId='invoices-period-label'
                id='invoices-period'
                value={14}
                label='period'
                onChange={() => {}}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={7}>7</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction={'row'} spacing={1}>
            <LoadingButton variant='contained' loading={false}>
              Download
            </LoadingButton>
            <LoadingButton variant='contained' loading={false}>
              Send reminder
            </LoadingButton>
            <LoadingButton variant='contained' loading={true}>
              Send to settle
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
