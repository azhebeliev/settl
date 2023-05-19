import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { RankingInfo } from '@tanstack/match-sorter-utils';
import {
  ColumnDef,
  ExpandedState,
  FilterFn,
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
import { useDebounce } from '../../utils/debounce';
import { InvoicesRowSubTable } from './InvoicesRowSubTable';

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

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
    //next as TableOptions<InvoiceData> for possibility
    // to add new options like handleEdit will be available in row.option
    //handleEdit: () => console.log('handleEdit'),
  } as TableOptions<InvoiceData>);

  const debouncedSetPage = useDebounce(table.setPageIndex, 1000);
  const onGoToChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = +e.target.value;
    if (value > 0 && value <= table.getPageCount()) {
      debouncedSetPage(value - 1);
    } else e.target.value = e.target.value.slice(0, e.target.value.length - 1);
  };

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
                    <InvoicesRowSubTable vouchers={row.original.vouchers} />
                  )}
                </React.Fragment>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Divider />
      {/* pagination */}
      <Box sx={{ flexShrink: 0, marginTop: 2 }}>
        <Stack direction={'row'}>
          <Pagination
            page={table.getState().pagination.pageIndex + 1}
            count={table.getPageCount()}
            onChange={(e, page) => table.setPageIndex(page - 1)}
            hideNextButton={!table.getCanNextPage()}
            hidePrevButton={!table.getCanPreviousPage()}
            shape='rounded'
            showFirstButton
            showLastButton
          />
          <Box>
            <FormControl fullWidth>
              <InputLabel id='label-per-page'>per page</InputLabel>
              <Select
                sx={{ height: 30, width: 90 }}
                labelId='label-per-page'
                id='per-page'
                value={table.getState().pagination.pageSize}
                label='per page'
                onChange={(e) => table.setPageSize(+e.target.value)}
              >
                {[1, 2, 3, 4, 5].map((size) => (
                  <MenuItem key={size} value={size}>
                    {size}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box mx={1} mt={0.5}>
            total pages {table.getPageCount()}
          </Box>

          <OutlinedInput
            sx={{ height: 30, width: 90 }}
            onBlur={(e) => {
              e.currentTarget.value = '';
            }}
            type='number'
            onChange={onGoToChange}
            size='small'
            inputProps={{ min: 1, max: table.getPageCount() }}
            placeholder='go to'
          />
        </Stack>
      </Box>
    </>
  );
}
