import { useQuery } from "@tanstack/react-query";
import { instrumentsService } from "../services";

export const useInstrumentItems = () => {
  const { data, isError, isLoading } = useQuery({ queryKey: ['instruments'], queryFn: instrumentsService.getInstruments });
  return { data, isError, isLoading }
}