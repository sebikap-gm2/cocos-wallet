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

  const handleClick = () => {
    // Show modal
    // Form to send order
    // Order action BUY/SELL
    // Order type MARKET/LIMIT
    // quantity
    // IF Order type === LIMIT
    //      Price

    // Reponse: id, status PENDING/REJECTED/FILLED. Show id && status. 

    // <Link href="/modal" style={styles.link}>
    //     Open modal
    // </Link>

  };

  return (
    <DS.View style={styles.container} onPress={() => {
      console.log('HERE')
      router.navigate({ pathname: '/modal', params: { title: item.ticker } })
    }}>
      {/* <DS.Text>{item.id}</DS.Text> */}
      <DS.Text>{item.ticker}</DS.Text>
      <DS.Text>{item.name}</DS.Text>
      <DS.Text>{returnPrice}</DS.Text>
      {/* <DS.Text>{item.last_price}</DS.Text> */}
      {/* <DS.Text>{item.type}</DS.Text> */}
      {/* <DS.Text>{item.close_price}</DS.Text> */}
    </DS.View>
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