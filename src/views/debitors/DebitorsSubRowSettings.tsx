import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {
  Box,
  FormControlLabel,
  Grid,
  MenuItem,
  OutlinedInput,
  Radio,
  Select,
} from '@mui/material';
import { useState } from 'react';
import { InvoiceData, SendingVariant } from '../../mock/mockInvoices';

export function DebitorsSubRowSettings({ data }: { data: InvoiceData }) {
  const [sendingVariant, setSendingVariant] = useState<SendingVariant>(
    data.sendingVariant
  );
  const [schedule, setSchedule] = useState('08:00');

  return (
    <Grid py={2} container gap={2}>
      <Grid item xs={6} md={2}>
        Code{' '}
        <OutlinedInput
          value={'12453'}
          onChange={() => {}}
          sx={{ marginX: 1, maxWidth: '5em', '&>*': { paddingY: '0.3em' } }}
          size='small'
        />
      </Grid>
      <Grid item xs={6} md={4}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { md: 'end' },
            flexWrap: 'nowrap',
          }}
        >
          <FormControlLabel
            checked={sendingVariant === 'auto'}
            onClick={() => setSendingVariant('auto')}
            control={<Radio size='small' />}
            label={
              <Box sx={{ fontSize: '0.875em' }}>
                Automatic sending of invoices
              </Box>
            }
          />
          <Select
            value={schedule}
            onChange={(e) => {
              setSchedule(e.target.value);
            }}
            IconComponent={AccessTimeFilledIcon}
            sx={{ height: '2em' }}
          >
            <MenuItem value={'08:00'}>08:00</MenuItem>
            <MenuItem value={'10:00'}>10:00</MenuItem>
            <MenuItem value={'12:00'}>12:00</MenuItem>
            <MenuItem value={'14:00'}>14:00</MenuItem>
          </Select>
        </Box>
      </Grid>
      <Grid item xs={6} md={3}>
        <FormControlLabel
          checked={sendingVariant === 'semi-auto'}
          onClick={() => setSendingVariant('semi-auto')}
          control={<Radio size='small' />}
          label={
            <Box sx={{ fontSize: '0.875em' }}>
              Semi-automatic sending of invoices
            </Box>
          }
        />
      </Grid>
    </Grid>
  );
}
