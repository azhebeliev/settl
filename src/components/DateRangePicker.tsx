import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, IconButton, Paper } from '@mui/material';
import grey from '@mui/material/colors/grey';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import dayjs, { Dayjs } from 'dayjs';
import { useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

export function CustomDatePicker({
  onChange,
}: {
  onChange: (dateFrom: Dayjs, dateTo: Dayjs) => void;
}) {
  const [visibleDatePicker, setVisibleDatePicker] = useState(false);
  const [dateFrom, setDateFrom] = useState(dayjs());
  const [dateTo, setDateTo] = useState(dayjs());
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const theme = useTheme();
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'));

  const handleDateFieldChange = (marker: 'from' | 'to', date: Dayjs | null) => {
    if (!date || !date.isValid()) return;

    if (marker === 'from') {
      setDateRange((prev) => [{ ...prev[0], startDate: date.toDate() }]);
      onChange(date, dateTo);
    } else {
      setDateRange((prev) => [{ ...prev[0], endDate: date.toDate() }]);
      onChange(dateFrom, date);
    }
  };

  const handleDateRangeChange = (range: (typeof dateRange)[0]) => {
    setDateRange([range]);
    setDateFrom(dayjs(range.startDate));
    setDateTo(dayjs(range.endDate));
    onChange(dayjs(range.startDate), dayjs(range.endDate));
  };

  return (
    <>
      <Box sx={{ position: 'relative' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            format='DD/MM/YYYY'
            value={dateFrom}
            onChange={(e) => handleDateFieldChange('from', e)}
            sx={{ width: '110px' }}
            variant='standard'
            label='DATE FROM'
            InputLabelProps={{ sx: { fontSize: '1em', fontWeight: 700 } }}
            size='small'
          />
          <Box
            sx={{ mb: -2, position: 'relative', top: '8px' }}
            display='inline'
          >
            <IconButton
              onClick={() => setVisibleDatePicker(!visibleDatePicker)}
            >
              <CalendarMonthIcon />
            </IconButton>
          </Box>
          <DateField
            value={dateTo}
            format='DD/MM/YYYY'
            onChange={(e) => handleDateFieldChange('to', e)}
            sx={{ width: '110px' }}
            variant='standard'
            size='small'
            label='DATE TO'
            InputLabelProps={{ sx: { fontSize: '1em', fontWeight: 700 } }}
          />
        </LocalizationProvider>
      </Box>

      {visibleDatePicker && (
        <Paper
          elevation={10}
          sx={{ position: 'absolute', mt: 6, zIndex: '100' }}
        >
          <CancelIcon
            htmlColor={grey[600]}
            sx={{ float: 'right', ':hover': { cursor: 'pointer' } }}
            onClick={() => setVisibleDatePicker(false)}
          />

          <DateRangePicker
            onChange={(item: any) => handleDateRangeChange(item.selection)}
            moveRangeOnFirstSelection={false}
            months={2}
            ranges={dateRange}
            direction={isMdScreen ? 'horizontal' : 'vertical'}
            showDateDisplay={false}
          />
        </Paper>
      )}
    </>
  );
}
