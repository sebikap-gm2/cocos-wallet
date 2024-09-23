import { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

export const PageLayout: React.FC<PropsWithChildren & ViewProps> = ({
  children,
  style,
  ...rest
}) => {
  return (
    <SafeAreaView style={[{ flex: 1, margin: 5 }, style]} {...rest}>
      {children}
    </SafeAreaView>
  );
};
