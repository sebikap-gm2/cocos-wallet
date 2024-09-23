import { useQuery } from '@tanstack/react-query';
import { instrumentsService } from '../services';
import { useDebounce } from '@/shared';

// This hook purposly avoid saving data to recoil local state as it is intended to be a volatile search. Upon further detailing of the feature, this could change.
export const useSearchItems = (text: string) => {
  const debouncedText = useDebounce(text, 300);
  const { data, isError, isLoading } = useQuery({
    queryKey: ['search', debouncedText],
    queryFn: () => instrumentsService.getInstrumentsByTicker(debouncedText),
  });
  return { data, isError, isLoading };
};
