import { DS } from "@/design-system";
import { InstrumentItem, useInstrumentItems } from "@/features";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function Instruments() {
  const { data, isLoading } = useInstrumentItems();

  if (isLoading) {
    return null;
  }

  if (!data) {
    return <DS.View><DS.Text>Error fetching data</DS.Text></DS.View>
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => <InstrumentItem item={item} position={index} />}
        contentContainerStyle={styles.listContainer}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    margin: 20
  },
  row: {
    justifyContent: 'space-between',
  },
  listContainer: {
    paddingVertical: 10,
  },
})