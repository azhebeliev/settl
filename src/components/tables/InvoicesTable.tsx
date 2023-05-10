import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextsmsIcon from '@mui/icons-material/Textsms';

import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { Dispatch, useState } from 'react';
import { InvoiceData } from '../../mock/mockInvoices';
import { CheckboxCell } from './Cells/CheckBoxCell';
import { FlagCell } from './Cells/FlagCell';
import { InvoicesRowSubTable } from './InvoicesRowSubTable';

const ExpandCircleLeftIcon = () => (
  <ExpandCircleDownIcon
    sx={{
      transform: 'rotate(90deg)',
    }}
  />
);

const tableHeaders = [
  '',
  'Customer number',
  'Customer name',
  'Risk/Flags/Bankruptcy',
  'Total original amount',
  'Total remaining amount',
  'Currency',
  'Count of invoices',
  '',
];

export function InvoicesTable({
  data,
}: {
  data: InvoiceData[];
  setData: Dispatch<InvoiceData[]>;
}) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label='collapsible table'>
        <TableHead>
          <TableRow sx={{ backgroundColor: grey[50] }}>
            {tableHeaders.map((header) => (
              <TableCell align='left'>{header}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <Row key={row.customerName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function Row({ row }: { row: InvoiceData }) {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <>
      <TableRow>
        <TableCell>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <IconButton
              aria-label='expand row'
              size='small'
              onClick={() => setExpanded(!isExpanded)}
            >
              {isExpanded ? <ExpandCircleDownIcon /> : <ExpandCircleLeftIcon />}
            </IconButton>
            <CheckboxCell isChosen={false} handleChange={() => {}} />
          </Stack>
        </TableCell>

        <TableCell align='left'>{row.customerNumber}</TableCell>
        <TableCell align='left'>{row.customerName}</TableCell>
        <TableCell align='left'>
          <FlagCell
            risk={row.risk}
            flag={row.flag}
            bankruptcy={row.bankruptcy}
          />
        </TableCell>
        <TableCell align='left'>{row.totalOriginalAmount}</TableCell>
        <TableCell align='left'>{row.totalRemainingAmount}</TableCell>
        <TableCell align='left'>{row.currency}</TableCell>
        <TableCell align='left'>{row.vouchers.length}</TableCell>
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
      <InvoicesRowSubTable isExpanded={isExpanded} vouchers={row.vouchers} />
    </>
  );
}
