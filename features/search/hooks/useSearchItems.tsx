import { useQuery } from "@tanstack/react-query";
import { searchService } from "../services";
import { useDebounce } from "@/shared";

export const useSearchItems = (text: string) => {
  const debouncedText = useDebounce(text, 300);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["search", debouncedText],
    queryFn: () => searchService.getInstrumentsByTicker(debouncedText),
  });
  return { data, isError, isLoading };
};
