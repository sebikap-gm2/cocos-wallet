import { DS } from '@/design-system';
import { usePortfolioItems } from '@/features';
import { Spinner } from '@/shared';
import { formatCurrency } from '@/utils';

export default function HomeScreenComponent() {
  const { portfolioItems, isLoading } = usePortfolioItems();

  const total = portfolioItems.reduce((total, item) => total + item.quantity * item.close_price, 0);

  return (
    <DS.PageLayout isLoading={isLoading}>
      <DS.View>
        <DS.Text type="title">My Wallet</DS.Text>
        <DS.Text type="subtitle">{formatCurrency({ value: total })}</DS.Text>
      </DS.View>
    </DS.PageLayout>
  );
}
