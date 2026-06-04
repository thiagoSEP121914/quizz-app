import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export interface TopicCardProps {
  domainNumber: number;
  title: string;
  description: string;
  questionsCount: number;
  onPress?: () => void;
}

export const TopicCard = ({
  domainNumber,
  title,
  description,
  questionsCount,
  onPress,
}: TopicCardProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      className="flex-row items-center rounded-2xl border border-white/10 bg-[#161F2C] p-5 mb-4"
    >
      <View className="flex-1 pr-2">
        {/* Número do Domínio */}
        <Text className="text-[11px] font-bold tracking-widest text-[#FF9900] uppercase mb-1">
          Domínio {domainNumber}
        </Text>

        <Text className="text-[17px] font-bold text-white mb-1">{title}</Text>

        <Text className="text-[13px] leading-[18px] text-white/60 mb-3">
          {description}
        </Text>

        <Text className="text-[12px] text-white/40">
          {questionsCount} questões
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={18}
        color="rgba(255,255,255,0.3)"
      />
    </TouchableOpacity>
  );
};
