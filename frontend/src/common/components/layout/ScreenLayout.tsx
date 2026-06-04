import React from "react";
import { View, Text, ScrollView } from "react-native";

interface ScreenLayoutProps {
  subtitle: string;
  title: string;
  rightElement?: React.ReactNode;
  children: React.ReactNode;
  disableScroll?: boolean;
}

export const ScreenLayout = ({
  subtitle,
  title,
  rightElement,
  children,
  disableScroll = false,
}: ScreenLayoutProps) => {
  return (
    <View className="flex-1 bg-[#0F141C]">
      {/* HEADER INTEGRADO */}
      <View className="flex-row items-center justify-between px-6 pt-6 pb-4 mt-4">
        <View className="flex-1">
          <Text className="text-[11px] font-bold tracking-widest text-[#FF9900] uppercase mb-0.5">
            {subtitle}
          </Text>
          <Text className="text-2xl font-bold text-white">{title}</Text>
        </View>

        {rightElement && <View className="ml-4">{rightElement}</View>}
      </View>

      {disableScroll ? (
        <View className="flex-1 px-6 pb-8">{children}</View>
      ) : (
        <ScrollView
          className="flex-1 px-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
        >
          {children}
        </ScrollView>
      )}
    </View>
  );
};
