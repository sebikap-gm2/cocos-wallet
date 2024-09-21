import { Colors } from "@/constants";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { ThemedButton } from "./ThemedButton";
import { ThemedSwitch } from "./ThemedSwitch";
import { ThemedTextInput } from "./ThemedTextInput";
import { ThemedTabs } from "./ThemedTabs";
import { PageLayout } from "./PageLayout";

export const DS = {
  Colors,
  Button: ThemedButton,
  PageLayout,
  Switch: ThemedSwitch,
  Tabs: ThemedTabs,
  Text: ThemedText,
  TextInput: ThemedTextInput,
  View: ThemedView,
} as const

// typography: Typography,
// palette: Palette,
// spacing: Spacing,
// Frame,
// Icon,
// Button