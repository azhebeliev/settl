import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { grey } from '@mui/material/colors';

const headers = [
  '',
  '1 - reminder',
  '2 - reminder',
  '3 - Debt collection',
  '3 - Internal reminder',
];
const cells = [
  'Invoice due date',
  '+2 day(s)',
  '+5 day(s)',
  '+20 day(s)',
  'email@company.com, email@company.com',
];

export function DebitorsSubRowFooter() {
  return (
    <Table size='small' sx={{ borderTop: `1px solid ${grey[300]}`, my: 1 }}>
      <TableBody>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell key={index} sx={{ color: grey[500] }}>
              {header}
            </TableCell>
          ))}
        </TableRow>
        <TableRow>
          {cells.map((cell, index) => (
            <TableCell key={index} sx={{ color: grey[700] }}>
              {cell}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
