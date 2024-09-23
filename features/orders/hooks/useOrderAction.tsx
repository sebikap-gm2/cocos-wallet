import { useMutation } from '@tanstack/react-query';
import { ordersService } from '../services';
import { OrderValidator, OrderResponseValidator } from '../types';

export const useOrderAction = () => {
  const orderMutation = useMutation({
    mutationFn: async (data: unknown) => {
      const parsedData = OrderValidator.parse(data);
      const response = await ordersService.sendOrder(parsedData);
      const parsedResponse = OrderResponseValidator.parse(response);
      return parsedResponse;
    },
  });

  return { orderMutation };
};
