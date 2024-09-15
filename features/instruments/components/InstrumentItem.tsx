import { DS } from "@/design-system";
import { InstrumentItem as TInsturmentItem } from "@/types";
import { Dimensions, StyleSheet } from "react-native";
import { INSTRUMENTS_COLUMNS } from "../constants";
import { router } from "expo-router";

const { width } = Dimensions.get('window');
const cardWidth = width / INSTRUMENTS_COLUMNS - 20; // Adjust for margin

interface InstrumentItemProps {
  item: TInsturmentItem
}

export const InstrumentItem = ({ item }: InstrumentItemProps) => {
  const returnPrice = item.last_price - item.close_price;

  const handleInstrumentClick = () => router.navigate({ pathname: '/orders/modal', params: { instrumentId: item.id, ticker: item.ticker } });
  
  return (
    <DS.Button style={styles.container} onPress={handleInstrumentClick}>
      {/* <DS.Text>{item.id}</DS.Text> */}
      <DS.Text>{item.ticker}</DS.Text>
      <DS.Text>{item.name}</DS.Text>
      <DS.Text>{returnPrice}</DS.Text>
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
    width: cardWidth,
    backgroundColor: 'lightgray',
  }
})