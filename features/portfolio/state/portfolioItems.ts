import { atom, selector } from 'recoil';
import { TPortfolioItem } from '../types';
import { getUniqueByField } from '@/utils';

export const portfolioItemsAtom = atom<TPortfolioItem[]>({
  key: 'portfolioItems-base',
  default: [],
});

export const portfolioItemsSelector = selector({
  key: 'portfolioItems',
  get: ({ get }) => {
    const portfolioItems = get(portfolioItemsAtom);
    // TODO: filter response on the selector level based on decision from engineering team to avoid duplicates.
    const unique = getUniqueByField(portfolioItems, 'instrument_id');
    return unique;
  },
});
