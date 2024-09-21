import { DS } from '@/design-system';
import { useRoute } from '@react-navigation/native';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { z } from 'zod';
import { ORDER_TYPES, ORDER_SIDES, Order, OrderResponse } from '@/types';
import { ordersService } from '@/services';

const modalParamsValidator = z.object({
  params: z.object({
    instrumentId: z.coerce.number().int(),
    ticker: z.string(),
  })
});

export default function TransactionModal() {
  const route = useRoute();
  const { params } = modalParamsValidator.parse(route);
  const { control, handleSubmit, watch, formState: { errors } } = useForm<Order>({
    defaultValues: {
      instrument_id: params.instrumentId,
      side: 'BUY',
      type: 'MARKET',
    }
  });
  const watchType = watch("type")

  if (!params) return null;
  if (!params.instrumentId) return null;

  const onSubmit = async (data: Order) => {
    try {
      const parsedData = Order.parse(data);
      const response = await ordersService.sendOrder(parsedData)
      const parsedResponse = OrderResponse.parse(response);
      console.info({ parsedResponse });
    } catch (err) {
      console.error({ err });
    }
  }

  return (
    <DS.View full style={styles.container}>
      <DS.Text>{params.ticker}</DS.Text>
      <Controller
        name="side"
        control={control}
        defaultValue='BUY'
        rules={{ required: 'You must select a side' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DS.View full>
            <DS.Tabs
              options={ORDER_SIDES.options.map(side => ({ title: side }))}
              selectedValue={value}
              setSelectedValue={onChange}
            />
          </DS.View>
        )}
      />
      {errors.side && <DS.Text type='error'>{errors.side.message}</DS.Text>}
      <Controller
        name="type"
        control={control}
        defaultValue='MARKET'
        rules={{ required: 'You must select a type' }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DS.View full>
            <DS.Tabs
              options={ORDER_TYPES.options.map(type => ({ title: type }))}
              selectedValue={value}
              setSelectedValue={onChange}
            />
          </DS.View>
        )}
      />
      {errors.type && <DS.Text type='error'>{errors.type.message}</DS.Text>}
      <Controller
        name="quantity"
        control={control}
        // rules={{
        //   required: true,
        // }}
        render={({ field: { onChange, onBlur, value } }) => (
          <DS.TextInput
            inputMode='numeric'
            placeholder="Quantity"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value?.toString()}
          />
        )}
      />
      {errors.quantity && <DS.Text type='error'>{errors.quantity.message}</DS.Text>}
      {watchType === 'LIMIT' ? (
        <>
          <Controller
            name="price"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <DS.TextInput
                inputMode='numeric'
                placeholder="Price"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value?.toString()}
              />
            )}
          />
          {errors.price && <DS.Text type='error'>{errors.price.message}</DS.Text>}
        </>
      ) : null}
      <DS.Button text="Submit" onPress={handleSubmit(onSubmit)} />
    </DS.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
