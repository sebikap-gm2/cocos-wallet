export interface InstrumentItem {
  id: number;
  ticker: string;
  name: string;
  type: InstrumentType;
  last_price: number;
  close_price: number;
}

export enum InstrumentType {
  Acciones = "ACCIONES",
  Moneda = "MONEDA",
}
