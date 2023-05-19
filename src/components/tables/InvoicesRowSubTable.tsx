import MoreVertIcon from '@mui/icons-material/MoreVert';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import TextsmsIcon from '@mui/icons-material/Textsms';
import WarningIcon from '@mui/icons-material/Warning';
import { IconButton, Stack, TableCell, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';
import { InvoiceData } from '../../mock/mockInvoices';
import { CheckboxCell } from './Cells/CheckBoxCell';

const subTableHeaders = [
  '',
  'Voucher type',
  'Voucher number',
  'Original amount',
  'Remaining amount',
  'Invoice due date',
  'Days past due date',
  '',
  '',
];

export function InvoicesRowSubTable({
  vouchers,
}: {
  vouchers: InvoiceData['vouchers'];
}) {
  return (
    <>
      <TableRow
        sx={{
          '& > *': {
            borderBottom: 'unset',
            border: 'none',
            background: grey[50],
            color: grey[500],
          },
        }}
      >
        {subTableHeaders.map((header) => (
          <TableCell key={header} sx={{ color: grey[500] }} align='left'>
            {header}
          </TableCell>
        ))}
      </TableRow>
      {vouchers.map((voucherData, index) => (
        <TableRow
          key={index}
          sx={{
            '& > *': {
              borderBottom: 'unset',
              border: 'none',
              backgroundColor: grey[50],
              color: grey[700],
              paddingY: '0',
            },
          }}
        >
          <TableCell>
            <Stack direction={'row'} justifyContent={'end'}>
              <CheckboxCell isChosen={false} handleChange={() => {}} />
            </Stack>
          </TableCell>
          <TableCell align='left'>{voucherData.voucherType}</TableCell>
          <TableCell align='left'>{voucherData.voucherNumber}</TableCell>
          <TableCell align='left'>{voucherData.originalAmount}</TableCell>
          <TableCell align='left'>{voucherData.remainingAmount}</TableCell>
          <TableCell>{voucherData.invoiceDate}</TableCell>
          <TableCell>{voucherData.daysPast}</TableCell>

          <TableCell>
            <Stack direction={'row'} justifyContent={'end'}>
              <IconButton color='error' aria-label='settings'>
                <PauseCircleIcon />
              </IconButton>
              <IconButton color='warning' aria-label='settings'>
                <WarningIcon />
              </IconButton>
            </Stack>
          </TableCell>
          <TableCell>
            <Stack direction={'row'} justifyContent={'space-between'}>
              <IconButton color='primary' aria-label='settings'>
                <TextsmsIcon />
              </IconButton>
              <IconButton aria-label='settings'>
                <MoreVertIcon />
              </IconButton>
            </Stack>
          </TableCell>
        </TableRow>
      ))}
      <TableRow
        sx={{
          '& > *': {
            borderBottom: 'unset',
            border: 'none',
            backgroundColor: grey[50],
            color: grey[900],
            fontWeight: 600,
          },
        }}
      >
        <TableCell></TableCell>
        <TableCell>Sum</TableCell>
        <TableCell>{vouchers.length}</TableCell>
        <TableCell>
          {vouchers.reduce(
            (acc, voucher) => (acc += voucher.originalAmount),
            0
          )}
        </TableCell>
        <TableCell>
          {vouchers.reduce(
            (acc, voucher) => (acc += voucher.remainingAmount),
            0
          )}
        </TableCell>
        <TableCell colSpan={4}></TableCell>
      </TableRow>
    </>
  );
}
