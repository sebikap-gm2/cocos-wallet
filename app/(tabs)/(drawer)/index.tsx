import { DS } from '@/design-system';
import { Banner, usePortfolioItems } from '@/features';
import { ProfileActions } from '@/features/profile/components';
import { PageLayout } from '@/shared';
import LineChartExample from '@/shared/components/LineChart';
import { formatCurrency } from '@/utils';

export default function HomeScreenComponent() {
  const { portfolioItems, isLoading } = usePortfolioItems();

  const total = portfolioItems.reduce((total, item) => total + item.quantity * item.close_price, 0);

  return (
    <PageLayout isLoading={isLoading}>
      <DS.View gap={30}>
        <DS.View>
          <DS.Text type="title">My Wallet</DS.Text>
          <DS.Text type="subtitle">{formatCurrency({ value: total })}</DS.Text>
        </DS.View>
        <DS.View>
          <LineChartExample />
        </DS.View>
        <DS.View>
          <ProfileActions />
        </DS.View>
        <DS.View>
          <Banner />
        </DS.View>
      </DS.View>
    </PageLayout>
  );
}
