import { DS } from '@/design-system';
import { StyleSheet } from 'react-native';
import { formatCurrency } from '@/utils';
import { TInstrument } from '../types';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

interface InstrumentItemProps {
  item: TInstrument;
}

export const InstrumentItem = ({ item }: InstrumentItemProps) => {
  const router = useRouter();

  const handleInstrumentClick = () =>
    router.navigate({
      pathname: '/(modal)/transaction',
      params: {
        instrumentId: item.id,
      },
    });

  const icon = item.type === 'ACCIONES' ? 'stats-chart-outline' : 'cash-outline';

  return (
    <DS.Button type="secondary" style={styles.container} onPress={handleInstrumentClick}>
      <DS.View flex={1} full spaceBetween>
        <DS.Text type="subtitle">{item.ticker}</DS.Text>
        <DS.Text type="defaultSemiBold">{item.name}</DS.Text>
        <DS.Text>{formatCurrency({ value: item.last_price, shorten: true })}</DS.Text>
        {item.returnPercentage ? (
          <DS.View row center spaceBetween>
            <DS.Text>{item.returnPercentage}%</DS.Text>
            <Ionicons name={icon} size={18} color="white" />
          </DS.View>
        ) : null}
      </DS.View>
    </DS.Button>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    padding: 5,
    gap: 3,
    flexWrap: 'wrap',
  },
});
