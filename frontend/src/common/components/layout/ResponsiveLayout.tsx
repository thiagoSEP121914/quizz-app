import React, { ReactNode, useState } from "react";
import { View, useWindowDimensions } from "react-native";
import NavBar, { NavItem } from "./NavBar";

export type TabKey =
  | "home"
  | "simulados"
  | "desempenho"
  | "ranking"
  | "ajustes";

const NAV_ITEMS: NavItem[] = [
  { key: "home", label: "Início", icon: "home" },
  { key: "simulados", label: "Simulados", icon: "book" },
  { key: "desempenho", label: "Desempenho", icon: "bar-chart" },
  { key: "ranking", label: "Ranking", icon: "trophy" },
  { key: "ajustes", label: "Ajustes", icon: "settings" },
];

export default function ResponsiveLayout({
  children,
}: {
  children: (active: TabKey) => ReactNode;
}) {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const [active, setActive] = useState<TabKey>("home");

  function handlePress(key: TabKey) {
    setActive(key);
  }

  return (
    <View className="flex-1">
      {isMobile ? (
        <View className="flex-1">
          <View className="flex-1">{children(active)}</View>
          <NavBar
            items={NAV_ITEMS}
            active={active}
            onPress={handlePress}
            variant="bottom"
          />
        </View>
      ) : (
        <View className="flex-1 flex-row">
          <NavBar
            items={NAV_ITEMS}
            active={active}
            onPress={handlePress}
            variant="side"
          />
          <View className="flex-1">{children(active)}</View>
        </View>
      )}
    </View>
  );
}
