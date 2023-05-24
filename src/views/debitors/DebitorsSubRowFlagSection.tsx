import {
  Box,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import dayjs from 'dayjs';
import { FlagCell } from '../../components/tables/Cells/FlagCell';
import { mockFlagsData } from '../../mock/mockFlagsData';

export function DebitorsSubRowFlagSection({
  data,
}: {
  data: ReturnType<typeof mockFlagsData>;
}) {
  return (
    <TableContainer>
      <Table size='small'>
        <TableBody>
          {data.map((row, index) => {
            return (
              <TableRow key={index}>
                <TableCell sx={{ color: grey[700] }}>
                  <Stack direction={'row'}>
                    <Box mr={2}>{dayjs(row.date).format('DD-MM-YYYY')}</Box>
                    <FlagCell risk={row.risk} flag={row.flag} />
                  </Stack>
                </TableCell>
                <TableCell sx={{ color: grey[700] }}>{row.text}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
