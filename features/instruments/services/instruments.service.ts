import { httpClient } from '@/shared';
import { InstrumentsValidator, TInstrument } from '../types';

class InstrumentsService {
  async getInstruments() {
    const response = await httpClient.get<TInstrument[]>('/instruments');
    const validatedResponse = InstrumentsValidator.parse(response);
    return validatedResponse;
  }
}

export const instrumentsService = new InstrumentsService();
