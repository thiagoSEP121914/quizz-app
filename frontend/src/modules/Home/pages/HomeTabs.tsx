import React from "react";
import { View, Text, ScrollView } from "react-native";
import ResponsiveLayout from "../../../common/components/layout/ResponsiveLayout";

export default function HomeTabs() {
  return (
    <ResponsiveLayout>
      {(active) => {
        switch (active) {
          case "home":
            return (
              <ScrollView
                contentContainerStyle={{ padding: 16 }}
                className="bg-transparent"
              >
                <Text className="text-white text-2xl font-bold mb-2">
                  Início
                </Text>
                <Text className="text-white/80 mb-3">
                  Aqui ficam os tópicos e atalhos principais conforme o mockup.
                </Text>
                <View className="bg-[#0B1116] p-3 rounded-lg">
                  <Text className="text-white font-semibold mb-1">
                    Tópico de exemplo
                  </Text>
                  <Text className="text-white/70">
                    Descrição breve do tópico e ação.
                  </Text>
                </View>
              </ScrollView>
            );
          case "simulados":
            return (
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-2xl font-bold">Simulados</Text>
                <Text className="text-white/80">Placeholder de Simulados</Text>
              </View>
            );
          case "desempenho":
            return (
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-2xl font-bold">
                  Desempenho
                </Text>
                <Text className="text-white/80">Placeholder de Desempenho</Text>
              </View>
            );
          case "ranking":
            return (
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-2xl font-bold">Ranking</Text>
                <Text className="text-white/80">Placeholder de Ranking</Text>
              </View>
            );
          case "ajustes":
            return (
              <View className="flex-1 items-center justify-center">
                <Text className="text-white text-2xl font-bold">Ajustes</Text>
                <Text className="text-white/80">Placeholder de Ajustes</Text>
              </View>
            );
          default:
            return null;
        }
      }}
    </ResponsiveLayout>
  );
}

// layout and styles use nativewind className
