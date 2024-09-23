import { DS } from '@/design-system';
import {
  TOrder,
  ORDER_SIDES,
  ORDER_TYPES,
  useInstrumentItems,
  instrumentItemSelector,
  useOrderAction,
  OrderResponse,
} from '@/features';
import { useRoute } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { useRecoilValue } from 'recoil';
import { z } from 'zod';

const modalParamsValidator = z.object({
  params: z.object({
    instrumentId: z.coerce.number().int(),
  }),
});

export default function TransactionModal() {
  const route = useRoute();
  const { params } = modalParamsValidator.parse(route);
  const { instruments } = useInstrumentItems();
  const { orderMutation } = useOrderAction();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TOrder>({
    defaultValues: {
      instrument_id: params.instrumentId,
      side: 'BUY',
      type: 'MARKET',
    },
  });
  const watchType = watch('type');
  const watchSelectedInstrumentId = watch('instrument_id');
  const selectedInstrument = useRecoilValue(instrumentItemSelector(watchSelectedInstrumentId));

  if (!params) return null;
  if (!params.instrumentId) return null;
  if (!instruments) return null;

  const onSubmit = (data: TOrder) => {
    try {
      orderMutation.mutate(data);
    } catch (err) {
      console.error({ err });
    }
  };

  return (
    <DS.View full style={styles.container}>
      <DS.Text type="title">Transaction</DS.Text>
      <Controller
        name="instrument_id"
        control={control}
        render={({ field }) => (
          <DS.View full>
            <DS.DropDown
              data={instruments}
              valueField="id"
              labelField="ticker"
              searchField="ticker"
              onChange={({ id }) => field.onChange(id)}
              value={selectedInstrument}
              searchPlaceholder="Seach by ticker..."
            />
          </DS.View>
        )}
      />
      <Controller
        name="side"
        control={control}
        defaultValue="BUY"
        rules={{ required: 'You must select a side' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DS.View full>
            <DS.Tabs
              options={ORDER_SIDES.options.map((side) => ({ title: side }))}
              selectedValue={value}
              setSelectedValue={onChange}
            />
          </DS.View>
        )}
      />
      {errors.side && <DS.Text type="error">{errors.side.message}</DS.Text>}
      <Controller
        name="type"
        control={control}
        defaultValue="MARKET"
        rules={{ required: 'You must select a type' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DS.View full>
            <DS.Tabs
              options={ORDER_TYPES.options.map((type) => ({ title: type }))}
              selectedValue={value}
              setSelectedValue={onChange}
            />
          </DS.View>
        )}
      />
      {errors.type && <DS.Text type="error">{errors.type.message}</DS.Text>}
      <Controller
        name="quantity"
        control={control}
        // rules={{
        //   required: true,
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DS.TextInput
            inputMode="numeric"
            placeholder="Quantity"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString()}
          />
        )}
      />
      {errors.quantity && <DS.Text type="error">{errors.quantity.message}</DS.Text>}
      {watchType === 'LIMIT' ? (
        <>
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DS.TextInput
                inputMode="numeric"
                placeholder="Price"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value?.toString()}
              />
            )}
          />
          {errors.price && <DS.Text type="error">{errors.price.message}</DS.Text>}
        </>
      ) : null}
      <DS.Button text="Submit" onPress={handleSubmit(onSubmit)} />
      <OrderResponse orderMutation={orderMutation} />
      {/* {orderMutation.isPending ? <Spinner /> : null}
      {orderResponse ? (
        <>
          <DS.Text>Order ID: {orderResponse.id}</DS.Text>
          <DS.Text>Status: {orderResponse.status}</DS.Text>
        </>
      ) : null} */}
    </DS.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 15,
    padding: '5%',
    paddingTop: '10%',
  },
});
