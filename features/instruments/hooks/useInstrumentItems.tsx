import { useQuery } from "@tanstack/react-query";
import { instrumentsService } from "../services";
import { useRecoilState } from "recoil";
import { instrumentsAtom } from "../state";
import { useEffect } from "react";

export const useInstrumentItems = () => {
  const [instruments, setInstruments] = useRecoilState(instrumentsAtom);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["instruments"],
    queryFn: instrumentsService.getInstruments,
  });

  useEffect(() => {
    const instrumentsWithAddedFields = data?.map((i) => ({
      ...i,
      returnPercentage: Math.round(
        ((i.last_price - i.close_price) / i.close_price) * 100,
      ),
    }));

    // If we want we can keep previous ones and operate with them. For now, replacing.
    setInstruments((prev) => instrumentsWithAddedFields ?? []);
  }, [data, setInstruments]);

  return { instruments, isError, isLoading };
};
