import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextsmsIcon from '@mui/icons-material/Textsms';
import { IconButton, Stack } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { CheckboxCell } from '../../components/tables/Cells/CheckBoxCell';
import { FlagCell } from '../../components/tables/Cells/FlagCell';
import { InvoiceData } from '../../mock/mockInvoices';
const ExpandCircleRightIcon = () => (
  <ExpandCircleDownIcon
    sx={{
      transform: 'rotate(-90deg)',
    }}
  />
);

export const invoicesColumns: ColumnDef<InvoiceData>[] = [
  {
    header: () => null,
    id: 'toggler',
    cell: ({ row }) => (
      <Stack direction={'row'} justifyContent={'space-between'}>
        <IconButton
          aria-label='expand row'
          size='small'
          onClick={() => {
            row.toggleExpanded();
          }}
          disabled={!row.original.vouchers.length}
        >
          {row.getIsExpanded() ? (
            <ExpandCircleDownIcon />
          ) : (
            <ExpandCircleRightIcon />
          )}
        </IconButton>
        <CheckboxCell
          isChosen={row.getIsSelected()}
          handleChange={() => {
            row.getToggleSelectedHandler();
          }}
        />
      </Stack>
    ),
  },
  {
    header: 'Customer number',
    accessorKey: 'customerNumber',
    cell: ({ row }) => <>{row.original.customerNumber}</>,
  },
  {
    header: 'Customer name',
    accessorKey: 'customerName',
    cell: ({ cell }) => <>{cell.getValue()}</>,
  },
  {
    header: 'Risk/Flags/Bankruptcy',
    accessorKey: 'bankruptcy',
    cell: ({ row }) => (
      <FlagCell
        risk={row.original.risk}
        flag={row.original.flag}
        bankruptcy={row.original.bankruptcy}
      />
    ),
  },
  {
    header: 'Total original amount',
    accessorKey: 'totalOriginalAmount',
    cell: ({ row }) => <>{row.original.totalOriginalAmount}</>,
  },
  {
    header: 'Total remaining amount',
    accessorKey: 'totalRemainingAmount',
    cell: ({ row }) => <>{row.original.totalRemainingAmount}</>,
  },
  {
    header: 'Currency',
    accessorKey: 'currency',
    cell: ({ row }) => <>{row.original.currency}</>,
  },
  {
    header: 'Count of invoices',
    id: 'invoiceCount',
    cell: ({ row }) => <>{row.original.vouchers.length}</>,
  },
  {
    header: () => null,
    id: 'actions',
    cell: ({ row }) => (
      <Stack direction={'row'} justifyContent={'space-between'}>
        <IconButton color='primary' aria-label='settings'>
          <TextsmsIcon />
        </IconButton>
        <IconButton aria-label='settings'>
          <MoreVertIcon />
        </IconButton>
      </Stack>
    ),
  },
];
