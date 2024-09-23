import { atom, selector } from 'recoil';
import { TInstrument } from '../types';

export const instrumentsAtom = atom<TInstrument[]>({
  key: 'instruments-base',
  default: [],
});

export const instrumentsSelector = selector({
  key: 'instruments',
  get: ({ get }) => {
    // We save the data such as we get it from the API, we modify only the view over the data.
    // If this causes a performance issue, it can be done on fetching, but it is preferable from a responsability standpoint to separate concerns.
    const instruments = get(instrumentsAtom);
    const mappedInstruments = instruments.map((i) => ({
      ...i,
      returnPercentage: Math.round(((i.last_price - i.close_price) / i.close_price) * 100),
    }));
    return mappedInstruments;
  },
});
