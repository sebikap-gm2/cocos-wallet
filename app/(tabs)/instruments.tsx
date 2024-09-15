import { DS } from "@/design-system";
import { InstrumentItem, INSTRUMENTS_COLUMNS } from "@/features";
import { instrumentsService } from "@/services/http/instruments.service";
import { useQuery } from "@tanstack/react-query";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function Instruments() {
  const query = useQuery({ queryKey: ['instruments'], queryFn: instrumentsService.getInstruments });

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
        numColumns={INSTRUMENTS_COLUMNS}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContainer}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 10
  },
  row: {
    justifyContent: 'space-between',
  },
  listContainer:{
    paddingVertical: 10,
  },
})