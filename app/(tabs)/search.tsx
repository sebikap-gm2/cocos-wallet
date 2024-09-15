import { DS } from "@/design-system";
import { InstrumentItem, INSTRUMENTS_COLUMNS } from "@/features";
import { searchService } from "@/services/http/search.service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function Search() {
  const [ticker, setTicker] = useState('DYC');
  const query = useQuery({ queryKey: ['search'], queryFn: () => searchService.getInstrumentsByTicker(ticker) });

  if (query.isLoading) {
    return null;
  }

  if (!query.data) {
    return <DS.View><DS.Text>Error fetching data</DS.Text></DS.View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={query.data}
        renderItem={({ item }) => <InstrumentItem item={item} />}
        contentContainerStyle={{ alignItems: 'center' }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  row: {
    justifyContent: 'center',
  },
  listContainer: {
    paddingVertical: 10,
  },
})