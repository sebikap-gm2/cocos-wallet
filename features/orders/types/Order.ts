import { z } from 'zod';

export const ORDER_SIDES = z.enum(['BUY', 'SELL']);
export type ORDER_SIDE = z.infer<typeof ORDER_SIDES>;

export const ORDER_TYPES = z.enum(['MARKET', 'LIMIT']);
export type ORDER_TYPE = z.infer<typeof ORDER_TYPES>;

export const Order = z.object({
  instrument_id: z.number().int(),
  side: ORDER_SIDES,
  type: ORDER_TYPES,
  quantity: z.coerce.number(),
  price: z.coerce.number().optional(),
});
export type TOrder = z.infer<typeof Order>;

export const ORDER_STATUS = z.enum(['PENDING', 'REJECTED', 'FILLED']);
export const OrderResponse = Order.extend({
  id: z.number(),
  status: ORDER_STATUS,
});
export type TOrderResponse = z.infer<typeof OrderResponse>;
