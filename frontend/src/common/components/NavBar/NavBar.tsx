import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export type TabKey =
  | "home"
  | "simulados"
  | "desempenho"
  | "ranking"
  | "ajustes";

export type NavItem = { key: TabKey; label: string; icon: string };

const COLORS = {
  bg: "#0F141C",
  border: "rgba(255,255,255,0.1)",
  active: "#FF9900",
  inactive: "rgba(255,255,255,0.4)",
};

export default function NavBar({
  items,
  active,
  onPress,
  variant = "bottom",
}: {
  items: NavItem[];
  active: TabKey;
  onPress: (k: TabKey) => void;
  variant?: "bottom" | "side";
}) {
  const insets = useSafeAreaInsets();

  if (variant === "bottom") {
    return (
      <View
        style={{
          backgroundColor: COLORS.bg,
          borderTopWidth: StyleSheet.hairlineWidth,
          borderTopColor: COLORS.border,
          paddingBottom: Platform.OS === "ios" ? insets.bottom : insets.bottom,
          height: 64 + insets.bottom,
        }}
        className="flex-row justify-around items-center"
      >
        {items.map((item) => {
          const focused = item.key === active;
          const color = focused ? COLORS.active : COLORS.inactive;
          return (
            <TouchableOpacity
              key={item.key}
              className="items-center justify-center"
              onPress={() => onPress(item.key)}
              accessibilityRole="button"
            >
              <Ionicons
                name={focused ? item.icon : (`${item.icon}-outline` as any)}
                size={24}
                color={color}
              />
              <Text style={{ color, fontSize: 12, marginTop: 4 }}>
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

  // side variant
  return (
    <View
      style={{
        backgroundColor: COLORS.bg,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderRightColor: COLORS.border,
        paddingTop: 24,
        paddingBottom: insets.bottom,
        width: 240,
      }}
      className=""
    >
      <View className="px-4 pb-4">
        <Text className="text-white text-lg font-bold">Quizz</Text>
      </View>
      <View className="mt-2">
        {items.map((item) => {
          const focused = item.key === active;
          const color = focused ? COLORS.active : COLORS.inactive;
          return (
            <TouchableOpacity
              key={item.key}
              className="flex-row items-center px-4 py-3"
              onPress={() => onPress(item.key)}
            >
              <Ionicons
                name={focused ? item.icon : (`${item.icon}-outline` as any)}
                size={20}
                color={color}
              />
              <Text style={{ color, marginLeft: 12 }}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
