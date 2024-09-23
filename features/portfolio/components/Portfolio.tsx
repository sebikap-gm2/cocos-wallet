import { FlatList } from 'react-native';
import { DS } from '@/design-system';
import { usePortfolioItems } from '../hooks';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  const { data } = usePortfolioItems();
  return (
    <>
      <DS.View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <DS.View flex={1}>
          <DS.Text bold center>
            Ticker
          </DS.Text>
        </DS.View>
        <DS.View flex={1}>
          <DS.Text bold center>
            Quantity
          </DS.Text>
        </DS.View>
        <DS.View flex={1}>
          <DS.Text bold center>
            Avg
          </DS.Text>
        </DS.View>
        <DS.View flex={1}>
          <DS.Text bold center>
            Close
          </DS.Text>
        </DS.View>
        <DS.View flex={1}>
          <DS.Text bold center>
            Last
          </DS.Text>
        </DS.View>
      </DS.View>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <PortfolioItem item={item} bg={index % 2 === 0} />}
        style={{ flex: 1 }}
      />
    </>
  );
};
