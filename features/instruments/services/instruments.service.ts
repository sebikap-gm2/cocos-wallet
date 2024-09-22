import { httpClient } from "@/shared";
import { TInstrument } from "../types";

class InstrumentsService {
  async getInstruments() {
    return await httpClient.get<TInstrument[]>("/instruments");
  }
}

export const instrumentsService = new InstrumentsService();
