import { InstrumentItem } from "@/types";
import { httpClient } from "./HttpClient"

class SearchService {

  getInstrumentsByTicker(searchText: string) {
    return httpClient.get<InstrumentItem[]>('/search', { 'query': searchText });
  }

}

export const searchService = new SearchService();