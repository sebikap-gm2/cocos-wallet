import { selectorFamily } from 'recoil';
import { portfolioItemsSelector } from './portfolioItems';

export const portfolioItemSelector = selectorFamily({
  key: 'portfolioItem',
  get:
    (filter) =>
    ({ get }) => {
      const portfolioItems = get(portfolioItemsSelector);
      return portfolioItems.find((i) => i.instrument_id === filter);
    },
});
