import { useState } from 'react';
import { InvoicesTable } from '../../components/tables/InvoicesTable';
import { mockInvoicesTableData } from '../../mock/mockInvoices';
import { InvoicesStatus } from '../../Types/InvoicesTypes';
import { invoicesColumns } from './InvoicesTableColumns';
import { InvoicesTableControlSection } from './InvoicesTableControlSection';

export function InvoicesTableSection() {
  const [data, setData] = useState(mockInvoicesTableData());
  const defaultPerPage = 2;
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [currentPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [status, setStatus] = useState<InvoicesStatus>('active');
  const [globalFilter, setGlobalFilter] = useState<string>('');
  return (
    <>
      <InvoicesTableControlSection
        data={data}
        status={status}
        setStatus={setStatus}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <InvoicesTable globalFilter={globalFilter} data={data} columns={invoicesColumns} />
    </>
  );
}
