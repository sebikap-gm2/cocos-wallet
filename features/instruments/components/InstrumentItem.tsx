import { DS } from "@/design-system";
import { StyleSheet } from "react-native";
import { formatCurrency } from "@/utils";
import { InstrumentType, TInstrument } from "../types";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


interface InstrumentItemProps {
  item: TInstrument
  position: number
}

export const InstrumentItem = ({ item, position }: InstrumentItemProps) => {
  const router = useRouter()
  const returnPercentage = Math.round(((item.last_price - item.close_price) / item.close_price) * 100);

  const handleInstrumentClick = () => router.navigate({
    pathname: '/(modal)/instrumentDetails',
    params: {
      instrumentId: item.id
    }
  });

  const icon = item.type === InstrumentType.ACCIONES ? 'stats-chart-outline' : 'cash-outline';

  return (
    <DS.Button type="secondary" style={styles.container} onPress={handleInstrumentClick}>
      <DS.View flex={1} spaceBetween>
        <DS.Text type="subtitle">{item.ticker}</DS.Text>
        <DS.Text type='defaultSemiBold'>{item.name}</DS.Text>
        <DS.Text>{formatCurrency({ value: item.last_price, shorten: true })}</DS.Text>
        <DS.View row center spaceBetween>
          <DS.Text>{returnPercentage}%</DS.Text>
          <Ionicons name={icon} size={18} color='white' />
        </DS.View>
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
    flex: 1,
    margin: 5,
    padding: 5,
    // borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 3,
    flexWrap: 'wrap'
  }
})