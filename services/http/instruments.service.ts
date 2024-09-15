import { InstrumentItem } from "@/types";
import { httpClient } from "./HttpClient"

class InstrumentsService {

  getInstruments() {
    return httpClient.get<InstrumentItem[]>('/instruments');
  }

}

export const instrumentsService = new InstrumentsService();