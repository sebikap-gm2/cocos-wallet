import { Colors } from "@/constants";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export const DS = {
  Colors,
  Text: ThemedText,
  View: ThemedView,
} as const
