import { useState, useEffect } from "react";
import { Animated, StyleSheet } from "react-native";
import { ThemedButton } from "./ThemedButton";
import { ThemedText } from "./ThemedText";

interface SwitchProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

export const ThemedSwitch = ({ value, onChange }: SwitchProps) => {
  const [animation] = useState(new Animated.Value(value ? 1 : 0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: value ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [value, animation]);

  const interpolatedBackgroundColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ["#ccc", "#4caf50"], // background colors for off and on states
  });

  const interpolatedPosition = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30], // positions for the knob
  });

  return (
    <ThemedButton
      style={styles.switchContainer}
      onPress={() => onChange(!value)}
    >
      <Animated.View
        style={[
          styles.switchKnob,
          {
            backgroundColor: "white", // knob color
            transform: [{ translateX: interpolatedPosition }],
          },
        ]}
      />
      <Animated.View
        style={[
          styles.switchBackground,
          {
            backgroundColor: interpolatedBackgroundColor,
          },
        ]}
      />
      <ThemedText style={styles.switchLabel}>{value ? "ON" : "OFF"}</ThemedText>
    </ThemedButton>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 60,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 5,
    position: "relative",
    alignItems: "center",
  },
  switchKnob: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: "absolute",
    top: 3,
    left: 3,
  },
  switchBackground: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 15,
  },
  switchLabel: {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    top: 4,
    left: 30,
  },
});
