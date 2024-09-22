import { TInstrument } from "@/features";
import { httpClient } from "@/shared";

class SearchService {

  getInstrumentsByTicker(searchText: string) {
    return httpClient.get<TInstrument[]>('/search', { 'query': searchText });
  }

}

export const searchService = new SearchService();