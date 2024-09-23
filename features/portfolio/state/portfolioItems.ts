import { atom, selector } from 'recoil';
import { TPortfolioItem } from '../types';

export const portfolioItemsAtom = atom<TPortfolioItem[]>({
  key: 'portfolioItems',
  default: [],
});

export const portfolioItemsSelector = selector({
  key: 'portfolioItems',
  get: ({ get }) => {
    const portfolioItems = get(portfolioItemsAtom);
    // Any modifications needed on the selector view;
    return portfolioItems;
  },
});
