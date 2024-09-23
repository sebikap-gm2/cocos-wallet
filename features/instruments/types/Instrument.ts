import { z } from 'zod';

export const INSTRUMENT_TYPES = z.enum(['ACCIONES', 'MONEDA']);
export type INSTRUMENT_TYPE = z.infer<typeof INSTRUMENT_TYPES>;

export const InstrumentValidator = z.object({
  id: z.number().int(),
  ticker: z.string(),
  name: z.string(),
  type: INSTRUMENT_TYPES,
  last_price: z.number(),
  close_price: z.number(),
  returnPercentage: z.number().optional(),
});
export type TInstrument = z.infer<typeof InstrumentValidator>;

export const InstrumentsValidator = z.array(InstrumentValidator);
