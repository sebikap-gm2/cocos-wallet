import { selectorFamily } from 'recoil';
import { instrumentsAtom } from './instruments';

export const instrumentSelector = selectorFamily({
  key: 'instrument',
  get:
    (filter) =>
    ({ get }) => {
      const instruments = get(instrumentsAtom);
      return instruments.find((i) => i.id === filter);
    },
});
