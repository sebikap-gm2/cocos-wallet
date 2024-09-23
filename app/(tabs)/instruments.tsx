import { DS } from '@/design-system';
import { InstrumentItem, useInstrumentItems } from '@/features';
import { PageLayout } from '@/shared';
import { FlatList, StyleSheet } from 'react-native';

export default function Instruments() {
  const { instruments, isLoading } = useInstrumentItems();

  return (
    <PageLayout isLoading={isLoading} style={styles.container}>
      <DS.Text type="title">Instruments</DS.Text>
      <FlatList
        data={instruments}
        renderItem={({ item }) => <InstrumentItem item={item} />}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // margin: 10,
    margin: 20,
  },
  listContainer: {
    paddingVertical: 10,
  },
});
