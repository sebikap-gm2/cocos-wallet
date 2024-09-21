import { DS } from "@/design-system";
import { openExternalLink } from "@/utils";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";

function ProfileMenu() {
  const router = useRouter();

  return (
    <DS.View flex={1} style={styles.container}>
      <DS.Button type='plain' icon='settings' text='Settings' onPress={() => router.navigate('/(modal)/settings')} center={false} />
      <DS.Button type='plain' icon='help' text='Help' onPress={() => openExternalLink('https://cocos.capital/ayuda')} center={false} />
    </DS.View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start'
  }
})

export { ProfileMenu };