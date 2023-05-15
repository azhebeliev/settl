import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  TableOptions,
  useReactTable,
} from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { InvoiceData } from '../../mock/mockInvoices';
import { InvoicesRowSubTable } from './InvoicesRowSubTable';

export function InvoicesTable({
  columns,
  //   handleDelete,
  //   handleEdit,
  data,
  objectsContainer,
}: {
  columns: ColumnDef<InvoiceData>[];
  //   handleDelete?: (id: number | string) => Promise<void>;
  //   handleEdit?: (id: number, newValue: Partial<InvoiceData>) => Promise<void>;
  data: InvoiceData[];
  objectsContainer?: Record<string, any>;
}) {
  const [loading, setLoading] = useState<boolean>(false);

  //   async function handleDeleteWithLoader(id: number | string) {
  //     if (handleDelete) {
  //       setLoading(true);
  //       await handleDelete(id).finally(() => setLoading(false));
  //     }
  //   }

  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data: useMemo(() => data, []),
    columns: useMemo(() => columns, []),
    state: {
      expanded,
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    debugTable: true,
    //next as TableOptions<InvoiceData> for possibility
    // to add new options like handleEdit will be available in row.option
    handleEdit: () => console.log('handleEdit'),
  } as TableOptions<InvoiceData>);

  return (
    <TableContainer sx={{marginTop:2}} component={Paper}>
      <Table size='small'>
        <TableHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableCell
                    key={header.id}
                    colSpan={header.colSpan}
                    sx={{ backgroundColor: grey[50], color: grey[500] }}
                    align='left'
                  >
                    {header.isPlaceholder ? null : (
                      <Box
                        sx={{
                          '&:hover': {
                            cursor: header.column.getCanSort()
                              ? 'pointer'
                              : 'default',
                          },
                        }}
                        {...{
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <NorthIcon fontSize='small' />,
                          desc: <SouthIcon fontSize='small' />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </Box>
                    )}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map((row) => {
            return (
              <>
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell sx={{padding:'0 10px', color: grey[700] }} key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
                {row.getIsExpanded() && (
                  <InvoicesRowSubTable vouchers={row.original.vouchers} />
                )}
              </>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
