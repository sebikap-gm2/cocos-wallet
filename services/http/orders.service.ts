import { Order } from "@/types";
import { httpClient } from "./HttpClient"

class OrdersService {

  async sendOrder(data: Order) {
    return await httpClient.post('/orders', data);
  }
}

export const ordersService = new OrdersService();