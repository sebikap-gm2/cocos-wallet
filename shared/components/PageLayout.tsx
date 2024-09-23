import { DS } from '@/design-system';
import { Spinner } from '@/shared';
import { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';

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
