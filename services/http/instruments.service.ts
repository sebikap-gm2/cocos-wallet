import { InstrumentItem } from "@/types";
import { httpClient } from "./HttpClient"

class InstrumentsService {

  async getInstruments() {
    return await httpClient.get<InstrumentItem[]>('/instruments');
  }

}

export const instrumentsService = new InstrumentsService();