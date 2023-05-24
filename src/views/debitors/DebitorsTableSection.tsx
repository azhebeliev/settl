import { Search } from '@mui/icons-material';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { useState } from 'react';
import { ReactTable } from '../../components/tables/ReactTable';
import { InvoiceData, mockInvoicesTableData } from '../../mock/mockInvoices';
import { useDebounce } from '../../utils/debounce';
import { DebitorsSubRow } from './DebitorsSubRow';
import { debitorsColumns } from './DebitorsTableColumns';

export function DebitorsTableSection() {
  const [data, setData] = useState(mockInvoicesTableData());
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState<string>('');
  const debouncedSetFilter = useDebounce(setFilter, 1000);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(event.target.value);
    debouncedSetFilter(event.target.value);
  };

  return (
    <>
      <OutlinedInput
        value={inputValue}
        onChange={handleInputChange}
        sx={{ marginY: 2, float: 'right' }}
        size='small'
        placeholder='Search'
        endAdornment={
          <InputAdornment position='end'>
            <Search />
          </InputAdornment>
        }
      />
      <ReactTable<InvoiceData>
        SubRow={DebitorsSubRow}
        globalFilter={filter}
        data={data}
        columns={debitorsColumns}
        enableSorting
        //enablePagination
      />
    </>
  );
}
