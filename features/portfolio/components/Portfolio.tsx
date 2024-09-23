import { FlatList } from 'react-native';
import { DS } from '@/design-system';
import { usePortfolioItems } from '../hooks';
import { PortfolioItem } from './PortfolioItem';

export const Portfolio = () => {
  const { portfolioItems } = usePortfolioItems();
  return (
    <>
      <DS.View row>
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
        data={portfolioItems}
        renderItem={({ item, index }) => <PortfolioItem item={item} bg={index % 2 === 0} />}
        style={{ flex: 1 }}
      />
    </>
  );
};
