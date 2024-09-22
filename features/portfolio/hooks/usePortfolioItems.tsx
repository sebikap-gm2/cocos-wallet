import { useQuery } from "@tanstack/react-query";
import { portfolioService } from "../../profile/services";

export const usePortfolioItems = () => {
  const { data, isError, isLoading } = useQuery({ queryKey: ['portfolio'], queryFn: portfolioService.getPortfolio });
  return { data, isError, isLoading }
}