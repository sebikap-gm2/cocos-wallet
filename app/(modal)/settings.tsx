import { DS } from "@/design-system";
import { Link } from "expo-router";

export default function SettingsModal() {
  return (
    <DS.PageLayout>
      <Link href={{ pathname: '/(tabs)' }}>GO BACK</Link>
      <DS.Text>Settings!</DS.Text>
    </DS.PageLayout>
  )
}