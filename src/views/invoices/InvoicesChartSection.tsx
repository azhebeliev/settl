import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import OpenInNewOffIcon from '@mui/icons-material/OpenInNewOff';
import { Box, Grid, IconButton } from '@mui/material';
import { grey } from '@mui/material/colors';
import { useState } from 'react';
import { AccountReceivablesChart } from '../../components/graph/AccountReceivablesChart';
import { DsoDevelopmentChart } from '../../components/graph/DsoDevelopmentChart';
import {
  mockAccountReceivablesData,
  mockDsoDevelopmentChartsData,
} from '../../mock/mockChartsData';

export function InvoicesChartSection() {
  const [isExpanded, setExpanded] = useState(false);
  return (
    <Box>
      <Grid mt={2} container spacing={2}>
        <Grid item xs={isExpanded ? 12 : 3}>
          <Box
            sx={{
              backgroundColor: grey[100],
              position: 'relative',
            }}
          >
            <IconButton
              sx={{ position: 'absolute', right: 0, top: 0, zIndex: 1000 }}
              onClick={() => setExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <OpenInNewOffIcon htmlColor={grey[500]} />
              ) : (
                <OpenInNewIcon htmlColor={grey[500]} />
              )}
            </IconButton>
            <AccountReceivablesChart
              size={isExpanded ? 'normal' : 'small'}
              data={mockAccountReceivablesData()}
            />
          </Box>
        </Grid>
        <Grid item xs={isExpanded ? 12 : 3}>
          <Box
            sx={{
              backgroundColor: grey[100],
              position: 'relative',
            }}
          >
            <IconButton
              sx={{ position: 'absolute', right: 0, top: 0, zIndex: 1000 }}
              onClick={() => setExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <OpenInNewOffIcon htmlColor={grey[500]} />
              ) : (
                <OpenInNewIcon htmlColor={grey[500]} />
              )}
            </IconButton>
            <DsoDevelopmentChart
              size={isExpanded ? 'normal' : 'small'}
              data={mockDsoDevelopmentChartsData()}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
