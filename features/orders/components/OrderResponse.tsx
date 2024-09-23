import { DS } from '@/design-system';
import { UseMutationResult } from '@tanstack/react-query';
import { TOrderResponse } from '../types';
import { Spinner } from '@/shared';

interface OrderResponseProps {
  orderMutation: UseMutationResult<TOrderResponse>;
}

export const OrderResponse = ({ orderMutation }: OrderResponseProps) => {
  return (
    <DS.View flex={1} center row gap={20}>
      {orderMutation.isPending ? (
        <Spinner />
      ) : !orderMutation.data ? (
        // TODO: Handle error state.
        <DS.Text>There was an error</DS.Text>
      ) : (
        <>
          <DS.View>
            <DS.Text type="defaultSemiBold">Order ID</DS.Text>
            <DS.Text type="subtitle">{orderMutation.data.id}</DS.Text>
          </DS.View>
          <DS.View>
            <DS.Text type="defaultSemiBold">Order Status</DS.Text>
            <DS.Text type="subtitle">{orderMutation.data.status}</DS.Text>
          </DS.View>
        </>
      )}
    </DS.View>
  );
};
