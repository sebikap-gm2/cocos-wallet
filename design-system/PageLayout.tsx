import { Spinner } from '@/shared';
import { PropsWithChildren } from 'react';
import { SafeAreaView, ViewProps } from 'react-native';
import { ThemedView } from './ThemedView';

export const PageLayout: React.FC<PropsWithChildren & ViewProps & { isLoading?: boolean }> = ({
  children,
  style,
  isLoading,
  ...rest
}) => {
  return (
    <SafeAreaView style={[{ flex: 1, margin: 5 }, style]} {...rest}>
      {isLoading ? (
        <ThemedView flex={1} center justifyCenter>
          <Spinner />
        </ThemedView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};
