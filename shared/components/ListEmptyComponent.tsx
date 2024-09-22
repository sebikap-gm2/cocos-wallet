import { DS } from "@/design-system"

interface ListEmptyComponentProps {
  message: string
}

export const ListEmptyComponent = ({ message }: ListEmptyComponentProps) => {
  return <DS.View><DS.Text>{message}</DS.Text></DS.View>
}