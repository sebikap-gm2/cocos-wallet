import { atom } from "recoil";
import { TInstrument } from "../types";

export const instrumentsAtom = atom<TInstrument[]>({
  key: "instruments",
  default: [],
});
