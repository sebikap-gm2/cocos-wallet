import { DS } from '@/design-system';
import { InstrumentDetailsRow, instrumentSelector, InstrumentType } from '@/features';
import { formatCurrency } from '@/utils';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useRecoilValue } from 'recoil';
import { z } from 'zod';

const InstrumentDetailsParamsValidator = z.object({
  params: z.object({
    instrumentId: z.coerce.number().int(),
  }),
});

export default function InstrumentDetails() {
  const route = useRoute();
  const { params } = InstrumentDetailsParamsValidator.parse(route);
  const instrument = useRecoilValue(instrumentSelector(params.instrumentId));

  if (!instrument) return null;

  const icon = instrument.type === InstrumentType.ACCIONES ? 'stats-chart-outline' : 'cash-outline';

  return (
    <DS.View flex={1} full gap={20} style={{ padding: 20 }}>
      <DS.View center gap={10}>
        <Ionicons name={icon} size={32} color="white" />
        <DS.Text type="title">{instrument.ticker}</DS.Text>
      </DS.View>
      <InstrumentDetailsRow title="Name" value={instrument.name} />
      <InstrumentDetailsRow
        title="Last Price"
        value={formatCurrency({ value: instrument.last_price, shorten: true })}
      />
      <InstrumentDetailsRow
        title="Close Price"
        value={formatCurrency({ value: instrument.close_price, shorten: true })}
      />
      <InstrumentDetailsRow title="Return %" value={`${instrument.returnPercentage}%`} />
    </DS.View>
  );
}
