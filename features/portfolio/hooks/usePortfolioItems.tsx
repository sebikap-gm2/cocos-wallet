import { useQuery } from '@tanstack/react-query';
import { portfolioService } from '../../profile/services';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { portfolioItemsAtom } from '../state';

export const usePortfolioItems = () => {
  const [portfolioItems, setPortfolioItems] = useRecoilState(portfolioItemsAtom);
  const { data, isError, isLoading } = useQuery({
    queryKey: ['portfolio'],
    queryFn: portfolioService.getPortfolio,
  });

  useEffect(() => {
    // If we want we can keep previous ones and operate with them. For now, replacing.
    setPortfolioItems((prev) => data ?? []);
  }, [data, setPortfolioItems]);

  return { portfolioItems, isError, isLoading };
};
