import { DS } from "@/design-system"
import { FlatList } from "react-native"
import { PortfolioItem } from "../portfolio"
import { useQuery } from "@tanstack/react-query";
import { portfolioService } from "@/services";

export const Portfolio = () => {
  const query = useQuery({ queryKey: ['portfolio'], queryFn: portfolioService.getPortfolio });

  return (
    <>
      <DS.View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <DS.View flex={1}><DS.Text bold center>Ticker</DS.Text></DS.View>
        <DS.View flex={1}><DS.Text bold center>Quantity</DS.Text></DS.View>
        <DS.View flex={1}><DS.Text bold center>Avg</DS.Text></DS.View>
        <DS.View flex={1}><DS.Text bold center>Close</DS.Text></DS.View>
        <DS.View flex={1}><DS.Text bold center>Last</DS.Text></DS.View>
      </DS.View>
      <FlatList
        data={query.data}
        renderItem={({ item, index }) => <PortfolioItem item={item} bg={index % 2 === 0} />}
        style={{ flex: 1 }}
      />
    </>
  )
}