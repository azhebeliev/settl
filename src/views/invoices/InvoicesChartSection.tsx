import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import { Box, Grid, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { AccountReceivablesChart } from '../../components/charts/AccountReceivablesChart';
import { DsoDevelopmentChart } from '../../components/charts/DsoDevelopmentChart';
import {
  mockAccountReceivablesData,
  mockDsoDevelopmentChartsData,
} from '../../mock/mockChartsData';

export function InvoicesChartSection() {
  const [isAccountsChartExpanded, setAccountsChartExpanded] = useState(false);
  const [isDsoChartExpanded, setDsoChartExpanded] = useState(false);
  return (
    <Box>
      <Grid mt={2} container spacing={2}>
        <Grid item xs={isAccountsChartExpanded ? 12 : 3}>
          <Box
            sx={{
              backgroundColor: grey[100],
              position: 'relative',
            }}
          >
            <IconButton
              sx={{ position: 'absolute', right: 0, top: 0, zIndex: 1000 }}
              onClick={() => setAccountsChartExpanded(!isAccountsChartExpanded)}
            >
              {isAccountsChartExpanded ? (
                <OpenInNewOffIcon htmlColor={grey[500]} />
              ) : (
                <OpenInNewIcon htmlColor={grey[500]} />
              )}
            </IconButton>
            <AccountReceivablesChart
              size={isAccountsChartExpanded ? 'normal' : 'small'}
              data={mockAccountReceivablesData()}
            />
          </Box>
        </Grid>
        <Grid item xs={isDsoChartExpanded ? 12 : 3}>
          <Box
            sx={{
              backgroundColor: grey[100],
              position: 'relative',
            }}
          >
            <IconButton
              sx={{ position: 'absolute', right: 0, top: 0, zIndex: 1000 }}
              onClick={() => setDsoChartExpanded(!isDsoChartExpanded)}
            >
              {isDsoChartExpanded ? (
                <OpenInNewOffIcon htmlColor={grey[500]} />
              ) : (
                <OpenInNewIcon htmlColor={grey[500]} />
              )}
            </IconButton>
            <DsoDevelopmentChart
              size={isDsoChartExpanded ? 'normal' : 'small'}
              data={mockDsoDevelopmentChartsData()}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
