import React from "react";
import { View, Text } from "react-native"; // <-- Faltava essa linha!

export const PodiumAvatar = ({
  initials,
  isMe,
}: {
  initials: string;
  isMe?: boolean;
}) => (
  <View
    className={`h-10 w-10 items-center justify-center rounded-full mb-2 
    ${isMe ? "bg-[#FF9900]/20 border border-[#FF9900]" : "bg-white/10"}`}
  >
    <Text
      className={`text-[13px] font-bold ${isMe ? "text-[#FF9900]" : "text-white"}`}
    >
      {initials}
    </Text>
  </View>
);
