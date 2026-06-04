// components/RankingCard.tsx
import React from "react";
import { View, Text } from "react-native";

export interface RankingCardProps {
  rank: number;
  user: {
    id: number;
    name: string;
    initials: string;
    points: number;
    precision: string;
    isMe?: boolean;
  };
}

export function RankingCard({ rank, user }: RankingCardProps) {
  return (
    <View
      className={`flex-row items-center p-4 mb-3 rounded-2xl bg-zinc-900 ${
        user.isMe ? "border border-[#FF9900]" : "border border-zinc-800"
      }`}
    >
      <Text className="text-base font-bold text-white/50 w-6 text-center mr-2">
        {rank}
      </Text>

      <View className="h-10 w-10 items-center justify-center rounded-full bg-white/10 mr-4">
        <Text className="text-[13px] font-bold text-white">
          {user.initials}
        </Text>
      </View>

      <View className="flex-1">
        <Text className="text-[15px] font-bold text-white mb-0.5">
          {user.name}
        </Text>
        <Text className="text-[12px] text-white/50">
          Precisão {user.precision}
        </Text>
      </View>

      <Text className="text-[15px] font-extrabold text-white">
        {user.points}
      </Text>
    </View>
  );
}
