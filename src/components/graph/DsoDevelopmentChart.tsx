import { green } from '@mui/material/colors';
import dayjs from 'dayjs';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { StackedBarChartData } from '../../Types/InvoicesTypes';

export function DsoDevelopmentChart({
  size,
  data,
}: {
  size: 'small' | 'normal';
  data: StackedBarChartData;
}) {
  const getMonths = () =>
    [11,10,9,8,7,6,5,4,3,2,1,0].map((i) =>
      dayjs().subtract(i, 'months').format('MMMM')
    );

  const options: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    chart: {
      type: 'column',
      height: size === 'small' ? '200vh' : '600vh',
    },
    title: {
      text: 'DSO development last 12 months',
      style: { fontSize: size === 'small' ? '0.625em' : '1.7em' },
    },
    xAxis: {
      categories: getMonths(),
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
      column: {
        stacking: 'normal',
      },
      series: {
        dataLabels: {
          enabled: size === 'normal',
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  };

  const series: Highcharts.SeriesColumnOptions[] = [
    {
      type: 'column',
      name: 'Average days from Settl collection registration to solved case',
      data: data.toSolvedCase,
      color: green[200],
    },
    {
      type: 'column',
      name: 'Average days from due date to Settl collection registration',
      data: data.toRegistration,
      color: green[100],
    },
    {
      type: 'column',
      name: 'Average payment terms',
      data: data.paymentTerms,
      color: green[300],
    },
  ];

  return (
    <HighchartsReact highcharts={Highcharts} options={{ ...options, series }} />
  );
}
