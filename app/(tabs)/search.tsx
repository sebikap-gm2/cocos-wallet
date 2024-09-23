import { DS } from '@/design-system';
import { InstrumentItem, useSearchItems } from '@/features';
import { ListEmptyComponent, PageLayout } from '@/shared';
import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';

export default function Search() {
  const [text, setText] = useState('');
  const { data, isLoading } = useSearchItems(text);

  return (
    <PageLayout isLoading={isLoading} style={styles.container}>
      <DS.Text type="title">Discover</DS.Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <InstrumentItem item={item} />}
        ListEmptyComponent={<ListEmptyComponent message={`No tickers found for ${text}`} />}
      />
      <DS.TextInput autoCorrect={false} value={text} onChangeText={setText} />
    </PageLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    justifyContent: 'center',
  },
  listContainer: {
    paddingVertical: 10,
  },
});
