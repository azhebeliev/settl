import FlagSharpIcon from '@mui/icons-material/FlagSharp';
import SquareSharpIcon from '@mui/icons-material/SquareSharp';
import { Stack, Typography, useTheme } from '@mui/material';
import { StatusMarker } from '../../../mock/mockInvoices';

export function FlagCell({
  risk,
  flag,
  bankruptcy,
}: {
  risk: StatusMarker;
  flag: StatusMarker;
  bankruptcy?: number;
}) {
  const { palette } = useTheme();
  const defineColor = (status: StatusMarker) => {
    switch (status) {
      case 'red':
        return palette.error.light;
      case 'orange':
        return palette.warning.main;
      case 'neutral':
        return palette.text.disabled;
      case 'green':
        return palette.success.light;
      default:
        return palette.text.primary;
    }
  };

  return (
    <>
      <Stack direction={'row'} spacing={1}>
        <SquareSharpIcon htmlColor={defineColor(risk)} />
        <FlagSharpIcon htmlColor={defineColor(flag)} />
        {bankruptcy !== undefined && <Typography>{bankruptcy}%</Typography>}
      </Stack>
    </>
  );
}
