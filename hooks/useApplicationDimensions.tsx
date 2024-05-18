import {
  View,
  Text,
  ScaledSize,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import React from "react";

export default function useApplicationDimensions(): ScaledSize {
  const { width, height, scale, fontScale } = useWindowDimensions();

  return {
    width,
    height: height + (StatusBar?.currentHeight || 0),
    scale,
    fontScale,
  };
}
