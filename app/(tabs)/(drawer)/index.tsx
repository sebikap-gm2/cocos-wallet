import { DS } from "@/design-system";
import { PortfolioItem } from "@/features";
import { portfolioService } from "@/services";
import { formatCurrency } from "@/utils";
import { useQuery } from "@tanstack/react-query";
import { FlatList } from "react-native";

export default function HomeScreenComponent() {
  const query = useQuery({ queryKey: ['portfolio'], queryFn: portfolioService.getPortfolio });

  if (query.isLoading) {
    return <DS.Text>Loading...</DS.Text>;
  }

  if (!query.data) {
    return <DS.Text>Error no data</DS.Text>;
  }

  const total = query.data.reduce((total, item) => total + item.quantity * item.close_price, 0);

  return (
    <DS.PageLayout>
      <DS.View>
        <DS.Text type='title'>My Wallet</DS.Text>
        <DS.Text type='subtitle'>{formatCurrency({ value: total })}</DS.Text>
      </DS.View>
      <FlatList
        data={query.data}
        renderItem={({ item }) => <PortfolioItem item={item} />}
      />
    </DS.PageLayout>
  )
}