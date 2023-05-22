import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Pagination,
  Select,
  Stack,
} from '@mui/material';
import { Table } from '@tanstack/react-table';
import { useDebounce } from '../../utils/debounce';

export function TablePagination({ table }: { table: Table<any> }) {
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
  );
}
