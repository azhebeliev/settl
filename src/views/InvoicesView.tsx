import { InvoicesGraphSection } from './invoices/InvoicesGraphSection';
import { InvoicesInfoCardsSection } from './invoices/InvoicesInfoCardsSection';
import { InvoicesTableSection } from './invoices/InvoicesTableSection';

export function InvoicesView() {
  return (
    <>
      <InvoicesInfoCardsSection />
      <InvoicesGraphSection />
      <InvoicesTableSection />
    </>
  );
}
