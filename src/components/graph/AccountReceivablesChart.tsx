import { useTheme } from '@mui/material';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StackedBarChartData } from '../../Types/InvoicesTypes';

const needToFindOutThatIsThisNumber = 6;

export function AccountReceivablesChart({
  size,
  data,
}: {
  size: 'small' | 'normal';
  data: StackedBarChartData;
}) {
  const { palette } = useTheme();

  const options: Highcharts.Options = {
    credits: {
      enabled: false,
    },

    chart: {
      height: size === 'small' ? '200vh' : '600vh',
    },
    title: {
      useHTML: true,
      text: `Account receivables<span style="vertical-align:super;font-size:${
        size === 'small' ? '0.3em' : '0.6em'
      };color:red">${needToFindOutThatIsThisNumber}</span>`,
      style: { fontSize: size === 'small' ? '0.625em' : '1.7em' },
    },
    xAxis: {
      categories: ['180+', '91-180', '61-90', '1-60', 'not past due date'],
      labels: { style: { fontSize: size === 'small' ? '0.5em' : '1em' } },
    },
    yAxis: {
      min: 0,
      title: {
        text: '',
      },
      labels: { style: { fontSize: size === 'small' ? '0.5em' : '1em' } },
    },
    legend: {
      itemStyle: { fontSize: size === 'small' ? '0.625em' : '1em' },
    },
    plotOptions: {
      series: {
        stacking: 'normal',
        dataLabels: {
          enabled: false,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  const series: Highcharts.SeriesBarOptions[] = [
    {
      type: 'bar',
      name: 'Low',
      data: data.low,
      color: palette.success.light,
    },
    {
      type: 'bar',
      name: 'Medium',
      data: data.medium,
      color: palette.warning.main,
    },
    {
    type: 'bar',
      name: 'High',
      data: data.high,
      color: palette.error.main,
    },
  ];

  return (
    <HighchartsReact highcharts={Highcharts} options={{ ...options, series }} />
  );
}
