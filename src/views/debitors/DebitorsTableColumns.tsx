import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { IconButton } from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import { InvoiceData } from '../../mock/mockInvoices';
const ExpandCircleRightIcon = () => (
  <ExpandCircleDownIcon
    sx={{
      transform: 'rotate(-90deg)',
    }}
  />
);

export const debitorsColumns: ColumnDef<InvoiceData>[] = [
  {
    header: () => null,
    id: 'expander',
    cell: ({ row }) => (
      <>
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
      </>
    ),
  },
  {
    header: 'Name',
    accessorKey: 'customerName',
    cell: ({ cell }) => <>{cell.getValue()}</>,
  },
  {
    header: 'Type',
    accessorKey: 'type',
    cell: ({ cell }) => <>{cell.getValue()}</>,
  },
  {
    header: 'Send invoices',
    accessorKey: 'sendingVariant',
    cell: ({ cell }) => <>{cell.getValue()}</>,
  },
  {
    header: 'Workflow',
    accessorKey: 'workFlow',
    cell: ({ cell }) => <>{cell.getValue()}</>,
  },
];
