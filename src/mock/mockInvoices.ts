export const mockedCards: {
    title: string;
    value?: number;
    percentTendency: number;
    valueTendency?: number;
    percentValue?: number;
  }[] = [
    {
      title: 'Credit memos last 30 days',
      value: 10,
      percentTendency: 7.5,
      valueTendency: 5,
    },
    {
      title: 'Direct payments last 30 days',
      value: 20,
      percentTendency: 20,
      valueTendency: 5,
    },
    {
      title: 'Invoices in dispute before debt collection',
      value: 5,
      percentTendency: -7.5,
      valueTendency: 5,
    },
    {
      title: 'Invoices withdrawn last 30 days - other',
      value: 5,
      percentTendency: 15,
      valueTendency: 5,
    },
    {
      title: 'Invoices withdrawn last 30 days - wrongly sent',
      value: 8,
      percentTendency: 0,
      valueTendency: 5,
    },
    {
      title: 'Share or disputed invoices after dept collection 12 months',
      percentValue: 10,
      percentTendency: 7.5,
    },
  ];