import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import {
  Box,
  Divider,
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
import React, { useMemo, useState } from 'react';
import { InvoiceData } from '../../mock/mockInvoices';
import { InvoicesRowSubTable } from '../../views/invoices/InvoicesRowSubTable';
import { TablePagination } from './TablePagination';

export function InvoicesTable({
  columns,
  //   handleDelete,
  //   handleEdit,
  data,
  objectsContainer,
  globalFilter,
}: {
  columns: ColumnDef<InvoiceData>[];
  //   handleDelete?: (id: number | string) => Promise<void>;
  //   handleEdit?: (id: number, newValue: Partial<InvoiceData>) => Promise<void>;
  data: InvoiceData[];
  globalFilter: string;
  objectsContainer?: Record<string, any>;
}) {
  const [loading, setLoading] = useState<boolean>(false);
  const defaultPerPage = 5;

  //   async function handleDeleteWithLoader(id: number | string) {
  //     if (handleDelete) {
  //       setLoading(true);
  //       await handleDelete(id).finally(() => setLoading(false));
  //     }
  //   }

  const [expanded, setExpanded] = useState<ExpandedState>({});
  const [sorting, setSorting] = useState<SortingState>([]);
  const defaultPagSize = 5;
  const table = useReactTable({
    data: useMemo(() => data, []),
    columns: useMemo(() => columns, []),
    state: {
      expanded,
      sorting,
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    onExpandedChange: setExpanded,
    getExpandedRowModel: getExpandedRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: { pagination: { pageSize: defaultPagSize, pageIndex: 0 } },
  } as TableOptions<InvoiceData>);

  return (
    <>
      <TableContainer sx={{ marginTop: 2 }} component={Paper}>
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
                <React.Fragment key={row.id}>
                  <TableRow>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <TableCell
                          sx={{ paddingY: '0', color: grey[700] }}
                          key={cell.id}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                  {row.getIsExpanded() && (
                    <InvoicesRowSubTable data={row.original.vouchers} />
                  )}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      <TablePagination table={table} />
    </>
  );
}
