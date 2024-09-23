import { httpClient } from '@/shared';
import { OrderResponseValidator, TOrder } from '../types';

class OrdersService {
  async sendOrder(data: TOrder) {
    const response = await httpClient.post('/orders', data);
    // Here will fail if api does not match expected structure. For more detailed error management,
    // safe parsing could be implemented and error handling specified at the service level.
    const validatedResponse = OrderResponseValidator.parse(response);
    return validatedResponse;
  }
}

export const ordersService = new OrdersService();
