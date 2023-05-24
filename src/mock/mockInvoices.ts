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

export type SendingVariant = 'auto' | 'semi-auto';
export type StatusMarker = 'red' | 'orange' | 'green' | 'neutral';
export function mockInvoicesTableData() {
  const createSubTableData = (
    voucherType: string,
    voucherNumber: number,
    originalAmount: number,
    remainingAmount: number,
    invoiceDate: Date,
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
    id: number,
    vouchers: Array<ReturnType<typeof createSubTableData>>,
    customerNumber: number,
    customerName: string,
    risk: StatusMarker,
    flag: StatusMarker,
    bankruptcy: number,
    totalOriginalAmount: number,
    totalRemainingAmount: number,
    currency: string,
    type: string,
    sendingVariant: SendingVariant,
    workFlow: string
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
      type,
      sendingVariant,
      workFlow,
    };
  };

  const voucher1 = createSubTableData(
    'Invoice',
    1,
    300,
    200,
    new Date('01.01.2023'),
    39
  );
  const voucher2 = createSubTableData(
    'Not Invoice',
    1,
    800,
    300,
    new Date('01.02.2023'),
    3
  );
  const voucher3 = createSubTableData(
    'Invoice',
    1,
    1000,
    400,
    new Date('01.03.2023'),
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
      'USD',
      'Personal',
      'auto',
      ''
    ),
    createTableData(
      2,
      [voucher2, voucher3],
      1202,
      'Roman',
      'red',
      'orange',
      70,
      1000,
      600,
      'USD',
      'Personal',
      'semi-auto',
      ''
    ),
    createTableData(
      3,
      [voucher1, voucher3],
      1203,
      'Den',
      'neutral',
      'green',
      30,
      10000,
      8500,
      'EURO',
      'Personal',
      'auto',
      ''
    ),
    createTableData(
      4,
      [voucher2, voucher1, voucher3],
      1204,
      'Jon',
      'green',
      'orange',
      40,
      12000,
      8000,
      'USD',
      'SomeType',
      'semi-auto',
      ''
    ),
    createTableData(
      5,
      [voucher3, voucher2, voucher1],
      1205,
      'Don',
      'red',
      'green',
      80,
      1000000,
      800,
      'EURO',
      'SomeType',
      'semi-auto',
      ''
    ),
    createTableData(
      6,
      [voucher2, voucher1],
      1206,
      'Frank',
      'neutral',
      'red',
      0.5,
      800000,
      800,
      'USD',
      'SomeType',
      'auto',
      ''
    ),
  ];
}

export type InvoiceData = ReturnType<typeof mockInvoicesTableData>[0];
export type VoucherData = InvoiceData['vouchers'][0];
