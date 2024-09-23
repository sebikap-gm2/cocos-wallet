import { useQuery } from '@tanstack/react-query';
import { portfolioService } from '../../profile/services';
import { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { portfolioItemsAtom, portfolioItemsSelector } from '../state';

export const usePortfolioItems = () => {
  const setPortfolioItems = useSetRecoilState(portfolioItemsAtom);
  const portfolioItems = useRecoilValue(portfolioItemsSelector);

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
