import { LoadingButton } from '@mui/lab';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import { InvoiceData } from '../../mock/mockInvoices';

export function InvoicesTableActionsControl({ data }: { data: InvoiceData[] }) {
  return (
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
            <MenuItem value={50}>30</MenuItem>
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
  );
}
