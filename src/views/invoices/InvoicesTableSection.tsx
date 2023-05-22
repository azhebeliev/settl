import { useState } from 'react';
import { InvoicesRowSubTable } from './InvoicesRowSubTable';
import { ReactTable } from '../../components/tables/ReactTable';
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
      <ReactTable
        subRowKey='vouchers'
        SubRow={InvoicesRowSubTable}
        globalFilter={globalFilter}
        data={data}
        columns={invoicesColumns}
        enableSorting
        enabledPagination
      />
    </>
  );
}
