import { StyleSheet } from "react-native";
import { DS } from "@/design-system";
import { useThemeColor } from "@/design-system";
import { type TPortfolioItem } from "../types";
import { formatCurrency } from "@/utils";

interface PortfolioItemProps {
  item: TPortfolioItem;
  bg?: boolean;
}

export const PortfolioItem = ({ item, bg }: PortfolioItemProps) => {
  const backgroundColor = useThemeColor("colors.card");

  return (
    <DS.Button
      style={[styles.container, bg && { backgroundColor }]}
      onPress={() => null}
    >
      <DS.View flex={1}>
        <DS.Text center>{item.ticker}</DS.Text>
      </DS.View>
      <DS.View flex={1}>
        <DS.Text center>{item.quantity}</DS.Text>
      </DS.View>
      <DS.View flex={1}>
        <DS.Text center>
          {formatCurrency({ value: item.avg_cost_price })}
        </DS.Text>
      </DS.View>
      <DS.View flex={1}>
        <DS.Text center>{formatCurrency({ value: item.close_price })}</DS.Text>
      </DS.View>
      <DS.View flex={1}>
        <DS.Text center>{formatCurrency({ value: item.last_price })}</DS.Text>
      </DS.View>
    </DS.Button>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
    flexWrap: "wrap",
  },
});
