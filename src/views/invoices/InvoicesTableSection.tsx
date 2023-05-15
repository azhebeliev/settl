import { Box } from '@mui/material';
import { useState } from 'react';
import { InvoicesTable } from '../../components/tables/InvoicesTable';
import { mockInvoicesTableData } from '../../mock/mockInvoices';
import { invoicesColumns } from './InvoicesTableColumns';
import { InvoicesTableControlSection } from './InvoicesTableControlSection';

export function InvoicesTableSection() {
  const [data, setData] = useState(mockInvoicesTableData());
  const defaultPerPage = 2;
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [currentPage, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  return (
    <>
      <InvoicesTableControlSection/>
      <InvoicesTable data={data} columns={invoicesColumns} />
    </>
  );
}
