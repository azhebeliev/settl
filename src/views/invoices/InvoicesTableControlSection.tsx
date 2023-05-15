import LoadingButton from '@mui/lab/LoadingButton';
import {
  ButtonGroup,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';

export function InvoicesTableControlSection() {
  return (
    <Stack
      justifyContent={'space-between'}
      direction={{ md: 'column-reverse', xl: 'row' }}
      paddingTop={2}
      spacing={1}
    >
      <Stack justifyContent={'space-between'}>
        <Typography noWrap>
          <span style={{ color: grey[500], fontSize: 14 }}>
            Time of last sync:{' '}
          </span>
          <span>24.11.2022 - 07.00.05(24h)</span>
        </Typography>
        <ButtonGroup variant='outlined'>
          <Button>Active</Button>
          <Button>Stopped</Button>
        </ButtonGroup>
      </Stack>
      <Stack direction={{ md: 'column', xl: 'row' }} spacing={1}>
        <Stack justifyContent={'space-between'}>
          <InputBase onChange={() => {}} placeholder='Search' />
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
        <Stack spacing={1}>
          <Stack direction={'row'} spacing={1}>
            <Typography paddingTop={2} variant='body2'>
              Invoices past due date with more than
            </Typography>
            <FormControl sx={{ marginBottom: 1, minWidth: 120 }} size='small'>
              <InputLabel id='invoices-period-label'>period</InputLabel>
              <Select
                labelId='invoices-period-label'
                id='invoices-period'
                value={'14'}
                label='period'
                onChange={() => {}}
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>7</MenuItem>
                <MenuItem value={30}>14</MenuItem>
                <MenuItem value={30}>30</MenuItem>
              </Select>
            </FormControl>
          </Stack>
          <Stack direction={'row'} spacing={1}>
            <LoadingButton
              variant='contained'
              loading={false}
            >
              Download
            </LoadingButton>
            <LoadingButton variant='contained' loading={false}>
              Send reminder
            </LoadingButton>
            <LoadingButton variant='contained' loading={true}>
              Send to settle
            </LoadingButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
