import { DS } from "@/design-system";
import { usePortfolioItems } from "@/features";
import { formatCurrency } from "@/utils";

export default function HomeScreenComponent() {
  const { data, isLoading } = usePortfolioItems();

  if (isLoading) {
    return <DS.Text>Loading...</DS.Text>;
  }

  if (!data) {
    return <DS.Text>Error no data</DS.Text>;
  }

  const total = data.reduce(
    (total, item) => total + item.quantity * item.close_price,
    0,
  );

  return (
    <DS.PageLayout>
      <DS.View>
        <DS.Text type="title">My Wallet</DS.Text>
        <DS.Text type="subtitle">{formatCurrency({ value: total })}</DS.Text>
      </DS.View>
    </DS.PageLayout>
  );
}
