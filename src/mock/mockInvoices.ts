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

export type StatusMarker = 'red' | 'orange' | 'green'|'neutral'
export function mockInvoicesTableData() {
  const createSubTableData = (
    voucherType: string,
    voucherNumber: number,
    originalAmount: number,
    remainingAmount: number,
    invoiceDate: string,
    daysPast: number
  ) => {
    return {
      voucherType,
      voucherNumber,
      originalAmount,
      remainingAmount,
      invoiceDate,
      daysPast,
    };
  };
  const createTableData = (
    id:number,
    vouchers: Array<ReturnType<typeof createSubTableData>>,
    customerNumber: number,
    customerName: string,
    risk: StatusMarker,
    flag: StatusMarker,
    bankruptcy: number,
    totalOriginalAmount: number,
    totalRemainingAmount: number,
    currency: string
  ) => {
    return {
      id,
      vouchers,
      customerNumber,
      customerName,
      risk,
      flag,
      bankruptcy,
      totalOriginalAmount,
      totalRemainingAmount,
      currency,
    };
  };

  const vaucher1 = createSubTableData(
    'Invoice',
    1,
    300,
    200,
    '12.05.2022',
    39
  );
  const vaucher2 = createSubTableData(
    'Not Invoice',
    1,
    800,
    300,
    '08.06.2023',
    3
  );
  const vaucher3 = createSubTableData(
    'Invoice',
    1,
    1000,
    400,
    '09.10.2021',
    306
  );

  return [
    createTableData(
      1,
      [],
      1201,
      'Andrew',
      'neutral',
      'red',
      50,
      1000,
      800,
      'USD'
    ),
    createTableData(
      2,
      [vaucher2, vaucher3],
      1202,
      'Roman',
      'red',
      'orange',
      70,
      1000,
      600,
      'USD'
    ),
    createTableData(
      3,
      [vaucher1, vaucher3],
      1203,
      'Den',
      'neutral',
      'green',
      30,
      10000,
      8500,
      'EURO'
    ),
    createTableData(
      4,
      [vaucher2, vaucher1, vaucher3],
      1204,
      'Jon',
      'green',
      'orange',
      40,
      12000,
      8000,
      'USD'
    ),
    createTableData(
      5,
      [vaucher3, vaucher2, vaucher1],
      1205,
      'Don',
      'red',
      'green',
      80,
      1000000,
      800,
      'EURO'
    ),
    createTableData(
      6,
      [vaucher2, vaucher1],
      1206,
      'Frank',
      'neutral',
      'red',
      0.5,
      800000,
      800,
      'USD'
    ),
  ];
}

export type InvoiceData = ReturnType<typeof mockInvoicesTableData>[0]
export type VoucherData = InvoiceData['vouchers'][0];
