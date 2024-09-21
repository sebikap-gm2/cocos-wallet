import { PortfolioItem } from "@/types";
import { httpClient } from "./HttpClient"
import { getUniqueByField } from "@/utils";

class PortfolioService {

  async getPortfolio() {
    const response = await httpClient.get<PortfolioItem[]>('/portfolio');
    // TODO: filter response on the Service level based on decision from engineering team to avoid duplicates.
    return getUniqueByField(response, 'instrument_id');
  }
}

export const portfolioService = new PortfolioService();