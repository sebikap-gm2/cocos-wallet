export interface TInstrument {
  id: number;
  ticker: string;
  name: string;
  type: InstrumentType;
  last_price: number;
  close_price: number;
}

export enum InstrumentType {
  ACCIONES = "ACCIONES",
  MONEDA = "MONEDA",
}
