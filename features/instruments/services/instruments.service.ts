import { httpClient } from '@/shared';
import { InstrumentsValidator, TInstrument } from '../types';

class InstrumentsService {
  async getInstruments() {
    const response = await httpClient.get<TInstrument[]>('/instruments');
    return this.handleResponse(response);
  }

  async getInstrumentsByTicker(searchText: string) {
    return await httpClient.get<TInstrument[]>('/search', { query: searchText });
  }

  private async handleResponse<T>(response: T) {
    // Here will fail if api does not match expected structure. For more detailed error management,
    // safe parsing could be implemented and error handling specified at the service level.
    const validatedResponse = InstrumentsValidator.parse(response);
    return validatedResponse;
  }
}

export const instrumentsService = new InstrumentsService();
