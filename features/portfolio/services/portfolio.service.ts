import { PortfolioItemsValidator, type TPortfolioItem } from '@/features';
import { httpClient } from '@/shared';

class PortfolioService {
  async getPortfolio() {
    const response = await httpClient.get<TPortfolioItem[]>('/portfolio');
    const validatedResponse = PortfolioItemsValidator.parse(response);
    return validatedResponse;
  }
}

export const portfolioService = new PortfolioService();
