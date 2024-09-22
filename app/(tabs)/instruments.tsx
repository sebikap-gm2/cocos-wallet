import { DS } from "@/design-system";
import { InstrumentItem, useInstrumentItems } from "@/features";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";

export default function Instruments() {
  const { instruments, isLoading } = useInstrumentItems();

  if (isLoading) {
    return null;
  }

  if (!instruments) {
    return <DS.View><DS.Text>Error fetching instruments</DS.Text></DS.View>
  }

  return (
    <DS.PageLayout style={styles.container}>
      <DS.Text type='title'>Instruments</DS.Text>
      <FlatList
        data={instruments}
        renderItem={({ item }) => <InstrumentItem item={item} />}
        contentContainerStyle={styles.listContainer}
        numColumns={2}
      />

    </DS.PageLayout>
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
})