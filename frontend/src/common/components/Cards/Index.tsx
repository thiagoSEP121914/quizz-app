import { View, Text } from "react-native";

export interface FeatureCardProps {
  emoji: string;
  title: string;
  description: string;
}

export const FeatureCard = ({
  emoji,
  title,
  description,
}: FeatureCardProps) => {
  return (
    <View className="flex-row items-start rounded-2xl border border-white/10 bg-white/5 p-4 mb-3">
      <View className="mr-4 h-11 w-11 items-center justify-center rounded-full bg-[#FF9900]/15">
        <Text className="text-lg">{emoji}</Text>
      </View>

      <View className="flex-1">
        <Text className="text-[15px] font-bold text-white mb-1">{title}</Text>
        <Text className="text-[13px] leading-[18px] text-white/60">
          {description}
        </Text>
      </View>
    </View>
  );
};
