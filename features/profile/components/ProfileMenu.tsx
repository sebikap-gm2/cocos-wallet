import { DS } from "@/design-system";
import { openExternalLink } from "@/utils";
import { useRouter } from "expo-router";

function ProfileMenu() {
  const router = useRouter();

  return (
    <>
      <DS.Button
        type="plain"
        icon="settings"
        text="Settings"
        onPress={() => router.navigate("/(modal)/settings")}
        center={false}
      />
      <DS.Button
        type="plain"
        icon="help"
        text="Help"
        onPress={() => openExternalLink("https://cocos.capital/ayuda")}
        center={false}
      />
    </>
  );
}

export { ProfileMenu };
