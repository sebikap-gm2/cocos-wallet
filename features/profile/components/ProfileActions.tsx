import { DS } from '@/design-system';
import { Alert } from 'react-native';

export const ProfileActions = () => {
  return (
    <DS.View row center justifyCenter gap={10}>
      <DS.Button
        icon="send-outline"
        iconVertical
        center
        style={{ padding: 20 }}
        type="secondary"
        text="Send"
        onPress={() =>
          Alert.alert(
            'Send',
            'This would trigger action to send money, or maybe trigger transaction modal',
          )
        }
      />
      <DS.Button
        icon="qr-code-outline"
        iconVertical
        center
        style={{ padding: 20 }}
        type="secondary"
        text="Recieve"
        onPress={() =>
          Alert.alert(
            'Recieve',
            'This could send a notification to contact, send QR, or trigger transaction modal',
          )
        }
      />
      <DS.Button
        icon="time-outline"
        iconVertical
        center
        style={{ padding: 20 }}
        type="secondary"
        text="Activity"
        onPress={() =>
          Alert.alert(
            'Activity',
            'This could show a detailed list of the BUY and SELL actions the client took',
          )
        }
      />
    </DS.View>
  );
};
