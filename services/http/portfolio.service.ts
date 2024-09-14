import { PortfolioItem } from "@/types";
import { HttpClient, httpClient } from "./HttpClient"

class PortfolioService {

  getPortfolio() {
    return httpClient.get<PortfolioItem[]>('/portfolio');
  }
}

export const portfolioService = new PortfolioService();