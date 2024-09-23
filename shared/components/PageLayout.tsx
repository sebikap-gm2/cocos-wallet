import { DS } from '@/design-system';
import { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import { Spinner } from './Spinner';

export const PageLayout: React.FC<PropsWithChildren & ViewProps & { isLoading?: boolean }> = ({
  children,
  style,
  isLoading,
  ...rest
}) => {
  return (
    <SafeAreaView style={[{ flex: 1, margin: 5 }, style]} {...rest}>
      {isLoading ? (
        <DS.View flex={1} center justifyCenter>
          <Spinner />
        </DS.View>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};
