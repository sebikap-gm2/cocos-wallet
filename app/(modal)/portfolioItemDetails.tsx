import { DS } from '@/design-system';
import { PortfolioItemDetailsRow } from '@/features';
import { portfolioItemSelector } from '@/features/portfolio/state';
import { formatCurrency } from '@/utils';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { z } from 'zod';

const PortfolioItemDetailsParamsValidator = z.object({
  params: z.object({
    instrumentId: z.coerce.number().int(),
  }),
});

export default function PortfolioItemDetails() {
  const route = useRoute();
  const { params } = PortfolioItemDetailsParamsValidator.parse(route);
  const portfolio = useRecoilValue(portfolioItemSelector(params.instrumentId));

  if (!portfolio) return null;

  return (
    <DS.View flex={1} full gap={20} style={{ padding: 20 }}>
      <DS.View center gap={10}>
        <Ionicons name="stats-chart-outline" size={32} color="white" />
        <DS.Text type="title">{portfolio.ticker}</DS.Text>
      </DS.View>
      <PortfolioItemDetailsRow title="Quantity" value={portfolio.quantity} />
      <PortfolioItemDetailsRow
        title="Last Price"
        value={formatCurrency({ value: portfolio.last_price, shorten: true })}
      />
      <PortfolioItemDetailsRow
        title="Close Price"
        value={formatCurrency({ value: portfolio.close_price, shorten: true })}
      />
      <PortfolioItemDetailsRow
        title="Average Cost Price"
        value={formatCurrency({ value: portfolio.avg_cost_price, shorten: true })}
      />
    </DS.View>
  );
}
