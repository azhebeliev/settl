import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';

export function InfoCard({
  title,
  value,
  percentValue,
  percentTendency,
  valueTendency,
}: {
  title: string;
  value?: number;
  percentTendency: number;
  valueTendency?: number;
  percentValue?: number;
}) {
  const defineColor = (value: number) => {
    if (value === 0) return 'text.secondary';
    if (value > 0) return 'success.light';
    else return 'error.light';
  };

  const defineArrow = (value: number) => {
    if (value === 0) return <></>;
    if (value > 0) return <NorthIcon sx={{ fontSize: '12px' }} />;
    else return <SouthIcon sx={{ fontSize: '12px' }} />;
  };
  const defineDigit = (value: number) => {
    if (value === 0) return '';
    if (value > 0) return '+';
    else return '-';
  };

  return (
    <Card sx={{ backgroundColor: grey[50], height: '100%' }}>
      <CardContent sx={{ height: '80%' }}>
        <Stack height={'100%'} direction={'column'} justifyContent={'space-between'}>
          <div>
            <Typography
              gutterBottom
              variant='body2'
              component='div'
              color='text.secondary'
            >
              {title}
            </Typography>

            <Stack direction='row'>
              <Typography variant='h5'>{value || percentValue}</Typography>
              <Typography
                mt={-1}
                variant='subtitle2'
                color={defineColor(percentTendency)}
              >
                {defineArrow(percentTendency)}
                {Math.abs(percentTendency)}
                {'%'}
              </Typography>
            </Stack>
          </div>
          {valueTendency && (
            <Typography
              position={'relative'}
              bottom={0}
              variant='body2'
              component='div'
              color='text.secondary'
            >
              Compared to last 4 months {defineDigit(valueTendency)}
              {valueTendency}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
