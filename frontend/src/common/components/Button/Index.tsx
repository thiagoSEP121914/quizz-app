import React from "react";
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
} from "react-native";

export interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  loading?: boolean;
  textClassName?: string;
  icon?: React.ReactNode;
}

export const Button = ({
  title,
  variant = "primary",
  loading = false,
  className = "",
  textClassName = "",
  disabled,
  icon,
  ...rest
}: ButtonProps) => {
  // Base classes and variant specific classes
  let containerStyles = "items-center justify-center rounded-full py-4 px-6 flex-row";
  let textStyles = "text-base font-bold";

  if (variant === "primary") {
    containerStyles += " bg-[#FF9900] active:opacity-90";
    textStyles += " text-[#131921]";
  } else if (variant === "secondary") {
    containerStyles += " bg-white/10 active:bg-white/20 border border-white/10";
    textStyles += " text-white";
  } else if (variant === "outline") {
    containerStyles += " bg-transparent border border-[#FF9900] active:bg-[#FF9900]/10";
    textStyles += " text-[#FF9900]";
  }

  if (disabled || loading) {
    containerStyles += " opacity-50";
  }

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled || loading}
      className={`${containerStyles} ${className}`}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "#131921" : "#FF9900"}
        />
      ) : (
        <View className="flex-row items-center justify-center">
          {icon && <View className="mr-3">{icon}</View>}
          <Text className={`${textStyles} ${textClassName}`}>{title}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};