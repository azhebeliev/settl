import {
  Box,
  Grid,
  Stack,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
  useTheme,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import { useState } from 'react';
import { BankruptcyChart } from '../../components/charts/BankruptcyChart';
import { CustomDatePicker } from '../../components/DateRangePicker';
import { mockBankruptcyChartData } from '../../mock/mockChartsData';
import { mockFlagsData } from '../../mock/mockFlagsData';
import { InvoiceData } from '../../mock/mockInvoices';
import { DebitorsSubRowFlagSection } from './DebitorsSubRowFlagSection';
import { DebitorsSubRowFooter } from './DebitorsSubRowFooter';
import { DebitorsSubRowSettings } from './DebitorsSubRowSettings';

export function DebitorsSubRow({ data }: { data: InvoiceData }) {
  const { palette } = useTheme();
  const [dateFrom, setDateFrom] = useState(dayjs());
  const [dateTo, setDateTo] = useState(dayjs());

  const onDateRangeChange = (dateFrom: dayjs.Dayjs, dateTo: dayjs.Dayjs) => {
    setDateFrom(dateFrom);
    setDateTo(dateTo);
  };

  return (
    <TableRow sx={{ backgroundColor: grey[50] }}>
      <TableCell colSpan={6}>
        <DebitorsSubRowSettings data={data} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography mt={1.5} variant='h5'>Bankruptcy</Typography>
                <CustomDatePicker onChange={onDateRangeChange} />
            </Stack>
            <Box
              my={1}
              sx={{
                border: `2px solid ${palette.primary.main}`,
                borderRadius: '5px',
              }}
            >
              <BankruptcyChart data={mockBankruptcyChartData()} />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography mt={1.5} variant='h5'>Flags</Typography>
            </Stack>
            <TableContainer
              sx={{
                my: 1,
                border: `2px solid ${palette.primary.main}`,
                borderRadius: '5px',
                height: '300px',
              }}
            >
              <DebitorsSubRowFlagSection data={mockFlagsData()} />
            </TableContainer>
          </Grid>
        </Grid>
        <DebitorsSubRowFooter />
      </TableCell>
    </TableRow>
  );
}
