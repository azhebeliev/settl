import { Search } from '@mui/icons-material';
import { Button, InputAdornment, OutlinedInput, Stack } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Dispatch, useState } from 'react';
import { useDebounce } from '../../utils/debounce';

export function InvoicesTableFilterControl({
  globalFilter,
  setGlobalFilter,
}: {
  globalFilter: string;
  setGlobalFilter: Dispatch<string>;
}) {
  const [inputValue, setInputValue] = useState(globalFilter);

  const debouncedSetGlobalFilter = useDebounce(setGlobalFilter, 1000);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
    debouncedSetGlobalFilter(event.target.value);
  };
  
  return (
    <Stack justifyContent={'space-between'}>
      <OutlinedInput
        value={inputValue}
        onChange={handleInputChange}
        sx={{ marginX: 1 }}
        size='small'
        placeholder='Search'
        endAdornment={
          <InputAdornment position='end'>
            <Search />
          </InputAdornment>
        }
      />
      <Stack direction={'row'} spacing={1} color={grey[500]}>
        <Button color='inherit' variant='outlined'>
          Select all
        </Button>
        <Button color='inherit' variant='outlined'>
          Remove all
        </Button>
        <Button color='inherit' variant='outlined'>
          Expand all
        </Button>
      </Stack>
    </Stack>
  );
}
