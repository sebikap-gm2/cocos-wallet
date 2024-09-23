import { DS } from '@/design-system';
import { InstrumentItem, useSearchItems } from '@/features';
import { ListEmptyComponent } from '@/shared';
import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';

export default function Search() {
  const [text, setText] = useState('');
  const { data, isLoading } = useSearchItems(text);

  if (isLoading) {
    return null;
  }

  if (!data) {
    return (
      <DS.View>
        <DS.Text>Error fetching data</DS.Text>
      </DS.View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <DS.Text>Discover</DS.Text>
      <FlatList
        data={data}
        renderItem={({ item }) => <InstrumentItem item={item} />}
        ListEmptyComponent={<ListEmptyComponent message={`No tickers found for ${text}`} />}
      />
      <DS.TextInput autoCorrect={false} value={text} onChangeText={setText} />
    </SafeAreaView>
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
