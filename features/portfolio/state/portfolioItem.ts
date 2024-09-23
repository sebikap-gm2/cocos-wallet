import { selectorFamily } from 'recoil';
import { portfolioItemsAtom } from './portfolioItems';

export const portfolioItemSelector = selectorFamily({
  key: 'portfolioItem',
  get:
    (filter) =>
    ({ get }) => {
      const portfolioItems = get(portfolioItemsAtom);
      return portfolioItems.find((i) => i.instrument_id === filter);
    },
});
