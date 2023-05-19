import { InvoicesChartSection } from './invoices/InvoicesChartSection';
import { InvoicesInfoCardsSection } from './invoices/InvoicesInfoCardsSection';
import { InvoicesTableSection } from './invoices/InvoicesTableSection';

export function InvoicesView() {
  return (
    <>
      <InvoicesInfoCardsSection />
      <InvoicesChartSection />
      <InvoicesTableSection />
    </>
  );
}
