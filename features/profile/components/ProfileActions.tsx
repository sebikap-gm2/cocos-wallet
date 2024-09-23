import { DS } from '@/design-system';
import { Alert } from 'react-native';

export const ProfileActions = () => {
  return (
    <DS.View row center justifyCenter gap={10}>
      <DS.Button icon="send-outline" text="Send" onPress={() => Alert.alert('Send', 'Sendddd')} />
      <DS.Button icon="send-outline" text="Send" onPress={() => Alert.alert('Send', 'Sendddd')} />
      <DS.Button icon="send-outline" text="Send" onPress={() => Alert.alert('Send', 'Sendddd')} />
    </DS.View>
  );
};
