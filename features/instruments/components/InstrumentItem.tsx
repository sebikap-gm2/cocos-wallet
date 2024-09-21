import { DS } from "@/design-system";
import { InstrumentItem as TInsturmentItem } from "@/types";
import { StyleSheet } from "react-native";
import { router } from "expo-router";
import { formatCurrency } from "@/utils";


interface InstrumentItemProps {
  item: TInsturmentItem
  position: number
}

export const InstrumentItem = ({ item, position }: InstrumentItemProps) => {
  const returnPrice = item.last_price - item.close_price;
  const roundedReturnPrice = Math.round((returnPrice + Number.EPSILON) * 100) / 100

  const handleInstrumentClick = () => router.navigate({
    pathname: '/(modal)/transaction',
    params: {
      instrumentId: item.id,
      ticker: item.ticker
    }
  });

  return (
    <DS.Button style={styles.container} onPress={handleInstrumentClick}>
      <DS.View flex={0.5} center>
        <DS.Text>{position}</DS.Text>
      </DS.View>
      <DS.View flex={0.5} center>
        <DS.Text>LOG</DS.Text>
      </DS.View>
      <DS.View flex={3}>
        <DS.Text>{item.name}</DS.Text>
        <DS.Text>{item.ticker}</DS.Text>
      </DS.View>
      <DS.View flex={1} center>
        <DS.Text>{formatCurrency({ value: roundedReturnPrice, shorten: true })}</DS.Text>
      </DS.View>
      {/* <DS.Text>{item.id}</DS.Text> */}
      {/* <DS.Text>{item.last_price}</DS.Text> */}
      {/* <DS.Text>{item.type}</DS.Text> */}
      {/* <DS.Text>{item.close_price}</DS.Text> */}
    </DS.Button>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 3,
    flexWrap: 'wrap'
  }
})