import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CancelIcon from '@mui/icons-material/Cancel';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import grey from '@mui/material/colors/grey';
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
  const [dateTo, setateTo] = useState(dayjs());
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

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
    setateTo(dayjs(range.endDate));
    onChange(dayjs(range.startDate), dayjs(range.endDate));
  };

  return (
    <>
      <Box sx={{ mt: -2, position: 'relative' }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateField
            format='DD/MM/YYYY'
            value={dateFrom}
            onChange={(e) => handleDateFieldChange('from', e)}
            sx={{ width: '110px' }}
            variant='standard'
            label={<Typography variant='body2'>DATE FROM</Typography>}
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
            label={
              <Typography variant='body2' sx={{ textAlign: 'right' }}>
                DATE TO
              </Typography>
            }
          />
        </LocalizationProvider>
      </Box>

      {visibleDatePicker && (
        <Paper
          elevation={10}
          sx={{ position: 'absolute', mt: 5, zIndex: '100' }}
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
            direction='horizontal'
            showDateDisplay={false}
          />
        </Paper>
      )}
    </>
  );
}
