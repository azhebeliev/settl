import { useTheme } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { SplineBankruptcyData } from '../../Types/DebitorsTypes';

export function BankruptcyChart({ data }: { data: SplineBankruptcyData }) {
  const { palette } = useTheme();

  const options: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    accessibility: {
      enabled: false,
    },
    chart: {
      height: '300px',
    },
    title: {
      text: '',
    },
    xAxis: {
      type: 'datetime',
      title: {
        text: '',
      },
      gridLineWidth: 1, // Add vertical grid lines
    },
    yAxis: {
      min: 0,
      title: {
        text: 'bankruptcy',
      },
      labels: {
        format: '{value}%', // Add '%' suffix to yAxis labels
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: true,
          radius: 2.5,
        },
      },
    },
    tooltip: {
      pointFormat: '{point.y:.2f}%',
    },
  };

  const series: Highcharts.SeriesSplineOptions[] = [
    {
      type: 'spline',
      name: 'bankruptcy',
      data,
      color: palette.primary.main,
    },
  ];

  return (
    <HighchartsReact highcharts={Highcharts} options={{ ...options, series }} />
  );
}
