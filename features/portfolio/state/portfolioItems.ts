import { atom } from 'recoil';
import { TPortfolioItem } from '../types';

export const portfolioItemsAtom = atom<TPortfolioItem[]>({
  key: 'portfolioItems',
  default: [],
});
