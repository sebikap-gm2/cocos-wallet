import { PortfolioItem } from "@/types";
import { HttpClient, httpClient } from "./HttpClient"

class PortfolioService {

  async getPortfolio() {
    return await httpClient.get<PortfolioItem[]>('/portfolio');
  }
}

export const portfolioService = new PortfolioService();