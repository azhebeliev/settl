import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import SquareSharpIcon from '@mui/icons-material/SquareSharp';
import { Stack, Typography } from '@mui/material';
import { StatusMarker } from '../../../mock/mockInvoices';

export function FlagCell({
  risk,
  flag,
  bankruptcy,
}: {
  risk: StatusMarker;
  flag: StatusMarker;
  bankruptcy: number;
}) {
  const defineColor = (status: StatusMarker) => {
    switch (status) {
      case 'red':
        return 'error';
      case 'orange':
        return 'warning';
      default:
        return 'success';
    }
  };

  return (
    <>
      <Stack direction={'row'} spacing={1}>
        <SquareSharpIcon color={defineColor(risk)} />
        <FlagSharpIcon color={defineColor(flag)} />
        <Typography>{bankruptcy}%</Typography>
      </Stack>
    </>
  );
}
