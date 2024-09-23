import { httpClient } from '@/shared';
import { TOrder } from '../types';

class OrdersService {
  async sendOrder(data: TOrder) {
    return await httpClient.post('/orders', data);
  }
}

export const ordersService = new OrdersService();
