import { DS } from "@/design-system"
import { Alert } from "react-native"

export const ProfileActions = () => {
  return (
    <>
      <DS.Button icon='send-outline' text='Send' onPress={() => Alert.alert('Send', 'Sendddd')} />
      <DS.Button icon='send-outline' text='Send' onPress={() => Alert.alert('Send', 'Sendddd')} />
      <DS.Button icon='send-outline' text='Send' onPress={() => Alert.alert('Send', 'Sendddd')} />
    </>
  )
}