import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Importando a lib

export interface FeatureCardProps {
  icon: keyof typeof Ionicons.glyphMap; // Tipagem perfeita que sugere os nomes corretos!
  title: string;
  description: string;
  onPress?: () => void;
}

export const FeatureCard = ({
  icon,
  title,
  description,
  onPress,
}: FeatureCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      activeOpacity={0.7}
      className="flex-row items-start rounded-2xl border border-white/10 bg-white/5 p-4 mb-3"
    >
      {/* Container do Ícone */}
      <View className="mr-4 h-11 w-11 items-center justify-center rounded-full bg-[#FF9900]/15">
        <Ionicons name={icon} size={22} color="#FF9900" />
      </View>

      <View className="flex-1">
        <Text className="text-[15px] font-bold text-white mb-1">{title}</Text>
        <Text className="text-[13px] leading-[18px] text-white/60">
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
