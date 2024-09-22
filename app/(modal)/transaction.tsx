import { DS } from "@/design-system";
import {
  TOrder,
  ORDER_SIDES,
  ORDER_TYPES,
  OrderResponse,
  ordersService,
  Order,
  usePortfolioItems,
} from "@/features";
import { useRoute } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { z } from "zod";

const modalParamsValidator = z.object({
  params: z.object({
    instrumentId: z.coerce.number().int(),
    ticker: z.string(),
  }),
});

export default function TransactionModal() {
  const route = useRoute();
  const { data } = usePortfolioItems();
  const { params } = modalParamsValidator.parse(route);
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TOrder>({
    defaultValues: {
      instrument_id: params.instrumentId,
      side: "BUY",
      type: "MARKET",
    },
  });
  const watchType = watch("type");

  if (!params) return null;
  if (!params.instrumentId) return null;
  if (!data) return null;

  const mappedOptions = data.map((o) => ({
    ...o,
    id: o.instrument_id,
    title: o.ticker,
  }));

  const onSubmit = async (data: TOrder) => {
    try {
      const parsedData = Order.parse(data);
      const response = await ordersService.sendOrder(parsedData);
      const parsedResponse = OrderResponse.parse(response);
      console.info({ parsedResponse });
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
              data={mappedOptions}
              valueField="instrument_id"
              labelField="ticker"
              searchField="ticker"
              onChange={({ instrument_id }) => field.onChange(instrument_id)}
              value={mappedOptions.find((o) => o.instrument_id === field.value)}
              searchPlaceholder="Seach by ticker..."
            />
          </DS.View>
        )}
      />
      <Controller
        name="side"
        control={control}
        defaultValue="BUY"
        rules={{ required: "You must select a side" }}
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
        rules={{ required: "You must select a type" }}
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
      {errors.quantity && (
        <DS.Text type="error">{errors.quantity.message}</DS.Text>
      )}
      {watchType === "LIMIT" ? (
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
          {errors.price && (
            <DS.Text type="error">{errors.price.message}</DS.Text>
          )}
        </>
      ) : null}
      <DS.Button text="Submit" onPress={handleSubmit(onSubmit)} />
    </DS.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 15,
    padding: "5%",
    paddingTop: "10%",
  },
});
