import { DS } from "@/design-system";
import { TInstrument, useInstrumentItems } from "@/features";

export default function InstrumentDetails ({ instrumentId }: { instrumentId: TInstrument['id'] }) {
  const { data, isError, isLoading } = useInstrumentItems();
  const instrument = data?.find(i => i.id === instrumentId);

  if (!instrument) return null;

  return (
    <DS.View>
      <DS.Text>
        {instrument.name}
      </DS.Text>
    </DS.View>
  );
}