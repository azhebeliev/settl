import dayjs from 'dayjs';
import { StatusMarker } from './mockInvoices';

export function mockFlagsData(): Array<{
  date: Date;
  risk: StatusMarker;
  flag: StatusMarker;
  text: string;
}> {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => ({
    date: dayjs().add(e, 'days').toDate(),
    risk: e%2===0?'red':'green',
    flag: e%2===0?'orange':'neutral',
    text: 'some text',
  }));
}
