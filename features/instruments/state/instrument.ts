import { selectorFamily } from 'recoil';
import { instrumentsSelector } from './instruments';

export const instrumentItemSelector = selectorFamily({
  key: 'instrument',
  get:
    (filter) =>
    ({ get }) => {
      const instruments = get(instrumentsSelector);
      return instruments.find((i) => i.id === filter);
    },
});
