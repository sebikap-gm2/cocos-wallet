import { PortfolioItemsValidator, type TPortfolioItem } from '@/features';
import { httpClient } from '@/shared';

class PortfolioService {
  async getPortfolio() {
    const response = await httpClient.get<TPortfolioItem[]>('/portfolio');
    return this.handleResponse(response);
  }

  private async handleResponse<T>(response: T) {
    // Here will fail if api does not match expected structure. For more detailed error management,
    // safe parsing could be implemented and error handling specified at the service level.
    const validatedResponse = PortfolioItemsValidator.parse(response);
    return validatedResponse;
  }
}

export const portfolioService = new PortfolioService();
