import React from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
  label: string;
  error?: string;
}

export const Input = ({ label, error, className = "", ...rest }: InputProps) => {
  return (
    <View className={`mb-4 ${className}`}>
      <Text className="mb-2 text-sm text-white/70">{label}</Text>
      <View
        className={`h-12 flex-row items-center rounded-xl border bg-[#1A222C] px-4 ${
          error ? "border-red-500" : "border-white/10 focus:border-[#FF9900]"
        }`}
      >
        <TextInput
          className="flex-1 text-base text-white"
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          {...rest}
        />
      </View>
      {error ? (
        <Text className="mt-1 text-xs text-red-500">{error}</Text>
      ) : null}
    </View>
  );
};
