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
import { BankruptcyChart } from '../../components/charts/BankruptcyChart';
import { mockBankruptcyChartData } from '../../mock/mockChartsData';
import { mockFlagsData } from '../../mock/mockFlagsData';
import { InvoiceData } from '../../mock/mockInvoices';
import { DebitorsSubRowFlagSection } from './DebitorsSubRowFlagSection';
import { DebitorsSubRowFooter } from './DebitorsSubRowFooter';
import { DebitorsSubRowSettings } from './DebitorsSubRowSettings';

export function DebitorsSubRow({ data }: { data: InvoiceData }) {
  const { palette } = useTheme();
  return (
    <TableRow sx={{ backgroundColor: grey[50] }}>
      <TableCell colSpan={6}>
        <DebitorsSubRowSettings data={data} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <Typography variant='h5'>Bankruptcy</Typography>
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
              <Typography variant='h5'>Flags</Typography>
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
          <DebitorsSubRowFooter/>
      </TableCell>
    </TableRow>
  );
}
