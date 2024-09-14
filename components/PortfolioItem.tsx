import { PortfolioItem as TPortfolioItem } from "@/types"
import { DS } from "./design-system";

interface PortfolioItemProps {
  item: TPortfolioItem
}

export const PortfolioItem = ({item}: PortfolioItemProps) => {
  return (
    <DS.View>
      <DS.Text>{item.instrument_id}</DS.Text>
      <DS.Text>{item.ticker}</DS.Text>
      <DS.Text>{item.quantity}</DS.Text>
      <DS.Text>{item.avg_cost_price}</DS.Text>
      <DS.Text>{item.close_price}</DS.Text>
      <DS.Text>{item.last_price}</DS.Text>
    </DS.View>
  );
}