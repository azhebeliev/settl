import { Grid } from '@mui/material';
import { InfoCard } from '../../components/InfoCard';
import { mockedCards } from '../../mock/mockInvoices';

export function InvoicesInfoCardsSection() {
  return (
    <>
      <Grid spacing={2} container={true} mt={1}>
        {mockedCards.map((data, index) => (
          <Grid key={index} item xs={6} md={4} xl={2}>
            <InfoCard {...data} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
