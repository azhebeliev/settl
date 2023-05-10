import { Box } from '@mui/material';
import { useState } from 'react';
import { InvoicesTable } from '../../components/tables/InvoicesTable';
import { mockInvoicesTableData } from '../../mock/mockInvoices';

export function InvoicesTableSection() {
    const [data,setData] = useState( mockInvoicesTableData());
    return <>
    <Box margin={'20px 0'}>Control section</Box>
    <InvoicesTable data={data} setData={setData}/>
    </>
}