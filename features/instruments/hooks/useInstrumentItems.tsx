import { useQuery } from '@tanstack/react-query';
import { instrumentsService } from '../services';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { instrumentsAtom, instrumentsSelector } from '../state';
import { useEffect } from 'react';

export const useInstrumentItems = () => {
  const setInstruments = useSetRecoilState(instrumentsAtom);
  const instruments = useRecoilValue(instrumentsSelector);

  const { data, isError, isLoading } = useQuery({
    queryKey: ['instruments'],
    queryFn: async () => instrumentsService.getInstruments(),
  });

  useEffect(() => {
    // If we want we can keep previous ones and operate with them. For now, replacing.
    setInstruments((prev) => data ?? []);
  }, [data, setInstruments]);

  return { instruments, isError, isLoading };
};
