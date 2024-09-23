import { Linking } from 'react-native';

export const openExternalLink = async (url: string, errorMessage = '') => {
  const supported = await Linking.canOpenURL(url);

  if (supported) {
    await Linking.openURL(url);
  } else {
    alert(errorMessage ?? `There was an error opening the link. Please contact us for help`);
    console.error("Don't know how to open URI: " + url);
  }
};
