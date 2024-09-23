import { z } from 'zod';

export const PortfolioItemValidator = z.object({
  instrument_id: z.number().int(),
  ticker: z.string(),
  quantity: z.number(),
  last_price: z.number(),
  close_price: z.number(),
  avg_cost_price: z.number(),
});
export type TPortfolioItem = z.infer<typeof PortfolioItemValidator>;

export const PortfolioItemsValidator = z.array(PortfolioItemValidator);
