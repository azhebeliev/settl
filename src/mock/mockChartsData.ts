export function mockAccountReceivablesData() {
  return {
    high: [50, 100, 200, 100, 150],
    medium: [1000, 100, 1500, 700, 900],
    low: [400, 500, 700, 1000, 300],
  };
}

export function mockDsoDevelopmentChartsData() {
  return {
    toSolvedCase: [35, 40, 35, 45, 37, 41, 43, 44, 36, 37, 39, 40],
    toRegistration: [50, 51, 53, 55, 54, 56, 50, 52, 55, 54, 53, 51],
    paymentTerms: [15, 16, 15, 17, 18, 19, 14, 13, 12, 11, 15, 16],
  };
}

export function mockBankruptcyChartData() {
  const getRandomBankruptcy = (min: number, max: number) => {
    return +(Math.random() * (max - min) + min).toFixed(1);
  }
  let data = [];
  for (let i = 1; i < 20; i++) {
    data.push([Date.UTC(2023, 6, i), getRandomBankruptcy(0,3 )]);
  }
  return data;
}
